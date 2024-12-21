const { generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: "spki", // recommended to be 'spki' by the Node.js docs
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
    format: "pem",
  },
});

console.log(publicKey);
console.log(privateKey);

/*Informations to be noted
 RSA (Rivest–Shamir–Adleman) is a public-key cryptosystem, one of the oldest widely used for secure data transmission.
In a public-key cryptosystem, the encryption key is public and distinct from the decryption key, which is kept secret (private).
An RSA user creates and publishes a public key based on two large prime numbers, along with an auxiliary value.
The prime numbers are kept secret. Messages can be encrypted by anyone, via the public key, but can only be decrypted by someone who knows the private key
Auxiliary values are additional values derived from the main RSA components (p, q, d) that can aid in optimizing the encryption and decryption processes.
*/
