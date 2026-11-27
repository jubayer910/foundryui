-- Onboarding: "How did you hear about Ingot UI?" (optional, last step of /welcome).
-- heardFrom is one id from HEARD_FROM in app/api/feedback/store.ts; heardFromOther is the short "Other" text.
-- Self-reported, next to the automatic first-touch attribution in user.src (migration 0021).
ALTER TABLE user_profile ADD COLUMN heardFrom text;
ALTER TABLE user_profile ADD COLUMN heardFromOther text;
ALTER TABLE user_profile ADD COLUMN heardAt integer;
CREATE INDEX IF NOT EXISTS user_profile_heard_idx ON user_profile (heardFrom);
