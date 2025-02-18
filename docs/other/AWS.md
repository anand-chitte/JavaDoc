
# Spring Boot + AWS EC2 + S3 + RDS + Docker

This guide will help you:
1. **Deploy a Spring Boot app** on **AWS EC2** using **Docker**.
2. **Connect to AWS S3** to **upload & download** files.
3. **Configure AWS RDS** (PostgreSQL/MySQL) for the database.

## 1. Create AWS S3 Bucket
1. **AWS Console → S3 → Create Bucket**.
2. Choose a **unique name** and **region** (e.g., `us-east-1`).
3. **Uncheck "Block all public access"** (for testing).
4. Click **Create Bucket**.

## 2. Set Up AWS RDS (PostgreSQL/MySQL)
1. **AWS Console → RDS → Create Database**.
2. Select **PostgreSQL** or **MySQL**.
3. Choose **Free Tier** or **t3.micro** (for production).
4. Set:
   - **DB Instance Identifier** → `your-db-instance`
   - **Master Username** → `your-username`
   - **Master Password** → `your-password`
5. Select **"Publicly Accessible = No"** (for security).
6. Set **VPC & Security Group** (same as EC2).
7. Click **Create Database**.

**Get RDS Endpoint:**
- Navigate to **RDS → Databases**.
- Copy the **endpoint**:  
  ```
  your-db-instance.xxx.us-east-1.rds.amazonaws.com
  ```

## 3. Configure Spring Boot for RDS
### PostgreSQL Configuration (`application.properties`)
```properties
spring.datasource.url=jdbc:postgresql://your-db-instance.xxx.rds.amazonaws.com:5432/your-database-name
spring.datasource.username=your-username
spring.datasource.password=your-password

spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

### MySQL Configuration (`application.properties`)
```properties
spring.datasource.url=jdbc:mysql://your-db-instance.xxx.rds.amazonaws.com:3306/your-database-name
spring.datasource.username=your-username
spring.datasource.password=your-password

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```

## 4. Install PostgreSQL/MySQL Client on EC2
Before running the Spring Boot app, verify that EC2 can connect to RDS.

### For PostgreSQL
```bash
# Amazon Linux
sudo yum install postgresql -y  

# Ubuntu
sudo apt install postgresql-client -y  

# Test Connection
psql -h your-db-instance.xxx.rds.amazonaws.com -U your-username -d your-database-name
```
Enter your **RDS password** when prompted.

### For MySQL
```bash
# Amazon Linux
sudo yum install mysql -y  

# Ubuntu
sudo apt install mysql-client -y  

# Test Connection
mysql -h your-db-instance.xxx.rds.amazonaws.com -u your-username -p
```
Enter your **RDS password** and check if you can run SQL queries.

## 5. Implement S3 File Upload/Download
### Add Dependency
```xml
<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.20.20</version>
</dependency>
```

### S3 Service
```java
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.File;

@Service
public class S3Service {

    private final S3Client s3Client;

    public S3Service() {
        this.s3Client = S3Client.builder()
                .credentialsProvider(ProfileCredentialsProvider.create())
                .region(software.amazon.awssdk.regions.Region.US_EAST_1)
                .build();
    }

    public String uploadFile(String bucketName, File file) {
        s3Client.putObject(
                PutObjectRequest.builder().bucket(bucketName).key(file.getName()).build(),
                RequestBody.fromFile(file)
        );
        return "File uploaded: " + file.getName();
    }

    public File downloadFile(String bucketName, String fileName, String downloadPath) {
        File localFile = new File(downloadPath + fileName);
        s3Client.getObject(
                GetObjectRequest.builder().bucket(bucketName).key(fileName).build(),
                localFile.toPath()
        );
        return localFile;
    }
}
```

### S3 Controller
```java
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/s3")
public class S3Controller {

    private final S3Service s3Service;

    public S3Controller(S3Service s3Service) {
        this.s3Service = s3Service;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            File tempFile = File.createTempFile("upload-", file.getOriginalFilename());
            file.transferTo(tempFile);
            String result = s3Service.uploadFile("your-bucket-name", tempFile);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/download")
    public ResponseEntity<String> downloadFile(@RequestParam("fileName") String fileName) {
        File file = s3Service.downloadFile("your-bucket-name", fileName, "/tmp/");
        return file.exists() ? ResponseEntity.ok("File downloaded: " + file.getAbsolutePath()) 
                             : ResponseEntity.badRequest().body("Download failed!");
    }
}
```

## 6. Dockerize Spring Boot App
### Create `Dockerfile`
```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Build & Run Locally
```bash
mvn clean package -DskipTests
docker build -t my-spring-app .
docker run -p 8080:8080 my-spring-app
```

## 7. Deploy to AWS EC2
### Launch EC2 Instance
1. **AWS Console → EC2 → Launch Instance**.
2. Choose **Ubuntu 22.04** or **Amazon Linux 2**.
3. Select **t2.micro** (for free tier).
4. Add **Security Group**:
   - Open **port 22** (SSH).
   - Open **port 8080** (for API).

### Install Docker on EC2
SSH into EC2:
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```
Install Docker:
```bash
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker $USER
```
Log out and log in again.

### Transfer & Run Docker Image
```bash
scp -i your-key.pem my-spring-app.tar ubuntu@your-ec2-ip:/home/ubuntu/
ssh -i your-key.pem ubuntu@your-ec2-ip
docker load < my-spring-app.tar
docker run -p 8080:8080 my-spring-app
```
Your API is now live at:
```
http://your-ec2-ip:8080/s3/upload
http://your-ec2-ip:8080/s3/download?fileName=yourfile.jpg
```

## 8. Automate with Docker Compose
Create a **docker-compose.yml**:
```yaml
version: '3.8'
services:
  app:
    image: my-spring-app
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://your-db-instance.xxx.rds.amazonaws.com:5432/your-database-name
      - SPRING_DATASOURCE_USERNAME=your-username
      - SPRING_DATASOURCE_PASSWORD=your-password
```
Run:
```bash
docker-compose up -d
```

## Next Steps
- Set up **IAM Role** for EC2 instead of access keys.
- Use **Elastic IP** for a fixed EC2 address.
- Automate deployment with **CI/CD (GitHub Actions + AWS ECS/ECR)**.

Let me know if you need further help! 🚀
