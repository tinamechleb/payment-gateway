// server/controllers/paymentController.js

const { encryptData } = require('../utils/encryptionUtils');
const luhnAlgorithm = require('../utils/luhnAlgorithm');
const pool = require('../utils/db');

const processPayment = async (req, res) => {
  try {
    const { cardNumber, cvv, cardHolderName, expirationDate } = req.body;

    // Validate credit card number using Luhn Algorithm
    if (!luhnAlgorithm(cardNumber)) {
      return res.status(400).json({ success: false, message: 'Invalid credit card number' });
    }

    // Encrypt sensitive data before storing in the database
    const encryptedCardNumber = encryptData(cardNumber);
    const encryptedCVV = encryptData(cvv);

    const query = 'INSERT INTO payments (card_number, cvv, card_holder_name, expiration_date) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [encryptedCardNumber, encryptedCVV, cardHolderName, expirationDate]);

    res.status(200).json({ success: true, message: 'Payment processed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  processPayment,
};
