# Docker

Docker is an open-source platform used for developing, shipping, and running applications. It allows you to package an application and its dependencies into a **container**, which can run consistently across different environments, such as development, testing, and production.

## Key Docker Concepts

### 1. **Container**
A lightweight, standalone, executable package that includes everything needed to run a piece of software, such as the code, runtime, libraries, and system tools. Containers are isolated from the host system but share the OS kernel.

### 2. **Image**
A read-only template used to create containers. It contains the application and its dependencies. Images are built from Dockerfiles, which are scripts containing instructions on how to build the image.

### 3. **Dockerfile**
A script that contains instructions for Docker to create an image. It defines the application's environment, dependencies, and configuration settings.

### 4. **Docker Hub**
A public repository where Docker images can be shared. It’s similar to GitHub, but for Docker images.

### 5. **Docker Compose**
A tool used for defining and running multi-container Docker applications. You define a YAML file (`docker-compose.yml`) to configure the services, networks, and volumes needed for your application.

### 6. **Docker Engine**
The runtime that builds, runs, and manages containers. It consists of:
- **Docker daemon** (server)
- **REST API**
- **Command-line interface** (CLI)

## Benefits of Docker

Docker helps ensure that applications run the same way, regardless of where they are deployed. It is ideal for:
- **Microservices**
- **Cloud-native applications**
- **CI/CD pipelines**

# Docker Cheatsheet

---

### **Docker Setup**
- `docker --version` - Check Docker version.  
- `docker info` - Display Docker system-wide information.  

---

### **Container Management**
- `docker ps` - List running containers.  
- `docker ps -a` - List all containers.  
- `docker run <image>` - Run a container from an image.  
- `docker run -d <image>` - Run a container in detached mode.  
- `docker run -it <image>` - Run a container interactively.  
- `docker start <container>` - Start a stopped container.  
- `docker stop <container>` - Stop a running container.  
- `docker restart <container>` - Restart a container.  
- `docker rm <container>` - Remove a container.  
- `docker rm -f <container>` - Force remove a running container.  
- `docker logs <container>` - View logs of a container.  
- `docker exec -it <container> bash` - Access a running container’s shell.  

---

### **Image Management**
- `docker images` - List all Docker images.  
- `docker pull <image>` - Download an image from Docker Hub.  
- `docker push <image>` - Push an image to Docker Hub.  
- `docker build -t <image:tag> .` - Build an image from a Dockerfile.  
- `docker rmi <image>` - Remove an image.  
- `docker tag <source-image> <target-image>` - Tag an image with a new name.  
- `docker inspect <image>` - View details of an image.  

---

### **Network Management**
- `docker network ls` - List all networks.  
- `docker network create <name>` - Create a new network.  
- `docker network rm <name>` - Remove a network.  
- `docker network inspect <name>` - View details of a network.  
- `docker network connect <network> <container>` - Connect a container to a network.  
- `docker network disconnect <network> <container>` - Disconnect a container from a network.  

---

### **Volume Management**
- `docker volume ls` - List all volumes.  
- `docker volume create <name>` - Create a new volume.  
- `docker volume rm <name>` - Remove a volume.  
- `docker volume inspect <name>` - View details of a volume.  

---

### **Container Cleanup**
- `docker system prune` - Remove unused data (containers, networks, images, and volumes).  
- `docker container prune` - Remove all stopped containers.  
- `docker image prune` - Remove unused images.  
- `docker volume prune` - Remove unused volumes.  

---

### **Docker Compose**
- `docker-compose up` - Start all services defined in `docker-compose.yml`.  
- `docker-compose up -d` - Start all services in detached mode.  
- `docker-compose down` - Stop and remove all services.  
- `docker-compose ps` - List running services.  
- `docker-compose logs` - View logs of services.  
- `docker-compose exec <service> bash` - Access a running service container’s shell.  

---

### **Miscellaneous**
- `docker save -o <file> <image>` - Save an image to a tar file.  
- `docker load -i <file>` - Load an image from a tar file.  
- `docker stats` - Display live resource usage stats for containers.  
- `docker top <container>` - Display processes running in a container.  
- `docker history <image>` - Show the history of an image.  
