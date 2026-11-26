-- Sign-up attempts the server failed (not user mistakes such as a taken email or a short password), so the
-- people affected can be contacted once it is fixed. Email and name as typed; never the password.
-- Written by app/api/auth/[...all]/route.ts through lib/signup-failures.ts; listed in Admin > Users > Failed sign-ups.
CREATE TABLE `signup_failure` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text,
	`code` text NOT NULL,
	`message` text,
	`status` integer NOT NULL,
	`createdAt` integer NOT NULL,
	`alertedAt` integer
);
--> statement-breakpoint
CREATE INDEX `signup_failure_created_idx` ON `signup_failure` (`createdAt`);
--> statement-breakpoint
CREATE INDEX `signup_failure_email_idx` ON `signup_failure` (`email`);
