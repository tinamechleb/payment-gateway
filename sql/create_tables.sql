CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  card_number VARCHAR(255) NOT NULL,
  cvv VARCHAR(255) NOT NULL,
  card_holder_name VARCHAR(255) NOT NULL,
  expiration_date VARCHAR(255) NOT NULL
);