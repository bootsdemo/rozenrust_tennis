import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://bootsdemo.github.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, authorization",
};

const FEES_EUR: Record<string, Record<string, number>> = {
  Annual: { "Senior 60+": 30, Senior: 20, Student: 10, Social: 5 },
  Seasonal: { "Senior 60+": 15, Senior: 9, Student: 7, Social: 3 },
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders });
  if (req.method === "GET") return json({ ok: true, name: "create-payment-intent" });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
    if (!STRIPE_SECRET_KEY) return json({ error: "Missing STRIPE_SECRET_KEY on server" }, 500);

    const { membershipLength, membershipType, email } = await req.json();
    if (!membershipLength || !membershipType || !email) {
      return json({ error: "membershipLength, membershipType, email are required" }, 400);
    }

    const fee = FEES_EUR?.[String(membershipLength)]?.[String(membershipType)];
    if (typeof fee !== "number") return json({ error: "Invalid membershipLength or membershipType" }, 400);

    const amount = Math.round(fee * 100);

    const form = new URLSearchParams();
    form.set("amount", String(amount));
    form.set("currency", "eur");
    form.set("description", `Membership: ${membershipLength} - ${membershipType}`);
    form.set("receipt_email", String(email));

    const resp = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    });

    const data = await resp.json();
    if (!resp.ok) return json({ error: data?.error?.message ?? "Stripe error", raw: data }, 400);

    return json({ client_secret: data.client_secret });
  } catch (e) {
    return json({ error: e?.message ?? String(e) }, 500);
  }
});
