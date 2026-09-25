# Email notification

Create a Supabase Edge Function for enquiry notifications using Resend.
Store the Resend API key as a server-side Supabase secret, not in the Vite app.

Suggested flow:
1. Customer submits `enquiries`.
2. Database webhook calls the Edge Function.
3. Function sends a notification to macmindexpatss@gmail.com via Resend.
4. Function returns without exposing the API key.