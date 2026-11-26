-- Creem (creem.io) webhook ledger, lib/creem.ts + app/api/webhooks/creem/route.ts.
-- kind 'event': one row per processed webhook event id (evt_...), so Creem's retries (same id) are skipped.
-- kind 'mail': one row per buyer / support email already sent ("mail:<what>:<id>"), claimed before sending,
-- so a retried or duplicated event never sends the same email twice.
-- Creem purchases and subscriptions themselves live in the existing purchase / subscription tables (provider 'creem').
CREATE TABLE `creem_event` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text DEFAULT 'event' NOT NULL,
	`eventType` text,
	`result` text,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `creem_event_kind_idx` ON `creem_event` (`kind`, `createdAt`);
