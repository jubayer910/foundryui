-- Contra purchase activation (lib/activation.ts). Contra has no API or webhook, so a buyer who paid there tells
-- us at /activate and staff approve it in /admin/activations. Approve writes the purchase (provider contra,
-- status paid) and, for Pro and Team, a subscription row whose renewsAt the owner checks by hand.
CREATE TABLE `activation` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL REFERENCES `user`(`id`) ON DELETE CASCADE,
	`accountEmail` text NOT NULL,
	`payerEmail` text NOT NULL,
	`option` text NOT NULL,
	`variantKey` text NOT NULL,
	`amountCents` integer DEFAULT 0 NOT NULL,
	`provider` text DEFAULT 'contra' NOT NULL,
	`reference` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`decidedBy` text,
	`decidedAt` integer,
	`note` text,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `activation_status_idx` ON `activation` (`status`, `createdAt`);
--> statement-breakpoint
CREATE INDEX `activation_user_idx` ON `activation` (`userId`);
--> statement-breakpoint
-- At most one pending request per buyer and product; a second submit updates the first.
CREATE UNIQUE INDEX `activation_pending_unique` ON `activation` (`userId`, `variantKey`) WHERE `status` = 'pending';
--> statement-breakpoint
-- The phase-2 matcher looks requests up by the email used on Contra.
CREATE INDEX `activation_payer_idx` ON `activation` (`payerEmail`, `status`);
