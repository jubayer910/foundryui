-- Questions the help assistant could not answer (or answered with low confidence), for the KB admin.
-- One row per normalised question: repeats bump `count` (one write per unanswered question, never per message).
-- Read at /admin/kb/gaps; "Dismiss" or writing an article sets dismissed = 1.
CREATE TABLE IF NOT EXISTS bot_gap (
  id TEXT PRIMARY KEY NOT NULL,
  question TEXT NOT NULL,
  intent TEXT NOT NULL DEFAULT 'unknown',
  confidence REAL NOT NULL DEFAULT 0,
  createdAt INTEGER NOT NULL,
  count INTEGER NOT NULL DEFAULT 1,
  lastAt INTEGER NOT NULL,
  dismissed INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS bot_gap_open_idx ON bot_gap (dismissed, count);
