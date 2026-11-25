-- Behaviour analytics: one generic per-UTC-day counter table, aggregates only (no rows per person, no IPs,
-- no user agents). Written by app/api/track. `kind` says what `key` holds:
--   country, device, browser, os, landing, campaign, medium   per visit (counted on the landing view)
--   srcland  "<source>\t<landing path>"                         per visit
--   hour     UTC hour "00".."23"                                per page view
--   flow     "<from path>\t<to path>"                           per in-site navigation
--   p2       ""                                                 visits that reached a second page
--   exit     path                                               the last page of a visit
--   time     path, n = engaged seconds;  timen  path, n = measured views
--   scroll   "<path>\t<25|50|75|100>"                           deepest scroll of a measured view
--   click    "<path>\t<button|link|out>\t<label>\t<target>"     clicks on buttons and links
CREATE TABLE `stat_daily` (
	`day` text NOT NULL,
	`kind` text NOT NULL,
	`key` text NOT NULL,
	`n` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`day`, `kind`, `key`)
);
--> statement-breakpoint
CREATE INDEX `stat_daily_kind_day` ON `stat_daily` (`kind`, `day`);
