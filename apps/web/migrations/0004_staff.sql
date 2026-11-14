-- Admin team: single-use, 7-day invite links. Only the SHA-256 hash of the token is stored.
-- user.role now takes "user" | "moderator" | "admin" | "owner" (text column, no schema change needed).
CREATE TABLE `staff_invite` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`role` text NOT NULL,
	`tokenHash` text NOT NULL,
	`invitedBy` text NOT NULL,
	`expiresAt` integer NOT NULL,
	`acceptedAt` integer,
	`revokedAt` integer,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `staff_invite_tokenHash_unique` ON `staff_invite` (`tokenHash`);
--> statement-breakpoint
CREATE INDEX `staff_invite_email_idx` ON `staff_invite` (`email`);
--> statement-breakpoint
CREATE INDEX `user_role_idx` ON `user` (`role`);
