-- Content in D1 (ADMIN-SYSTEM.md, workstream C): blog posts written in the admin editor and changelog entries.
-- Code posts in lib/blog/posts/*.ts stay as they are; the site lists both. A database post can't take a code post's slug.
CREATE TABLE `post` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`metaTitle` text,
	`description` text NOT NULL DEFAULT '',
	`category` text NOT NULL DEFAULT 'Guides',
	`keyword` text NOT NULL DEFAULT '',
	`body` text NOT NULL DEFAULT '',
	`faq` text NOT NULL DEFAULT '[]',
	`related` text NOT NULL DEFAULT '[]',
	`systems` text NOT NULL DEFAULT '[]',
	`coverScene` text,
	`status` text NOT NULL DEFAULT 'draft',
	`publishedAt` integer,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL,
	`authorId` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `post_slug_unique` ON `post` (`slug`);
--> statement-breakpoint
CREATE INDEX `post_status_idx` ON `post` (`status`, `publishedAt`);
--> statement-breakpoint
CREATE TABLE `changelog_entry` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`title` text NOT NULL,
	`items` text NOT NULL DEFAULT '[]',
	`scene` text NOT NULL DEFAULT 'stack',
	`published` integer NOT NULL DEFAULT 1,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `changelog_date_idx` ON `changelog_entry` (`date`);
--> statement-breakpoint
-- Seed: the entries that used to be the static LOG array in app/changelog/page.tsx (newest first; createdAt orders same-day entries).
INSERT INTO `changelog_entry` (`id`, `date`, `title`, `items`, `scene`, `published`, `createdAt`, `updatedAt`) VALUES
('seed-2026-11-10-ingot', '2026-11-10', 'Foundry UI is now Ingot UI', '["New name and home: ingotui.com. Old links redirect automatically","CLI is now npx ingotui and the icon package is ingotui-icons","Components install into components/ingot and styles/ingot; the agent rules file is INGOT.md","MCP server moves to mcp.ingotui.com; update the URL in your agent config","Resources: ten guides on dashboard UI kits, Figma to React, KPI cards, charts and MCP"]', 'ingots', 1, 1794312004, 1794312004),
('seed-2026-11-10-library', '2026-11-10', 'A library-first site and 1,852 Figma components', '["Figma libraries for all six systems: 1,852 components harvested from the product screens and checked","New site: the home page is the library, with quick copy and save on every card","Component pages with a facts panel, keyboard shortcuts (C, F, S) and a width switcher","Saved and recent, a visible free-copies meter, and a plan comparison on Pricing"]', 'grid', 1, 1794312003, 1794312003),
('seed-2026-11-09-icons', '2026-11-09', 'Icon library and a new look', '["Ingot Icons: 7,165 icons in six styles (Stroke, Sharp, Solid, Duotone, Twotone, Bulk) on one 24px grid","Icons page: search, 41 categories, stroke control, copy SVG or JSX, download","ingotui-icons package with a tree-shakeable React entry","MCP search_icons now searches the whole library and returns JSX and SVG","Library browser redesign"]', 'icons', 1, 1794312002, 1794312002),
('seed-2026-11-08-preview', '2026-11-08', 'Ingot UI preview', '["Loopo design system live: tokens, 30 components incl. 7 charts","Ingot Icons: first 30 original icons (Line style in code; Line, Fill, Duo in Figma)","MCP server with 14 tools, CLI and shadcn-compatible registry","Free accounts, API keys and the 5-action guest limit"]', 'seed', 1, 1794312001, 1794312001);
