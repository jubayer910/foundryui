-- Unique-visitor check without KV writes (KV free tier allows 1,000 writes a day).
-- Holds only a daily-salted HMAC of ip + user agent for today and yesterday; rows older than 2 days are deleted.
CREATE TABLE `visitor_seen` (
	`day` text NOT NULL,
	`hash` text NOT NULL,
	PRIMARY KEY(`day`, `hash`)
);
