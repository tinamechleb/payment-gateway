const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./server/routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
