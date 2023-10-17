// Fungsi untuk mengenkripsi pesan
function encryptMessage(key, message) {
  const ciphertext = CryptoJS.AES.encrypt(message, key).toString();
  return ciphertext;
}

// Fungsi untuk mendekripsi pesan
function decryptMessage(key, encryptedMessage) {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
  const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
}
