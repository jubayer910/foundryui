-- Buyer attribution: where an account came from. JSON { source, medium, campaign, landing, day } copied from
-- the first-party touch cookies (lib/analytics/source.ts) at sign-up (src = first visit, srcLast = latest
-- visit with a source) and refreshed at checkout. No identifiers, only source names and a landing path.
ALTER TABLE `user` ADD `src` text;
--> statement-breakpoint
ALTER TABLE `user` ADD `srcLast` text;
