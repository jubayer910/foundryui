-- AppSumo redemption codes. Only the SHA-256 of each code is stored (the plain codes live in the CSV uploaded to
-- AppSumo), so a database read never leaks a usable code. Redeemed at /redeem (lib/appsumo.ts).
CREATE TABLE IF NOT EXISTS appsumo_code (
  hash TEXT PRIMARY KEY,
  batch TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'available',
  userId TEXT,
  email TEXT,
  purchaseId TEXT,
  redeemedAt INTEGER,
  createdAt INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS appsumo_code_user_idx ON appsumo_code(userId);
