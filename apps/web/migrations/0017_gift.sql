-- Lifetime given by staff from /admin/users (lib/gift.ts). Not a sale: never counted as revenue, buyers or deal spots.
-- Only the SHA-256 of the invite link token is stored, so a database read never leaks a usable link.
-- status: pending (invite sent, no account claimed it yet) | claimed (purchase row written) | revoked
CREATE TABLE IF NOT EXISTS gift (
  id TEXT PRIMARY KEY,
  tokenHash TEXT NOT NULL,
  email TEXT NOT NULL,
  plan TEXT NOT NULL DEFAULT 'lifetime',
  note TEXT,
  invitedBy TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  userId TEXT,
  purchaseId TEXT,
  sentAt INTEGER,
  claimedAt INTEGER,
  revokedAt INTEGER,
  createdAt INTEGER NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS gift_token_idx ON gift(tokenHash);
CREATE INDEX IF NOT EXISTS gift_email_idx ON gift(email, status);
