# Macmind Expats Solutions

Production-ready Vite + React website for Macmind Expats Solutions, Nairobi.

## Stack
- Vite
- React + TypeScript
- Supabase
- React Router
- Lucide icons
- Responsive CSS

## Setup

1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Add your Supabase project URL and anon key.
5. Run `npm run dev`.
6. Build with `npm run build`.

## Supabase
The site expects the tables already created in your Supabase project:
`profiles`, `products`, `services`, `enquiries`, `product_images`, `site_settings`.

The public website reads products/services and creates quotation enquiries. Admin access uses Supabase Auth.

## Admin
Open `/admin/login` and sign in with the Supabase administrator account you created.

## Deployment
Push the project to GitHub, import it into Vercel, and add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_WHATSAPP_NUMBER`

Resend/email notification sending should be handled by a Supabase Edge Function or your existing server-side email workflow; never expose a Resend API key in browser code.
