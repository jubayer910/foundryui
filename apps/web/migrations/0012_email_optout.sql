-- Addresses that unsubscribed from offer emails (the welcome email's "Unsubscribe from offers" link).
-- Transactional mail (activations, receipts, support replies) still goes out.
CREATE TABLE IF NOT EXISTS email_optout (
  email TEXT PRIMARY KEY NOT NULL,
  createdAt INTEGER NOT NULL
);
