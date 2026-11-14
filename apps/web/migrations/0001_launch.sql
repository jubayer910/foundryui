-- Launch foundation: settings, purchases, subscriptions, support, knowledge base, waitlist, roles.
ALTER TABLE `user` ADD `role` text DEFAULT 'user' NOT NULL;
--> statement-breakpoint
CREATE TABLE `setting` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `purchase` (
	`id` text PRIMARY KEY NOT NULL,
	`provider` text DEFAULT 'lemonsqueezy' NOT NULL,
	`providerOrderId` text NOT NULL,
	`userId` text,
	`email` text NOT NULL,
	`plan` text NOT NULL,
	`variant` text,
	`amountCents` integer DEFAULT 0 NOT NULL,
	`currency` text DEFAULT 'USD' NOT NULL,
	`status` text NOT NULL,
	`note` text,
	`raw` text,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `purchase_provider_order_unique` ON `purchase` (`provider`, `providerOrderId`);
--> statement-breakpoint
CREATE INDEX `purchase_user_idx` ON `purchase` (`userId`);
--> statement-breakpoint
CREATE TABLE `subscription` (
	`id` text PRIMARY KEY NOT NULL,
	`provider` text DEFAULT 'lemonsqueezy' NOT NULL,
	`providerSubId` text NOT NULL,
	`userId` text,
	`email` text NOT NULL,
	`plan` text NOT NULL,
	`interval` text NOT NULL,
	`status` text NOT NULL,
	`renewsAt` integer,
	`endsAt` integer,
	`portalUrl` text,
	`raw` text,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscription_provider_sub_unique` ON `subscription` (`provider`, `providerSubId`);
--> statement-breakpoint
CREATE INDEX `subscription_user_idx` ON `subscription` (`userId`);
--> statement-breakpoint
CREATE TABLE `ticket` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text,
	`email` text NOT NULL,
	`name` text,
	`subject` text NOT NULL,
	`status` text DEFAULT 'open' NOT NULL,
	`source` text DEFAULT 'form' NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `ticket_status_idx` ON `ticket` (`status`);
--> statement-breakpoint
CREATE TABLE `ticket_message` (
	`id` text PRIMARY KEY NOT NULL,
	`ticketId` text NOT NULL,
	`author` text NOT NULL,
	`body` text NOT NULL,
	`createdAt` integer NOT NULL,
	FOREIGN KEY (`ticketId`) REFERENCES `ticket`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `ticket_message_ticket_idx` ON `ticket_message` (`ticketId`);
--> statement-breakpoint
CREATE TABLE `kb_article` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`question` text NOT NULL,
	`answer` text NOT NULL,
	`keywords` text DEFAULT '' NOT NULL,
	`category` text DEFAULT 'General' NOT NULL,
	`published` integer DEFAULT true NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `kb_article_slug_unique` ON `kb_article` (`slug`);
--> statement-breakpoint
CREATE TABLE `waitlist` (
	`email` text PRIMARY KEY NOT NULL,
	`plan` text NOT NULL,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `audit_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`actor` text NOT NULL,
	`action` text NOT NULL,
	`target` text,
	`detail` text,
	`createdAt` integer NOT NULL
);
