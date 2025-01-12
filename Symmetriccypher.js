const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

/// Cipher

const message = "Encyption is fun";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

/// Encrypt

const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");
console.log(`Encrypted: ${encryptedMessage}`); //chunked encrypted message

/// Decrypt

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf8"); //is used to signal the end of the decryption process
console.log(`Deciphered: ${decryptedMessage.toString("utf-8")}`);
