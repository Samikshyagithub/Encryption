const { createHmac } = require("crypto");

const password = "Secretsanta"; //secretkey
const message = "santaissecret"; //actual message

// Creating the HMAC of the message
const hmac = createHmac("sha256", password).update(message).digest("hex");
console.log("HMAC:", hmac);

// Function to verify the message
function verifyHmac(message, hmac, password) {
  const newHmac = createHmac("sha256", password).update(message).digest("hex");
  return newHmac === hmac;
}

// Verifying the message
const isValid = verifyHmac("santaisnotsecret", hmac, password);
console.log(isValid ? "Message is valid" : "Message is invalid");

//Hashed-Based Message Authentication code
//When creating an HMAC, a secret key and a message are combined and hashed together using a cryptographic hash function (e.g., SHA-256). This produces a hash value that can be used to verify the integrity and authenticity of the message.
