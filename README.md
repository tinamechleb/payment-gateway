# Payment Gateway Project

## Introduction

This project is a simple implementation of a payment gateway system using Node.js, Express, and PostgreSQL. The payment gateway allows users to enter credit card information, validates and stores it securely in the database, and provides feedback to the user.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Encryption](#encryption)
- [Luhn Algorithm](#luhn-algorithm)
- [TODO List and Further Improvements](#todo-list-and-further-improvements)

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/payment-gateway.git
   cd payment-gateway

   ```

2. **Install Dependencies:**

   ```bash
   cd server
   npm install

   ```

3. **Set Up the Database:**

   - Execute the SQL script in `sql/create_tables.sql` to create the necessary tables.
   - Change the db info in `utils/db.js`
   - Change the secret key in `utils/encryptionAlgorithm.js`.

4. **Run the Server:**

   ```bash
   node app.js

   ```

5. **Access the Application:**

   - Open your browser and navigate to http://localhost:3000.

## Usage

1.  Open the application in your browser.
2.  Enter credit card information on the provided page.
3.  Submit the form to process the payment.
4.  A popup will indicate whether the payment was successful or not.

## Project Structure

The project follows the following structure:

```plaintext
    payment-gateway/
    |-- server/
    |   |-- controllers/
    |       |-- paymentController.js
    |   |-- routes/
    |       |-- paymentRoutes.js
    |   |-- utils/
    |       |-- db.js
    |       |-- encryptionUtils.js
    |       |-- luhnAlgorithm.js
    |-- sql/
    |   |-- create_tables.sql
    |-- app.js
    |-- package.json
    |-- README.md
```

- `app.js`: Entry point for the Express application.
- `controllers/`: Contains the payment controller logic.
- `routes/`: Defines the payment routes.
- `utils/`: Utility functions, including encryption.
- `sql/`: SQL scripts for database setup.

## Encryption

Sensitive credit card information (card number and CVV) is stored in the database after encryption. The `encryptionUtils.js` module uses the `crypto` module to encrypt data using the AES-256-CBC algorithm. The encryption key is stored securely and should be replaced with a secure key in a production environment.

## Luhn Algorithm

The Luhn Algorithm is a checksum formula used to validate credit card numbers. It ensures the integrity of the credit card number before processing it further. The algorithm can be added to the codebase for additional validation.

## TODO List and Further Improvements

1.  **Logging:**

    - Implement logging for better error tracking and monitoring.

2.  **Input Validation:**

    - Add input validation to ensure data integrity and prevent invalid inputs.

3.  **SSL/TLS Support:**

    - Consider adding SSL/TLS support for secure communication.

4.  **Dockerization:**

    - Dockerize the application for easier deployment and scalability.

5.  **Configuration Management:**

    - Use a configuration management tool or environment variables for sensitive information like secret keys and database credentials.

6.  **Testing:**

    - Write unit tests and integration tests for the server.

7.  **User Interface:**
    - Enhance the user interface and error handling on the client side.
