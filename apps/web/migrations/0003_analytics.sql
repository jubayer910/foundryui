-- First-party, cookieless page-view analytics. Aggregated per day: no raw rows, no IPs, no user agents.
-- Unique visitors are estimated from a daily-salted hash kept only in KV (expires after 2 days), never in D1.
CREATE TABLE `pageview_daily` (
	`day` text NOT NULL,
	`path` text NOT NULL,
	`views` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`day`, `path`)
);
--> statement-breakpoint
CREATE TABLE `referrer_daily` (
	`day` text NOT NULL,
	`source` text NOT NULL,
	`views` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`day`, `source`)
);
--> statement-breakpoint
CREATE TABLE `visitor_daily` (
	`day` text PRIMARY KEY NOT NULL,
	`visitors` integer DEFAULT 0 NOT NULL
);
