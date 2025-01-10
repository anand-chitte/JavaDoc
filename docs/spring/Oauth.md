# OAuth 2.0 Overview

OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service without exposing the user's credentials. It allows third-party applications to act on behalf of users through a delegated access mechanism.

---

## **Key Roles in OAuth 2.0**
1. **Resource Owner**: The user who owns the data or resources being accessed.
2. **Client**: The application requesting access to the resource owner's data.
3. **Authorization Server**: The server that authenticates the resource owner and issues access tokens to the client.
4. **Resource Server**: The API or server hosting the resource owner's data. It uses the access token to validate requests.

---

## **OAuth 2.0 Grant Types**

1. **Authorization Code Grant**  
   - Used for server-side applications.
   - The client exchanges an authorization code for an access token.
   - Secure because the token is never exposed to the user.

   **Flow**:
   - The user logs in and authorizes the client.
   - The client receives an authorization code.
   - The client exchanges the code for an access token at the authorization server.

2. **Implicit Grant**  
   - Used for single-page or client-side applications.
   - The access token is returned directly to the client in the URL fragment.
   - **Less secure** because tokens are exposed in the browser.

3. **Resource Owner Password Credentials Grant**  
   - The user provides their username and password to the client, which exchanges them for an access token.
   - **Not recommended** unless the client is highly trusted.

4. **Client Credentials Grant**  
   - Used for machine-to-machine communication.
   - The client authenticates itself with the authorization server to obtain an access token.

5. **Refresh Token Grant**  
   - Enables the client to obtain a new access token without requiring the user to log in again.
   - This is done by exchanging a refresh token for a new access token.

---

## **Key Components**

1. **Access Token**  
   A short-lived token that grants access to the resource server.

2. **Refresh Token**  
   A long-lived token that can be used to renew the access token.

3. **Scopes**  
   Define the level of access the client has (e.g., read-only or full access to the resource).