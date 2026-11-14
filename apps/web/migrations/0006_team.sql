-- Team plan (5 seats). One team per owner. The owner's live Team subscription (or a granted Team
-- purchase) is what makes the team active; members get Team access only while it is active.
CREATE TABLE `team` (
	`id` text PRIMARY KEY NOT NULL,
	`ownerId` text NOT NULL REFERENCES `user`(`id`) ON DELETE CASCADE,
	`name` text,
	`seats` integer DEFAULT 5 NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `team_owner_unique` ON `team` (`ownerId`);
--> statement-breakpoint
-- One row per seat: the owner (role owner, joined at creation) and every member or pending invite.
-- userId stays null until the invite link is accepted; token is the invite link secret.
CREATE TABLE `team_member` (
	`id` text PRIMARY KEY NOT NULL,
	`teamId` text NOT NULL REFERENCES `team`(`id`) ON DELETE CASCADE,
	`userId` text REFERENCES `user`(`id`) ON DELETE CASCADE,
	`email` text NOT NULL,
	`role` text DEFAULT 'member' NOT NULL,
	`token` text,
	`invitedAt` integer NOT NULL,
	`joinedAt` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `team_member_team_email_unique` ON `team_member` (`teamId`, `email`);
--> statement-breakpoint
CREATE UNIQUE INDEX `team_member_token_unique` ON `team_member` (`token`);
--> statement-breakpoint
CREATE INDEX `team_member_user_idx` ON `team_member` (`userId`);
