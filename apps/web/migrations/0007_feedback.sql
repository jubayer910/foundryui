-- Founder onboarding + feedback (sprint/onboarding).
-- user_profile: one row per user. The "What are you building?" answer, the system they picked on /welcome,
-- and when they dismissed the survey or the feedback ask (so we don't nag).
CREATE TABLE IF NOT EXISTS user_profile (
  userId TEXT PRIMARY KEY NOT NULL REFERENCES user(id) ON DELETE CASCADE,
  -- "saas" | "internal" | "client" | "ai_agent" | "other"
  segment TEXT,
  segmentOther TEXT,
  segmentAt INTEGER,
  system TEXT,
  systemAt INTEGER,
  surveyDismissedAt INTEGER,
  feedbackDismissedAt INTEGER,
  updatedAt INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS user_profile_segment_idx ON user_profile (segment);

-- feedback: NPS + an optional quote. Only rows with consent = 1 AND approved = 1 may ever be shown publicly.
-- approved is set by the owner in admin after reading the quote; it defaults to 0 (hidden).
CREATE TABLE IF NOT EXISTS feedback (
  id TEXT PRIMARY KEY NOT NULL,
  userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
  nps INTEGER NOT NULL CHECK (nps BETWEEN 0 AND 10),
  quote TEXT,
  name TEXT,
  company TEXT,
  consent INTEGER NOT NULL DEFAULT 0,
  approved INTEGER NOT NULL DEFAULT 0,
  -- segment copied from user_profile at answer time, so NPS can be read per segment
  segment TEXT,
  plan TEXT,
  createdAt INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS feedback_user_idx ON feedback (userId);
CREATE INDEX IF NOT EXISTS feedback_public_idx ON feedback (consent, approved, createdAt);
