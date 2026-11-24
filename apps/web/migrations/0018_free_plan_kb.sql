-- Free plan change (2026-11-25): Free is for personal, learning and non-commercial projects; commercial use needs
-- Pro, Lifetime or a team deal. Free users get the stroke icon styles (Stroke and Sharp); Solid, Duotone, Twotone
-- and Bulk need a paid plan. Rewrites the help-bot articles that said otherwise (same facts as /pricing and /license).
UPDATE `kb_article` SET `answer` = 'With Pro, Lifetime or a team deal, yes: use the components in unlimited commercial products, your SaaS, paid products with any number of users, and client work. There is no royalty, per-user fee or revenue limit.

The Free plan is for personal, learning and non-commercial projects only. See the [licence](/license) and [Pricing](/pricing).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'commercial-use';

UPDATE `kb_article` SET `answer` = 'With a free account: the Loopo system, the free components in React code, 15 dashboard templates, 16,395 stroke icons, Copy to Figma for those items and the MCP server with 50 calls a day. Free is for personal, learning and non-commercial projects, and it stays free forever. Commercial use needs Pro or Lifetime. No card needed. [Create an account](/sign-up).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'free-components';

UPDATE `kb_article` SET `answer` = 'No. Free components can be used by anyone with an account in personal, learning and non-commercial projects, but the library is not open source and may not be redistributed. The full terms are on the [licence page](/license).', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'is-it-open-source';

UPDATE `kb_article` SET `answer` = '16,395 icons in six styles (stroke, sharp, solid, duotone, twotone and bulk) on one 24px grid with a 1.5px stroke. Stroke and Sharp are free; the other four styles come with Pro and Lifetime. Search them on [Icons](/icons) and copy SVG or JSX, or download.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'icons-overview';

UPDATE `kb_article` SET `answer` = 'The stroke styles are. Every icon in Stroke and Sharp is free for personal and non-commercial projects. Solid, Duotone, Twotone and Bulk, and commercial use, come with Pro and Lifetime. Without an account, icon copies count towards the 5 guest copies.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'icons-free';

UPDATE `kb_article` SET `answer` = 'The icons are covered by the [Ingot UI licence](/license): on Free, the stroke icons in personal and non-commercial projects; with Pro, Lifetime or a team deal, every style in unlimited commercial products. Some icons are redrawn from open-source sets, such as Tabler (MIT) and Lucide (ISC), whose own licences and notices still apply; they are listed in the [icon licences](/icons/LICENSES.md). Don''t resell or redistribute the icons as an icon set.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'icons-licence';

UPDATE `kb_article` SET `answer` = 'Yes. The MCP tool `search_icons` finds Ingot icons by name and returns the JSX. Stroke and Sharp work on every plan; Solid, Duotone, Twotone and Bulk need Pro or Lifetime.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'icons-search-agent';

UPDATE `kb_article` SET `answer` = 'Yes, with Pro, Lifetime or a team deal; client work is commercial use, so the Free plan does not cover it. Build the product, hand it over with the source code, and the client may own, run and change it. Handing over doesn''t give the client a licence to the library itself: to copy new items, they need their own plan.', `updatedAt` = CAST(strftime('%s','now') AS INTEGER) WHERE `slug` = 'client-handover';
