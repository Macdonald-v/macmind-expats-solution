# Supabase notes

The browser application uses the public anon key only.

Required tables:
- profiles
- products
- services
- enquiries
- product_images
- site_settings

Make sure RLS policies allow:
- public SELECT on active products/services
- public INSERT on enquiries
- authenticated admin SELECT/UPDATE/DELETE as appropriate

Do not put a Resend secret key in VITE_ environment variables. Email notifications should be sent by a Supabase Edge Function after an enquiry is inserted.