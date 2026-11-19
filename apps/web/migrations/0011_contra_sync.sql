-- Contra auto-activation (lib/contra/*). The owner connects Contra once in /admin/contra (OAuth to Contra's MCP
-- server); a cron and every /activate request read the payment-link sales and approve matching activations.
CREATE TABLE `contra_connection` (
	`id` text PRIMARY KEY NOT NULL,
	`clientId` text NOT NULL,
	`clientSecret` text,
	`redirectUri` text NOT NULL,
	`accessToken` text,
	`refreshToken` text,
	`expiresAt` integer,
	`connectedBy` text,
	`connectedAt` integer,
	`lastSyncAt` integer,
	`lastError` text,
	-- JSON { at, links }: payment links found on Contra (a price change makes a new slug; old slugs stay synced)
	`linkMap` text
);
--> statement-breakpoint
-- One row per Contra payment-link transaction (id = Contra's transaction id). Each sale is matched at most once.
CREATE TABLE `contra_sale` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`option` text NOT NULL,
	`variantKey` text NOT NULL,
	`amountCents` integer DEFAULT 0 NOT NULL,
	`currency` text DEFAULT 'USD' NOT NULL,
	`paidOn` text,
	`payerEmail` text,
	`firstName` text,
	`lastName` text,
	`contraProfileId` text,
	`invoiceStatus` text,
	`status` text DEFAULT 'unmatched' NOT NULL,
	`userId` text,
	`activationId` text,
	`matchedBy` text,
	`note` text,
	-- when the "create your account with this email" mail went out (at most once per sale)
	`invitedAt` integer,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `contra_sale_status_idx` ON `contra_sale` (`status`, `paidOn`);
--> statement-breakpoint
CREATE INDEX `contra_sale_payer_idx` ON `contra_sale` (`payerEmail`);
--> statement-breakpoint
-- A sale links to at most one activation, so one payment can never approve two requests.
CREATE UNIQUE INDEX `contra_sale_activation_unique` ON `contra_sale` (`activationId`) WHERE `activationId` IS NOT NULL;
--> statement-breakpoint
-- Name on the Contra receipt, for buyers who did not share their email with the seller.
ALTER TABLE `activation` ADD `contraName` text;
