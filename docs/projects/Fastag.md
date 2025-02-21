# Documentation: Communication Between HDFC FASTag Microservices and NETC System for Automatic Toll Deduction

---

## 1. Overview

This document explains how **HDFC’s FASTag microservices** communicate with the **NETC Switch** (operated by NPCI) for automatic toll deduction at toll plazas. It describes the flow of data from the moment a vehicle with an **HDFC FASTag** passes through a toll plaza to the final deduction from the vehicle owner's account.

The **NETC System** (National Electronic Toll Collection) is a centralized platform for managing toll payments in India, facilitating interoperability between various **FASTag providers** (banks) and **toll plazas**. This document focuses on the interaction between **HDFC’s FASTag microservices** and the **NETC Switch**.

---

## 2. Key Participants

1. **HDFC FASTag Microservices**: Responsible for handling communication between HDFC’s systems and the NETC platform, including transaction processing, account management, and customer notifications.
2. **NETC Switch (NPCI-managed)**: The centralized platform that manages toll payments and transactions between toll plazas and FASTag providers.
3. **Toll Plaza Infrastructure**: Includes RFID readers, cameras, and automated toll collection systems.
4. **Vehicle Owner’s Bank Account**: The HDFC Bank account or prepaid wallet linked to the FASTag for toll payment.
5. **FASTag**: A prepaid RFID tag linked to the vehicle owner's account, enabling automatic toll payment.

---

## 3. How to Apply for FASTag Online via the HDFC Bank Website

To apply for a FASTag online through HDFC Bank, follow these steps:

1. **Open the HDFC Bank Website**: Navigate to the official HDFC Bank website and go to the FASTag section.
   
2. **Fill in Your Mobile Number and PAN**: Enter your mobile number and PAN details in the required fields.
   
3. **Verify Your Details**: Verify your PAN details to ensure they match the records. You will have three attempts to enter the correct PAN information.

4. **Select Your Bank Account**: 
   - If you are an existing HDFC Bank customer, select your bank account.
   - If you are a new user, provide your personal details and vehicle information.
   
5. **Upload Documents**: Upload the required documents:
   - Your vehicle's **RC (Registration Certificate)**.
   - **Front** and **side images** of the vehicle.
   
6. **Enter Vehicle Details**: Input the last five digits of your vehicle’s **engine number** and **chassis number**.

7. **Review and Accept Terms**: Review all your entered details and accept the **terms and conditions** to proceed.

8. **Enter OTP**: Enter the OTP sent to your mobile number for verification.

9. **Make Payment**: Proceed to pay for the FASTag.

10. **Confirmation**: Once your application is successful, you will receive a **confirmation message**.

**Note**: It is essential to accept the terms and conditions and verify your PAN details. If your PAN does not match the records, you will not be able to proceed with the application.

---

## 4. Communication Flow

The following section details the step-by-step communication flow from the vehicle passing through the toll plaza to the payment deduction.

---

### Step 1: Vehicle Approaches Toll Plaza

- The vehicle approaches the **FASTag lane** at the toll plaza, where an **RFID reader** scans the **FASTag** attached to the vehicle’s windshield.
- The **FASTag ID** (a unique identifier) is read by the RFID scanner.

---

### Step 2: FASTag Data Sent to NETC Switch

- The **NETC Switch** receives the **FASTag ID** from the toll plaza's RFID reader.
- This FASTag ID contains information about which **FASTag provider** (bank) issued the tag. For example, HDFC FASTags may have a specific prefix such as **HDFC001**, **HDFC002**, etc.

---

### Step 3: NETC Switch Verifies FASTag Provider

- The **NETC Switch** uses the **FASTag ID** to query a **central registry** or mapping database that stores the **prefixes** for various FASTag providers (e.g., HDFC, ICICI, SBI).
- Based on the FASTag ID prefix (e.g., "HDFC"), the **NETC Switch** identifies that the **HDFC FASTag microservice** needs to be contacted.

---

### Step 4: NETC Switch Communicates with HDFC Microservice

