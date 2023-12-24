const CryptoJS = require('crypto-js');

const encryptData = (data) => {
  // Use a secure key, replace with your own key
  const key = 'your-secret-key';
  return CryptoJS.AES.encrypt(data, key).toString();
};

module.exports = {
  encryptData,
};
