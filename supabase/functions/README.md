# Supabase Edge Functions

## `send-enquiry-email`

Sends a notification email through Resend whenever the website quotation form is submitted.

Set these production secrets in Supabase Edge Functions:

- `RESEND_API_KEY` — your Resend API key
- `RESEND_FROM_EMAIL` — e.g. `Macmind Expats Solutions <noreply@macmindexpatss.co.ke>` after the domain is verified in Resend
- `NOTIFY_EMAIL` — `macmindexpatss@gmail.com`

Deploy the function as `send-enquiry-email`.
