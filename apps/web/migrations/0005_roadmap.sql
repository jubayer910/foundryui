-- Public roadmap upvotes (/roadmap, app/api/roadmap).
-- voter is "u:<user id>" when signed in, else "a:<HMAC of a random anonymous cookie id>". One vote per voter per item.
CREATE TABLE `roadmap_vote` (
	`item_id` text NOT NULL,
	`voter` text NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`item_id`, `voter`)
);
CREATE INDEX `roadmap_vote_voter` ON `roadmap_vote` (`voter`);

-- Vote rate limit without KV writes: hits per HMAC(ip) per hour window. Old windows are deleted by the API.
CREATE TABLE `roadmap_rate` (
	`key` text NOT NULL,
	`win` integer NOT NULL,
	`hits` integer NOT NULL,
	PRIMARY KEY(`key`, `win`)
);
