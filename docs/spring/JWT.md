# JSON Web Token (JWT)

## What is JWT?
**JWT** stands for **JSON Web Token**, a compact and self-contained way to securely transmit information between parties as a JSON object. It is widely used in authentication and authorization processes, particularly in modern web applications and APIs.

---

## Structure of a JWT
A JWT is composed of three parts separated by dots (`.`):
1. **Header**
2. **Payload**
3. **Signature**

---

### 1. Header
The header contains metadata about the token, such as the type of token (`JWT`) and the algorithm used to sign it (e.g., `HMAC SHA256` or `RSA`).

Example:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 2. Payload
The payload contains the claims. Claims are statements about an entity (usually the user) and additional data.
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```
- **Common claim types:**
    - Registered Claims (e.g., iss, sub, aud, exp)
    - Public Claims (custom claims defined by the user)
    - Private Claims (shared between parties)

### 3. Signature
The signature is used to verify that the message wasn’t altered and can be trusted. It is created using the header, payload, a secret key, and the algorithm specified.

Signature creation (with HMAC SHA256):

```scss
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```