const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = Deno.env.get("NOTIFY_EMAIL") || "macmindexpatss@gmail.com";
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") || "Macmind Expats Solutions <noreply@macmindexpatss.co.ke>";

    if (!resendApiKey) return json({ error: "RESEND_API_KEY is not configured" }, 500);

    const body = await req.json();
    const fullName = String(body.full_name || body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const subject = String(body.subject || body.enquiry_type || "Quotation").trim();
    const message = String(body.message || "").trim();

    if (!fullName || !email || !phone || !message) {
      return json({ error: "Missing required enquiry fields" }, 400);
    }

    const safe = (value: string) => value.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
    }[c] || c));

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#102a43;max-width:680px">
        <h2 style="margin-bottom:4px">New website enquiry</h2>
        <p style="margin-top:0;color:#627d98">Macmind Expats Solutions — Professional Printing Solutions</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Full name</strong></td><td>${safe(fullName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${safe(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${safe(phone)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${safe(company || "Not provided")}</td></tr>
          <tr><td><strong>Enquiry</strong></td><td>${safe(subject)}</td></tr>
        </table>
        <h3>Request</h3>
        <p style="white-space:pre-wrap">${safe(message)}</p>
        <p><a href="mailto:${encodeURIComponent(email)}">Reply to customer</a></p>
      </div>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notifyEmail],
        reply_to: email,
        subject: `New enquiry: ${subject} — ${fullName}`,
        html,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      return json({ error: result?.message || "Resend failed" }, 502);
    }

    return json({ ok: true, id: result?.id || null });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : "Unexpected error" }, 500);
  }
});