- The **NETC Switch** sends a **transaction request** to **HDFC’s FASTag microservice** via an **API call**.
- The transaction request includes the following details:
  - Vehicle ID
  - FASTag ID
  - Toll amount
  - Timestamp

---

### Step 5: HDFC FASTag Microservice Processes the Transaction

- **HDFC’s microservice** receives the transaction request and performs the following actions:
  - **Validate** the **FASTag ID** and ensure it matches the vehicle owner’s details in HDFC’s backend system.
  - **Check the account balance** or prepaid wallet associated with the FASTag to verify if sufficient funds are available for toll payment.
  - **Authorize the payment**: If the balance is sufficient, the microservice processes the toll deduction.
  - **Send the payment authorization** to **HDFC Bank's backend payment systems** for further processing.

---

### Step 6: Payment Authorization and Confirmation

- **HDFC’s backend payment system** processes the payment, and the toll amount is deducted from the **vehicle owner's account**.
- The **HDFC microservice** sends a **payment confirmation response** back to the **NETC Switch**, including transaction details:
  - Transaction ID
  - Toll amount
  - Payment status (successful or failure)

---

### Step 7: NETC Switch Sends Confirmation to Toll Plaza

- Upon receiving the payment confirmation from **HDFC’s microservice**, the **NETC Switch** sends a **message** to the toll plaza’s system, indicating that the payment was successful.
- The **toll plaza barrier** is lifted, allowing the vehicle to pass through.

---

### Step 8: Transaction Notification to Customer

- Once the payment is successfully processed, **HDFC’s microservice** sends a **transaction notification** to the vehicle owner via:
  - **SMS**
  - **Email**
  - **Mobile App Notification**
  
  The notification includes:
  - Toll amount deducted
  - Vehicle number
  - Date and time of deduction
  - Remaining balance (if applicable)

---

### Step 9: Backend Logging and Monitoring

- All transaction details are **logged** by **HDFC’s backend systems** for **auditing and monitoring** purposes.
- **HDFC microservices** track and log the transaction status, ensuring that any errors (e.g., insufficient funds) are handled appropriately.

---

## 5. Central Registry and Mapping Database

- The **NETC Switch** uses a **central registry** or **mapping database** to link FASTag IDs to their respective **FASTag providers** (banks).
- This database includes:
  - **FASTag ID Prefixes**: Unique prefixes associated with each bank’s FASTags (e.g., "HDFC", "ICICI").
  - **Microservice Endpoints**: The corresponding **API endpoint** for each FASTag provider’s microservice, allowing the NETC Switch to route requests to the correct service.

This registry allows the **NETC Switch** to efficiently direct each transaction request to the correct **FASTag provider's microservice** for processing.

---

## 6. Technology Stack

The technology stack for **HDFC’s FASTag microservices** and the communication with **NETC Switch** typically involves:

- **REST APIs**: For communication between HDFC’s microservices and the NETC Switch.
- **Kafka/RabbitMQ**: For reliable messaging and event streaming between microservices.
- **Spring Boot**: For building scalable microservices.
- **OAuth2**: For secure authorization and authentication between systems.
- **HTTPS**: For secure communication between the NETC Switch and HDFC's systems.
- **Database**: For storing transaction logs, account balances, and FASTag details.
- **Redis**: For caching frequently accessed data like account balances or toll history.

---

## 7. Security Considerations

- **Encryption**: All communication between the **NETC Switch**, **HDFC’s microservices**, and **toll plazas** is encrypted using **HTTPS** and other encryption protocols to protect sensitive data.
- **Authentication**: **OAuth2** or other secure methods are used to ensure that only authorized services can access the system.
- **Fraud Prevention**: HDFC’s microservices include mechanisms to detect and prevent fraud, such as duplicate transactions or unauthorized access.

---

## 8. Summary

This documentation outlines the detailed process of how **HDFC’s FASTag microservices** interact with the **NETC Switch** to facilitate automatic toll payments. The key steps include identifying the FASTag provider, communicating with the correct microservice, processing the payment, and sending confirmation to both the toll plaza and the vehicle owner.

This seamless interaction enables the **interoperability** of FASTag systems across multiple banks and toll plazas, improving the efficiency and convenience of toll payments in India.
