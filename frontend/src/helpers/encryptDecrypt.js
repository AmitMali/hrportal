import CryptoJS from "crypto-js";
// Encrypt
const secrete = import.meta.env.VITE_SECRETE_KEY;
const encrypt = (data) => {
  if (data) return CryptoJS.AES.encrypt(data, secrete).toString();
};

// Decrypt
const decrypt = (ciphertext) => {
  if (ciphertext) {
    var bytes = CryptoJS.AES.decrypt(ciphertext, secrete);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
};

export { encrypt, decrypt };
