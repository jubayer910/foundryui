-- Referral link that brought the visitor before they signed up (?ref=name, kept in the ingot_ref cookie for 30 days).
-- Read at /admin/referrals: sign-ups, paying users and revenue per link.
ALTER TABLE user ADD COLUMN ref TEXT;
CREATE INDEX IF NOT EXISTS user_ref_idx ON user(ref);
