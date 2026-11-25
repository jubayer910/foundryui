-- Self-service password reset is live (/forgot-password → email link → /reset-password): the help article says so.
UPDATE `kb_article`
SET `answer` = 'Use [Forgot password](/forgot-password): enter the email you signed up with and we send a link to choose a new password. The link works once and expires in one hour; check spam if it does not arrive. Changing the password signs you out on other devices. Still stuck, or no longer have that inbox? Write to support@ingotui.com and we will help.',
    `keywords` = 'login, sign in, password, forgot password, reset password, change password, new password, locked out, cant log in, wrong password, password bhule gechi',
    `updatedAt` = CAST(strftime('%s','now') AS INTEGER)
WHERE `slug` = 'forgot-password';
