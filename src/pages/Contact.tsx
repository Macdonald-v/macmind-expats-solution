import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
 const [sent,setSent]=useState(false); const [loading,setLoading]=useState(false);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  setLoading(true);
  const form=new FormData(e.currentTarget);
  const payload={
    full_name:String(form.get("name")||""),
    email:String(form.get("email")||""),
    phone:String(form.get("phone")||""),
    company:String(form.get("company")||""),
    subject:String(form.get("type")||"Quotation"),
    message:String(form.get("message")||""),
  };

  if(supabase){
    const {error}=await supabase.from("enquiries").insert(payload);
    if(error){alert(error.message);setLoading(false);return;}

    const {error:emailError}=await supabase.functions.invoke("send-enquiry-email",{body:payload});
    if(emailError){
      console.error("Email notification failed:",emailError);
      alert("Your request was saved, but the email notification could not be sent. Please call 0726 779842.");
      setLoading(false);
      return;
    }
  }

  setSent(true);
  setLoading(false);
 }
 return <><section className="page-hero"><div className="container"><span className="eyebrow">Get in touch</span><h1>Request a quotation</h1><p>Tell us what equipment or service you need and our team can follow up.</p></div></section>
 <section className="section"><div className="container contact-grid">
 <div className="contact-info"><h2>Let's talk printing.</h2><p>For fast enquiries, call or message us on WhatsApp. For detailed requests, use the form.</p><div className="contact-item"><Phone/><div><strong>Phone</strong><a href="tel:0726779842">0726 779842</a></div></div><div className="contact-item"><Mail/><div><strong>Email</strong><a href="mailto:macmindexpatss@gmail.com">macmindexpatss@gmail.com</a></div></div><div className="contact-item"><MapPin/><div><strong>Location</strong><span>Nairobi, Kenya</span></div></div></div>
 <div className="form-card">{sent ? <div className="success"><Send/><h2>Request received</h2><p>Thank you. Your quotation request has been submitted successfully.</p><button className="button primary" onClick={()=>setSent(false)}>Send another request</button></div> :
 <form onSubmit={submit}><div className="form-grid"><label>Full name<input name="name" required placeholder="Your name"/></label><label>Phone<input name="phone" required placeholder="07xx xxx xxx"/></label></div><div className="form-grid"><label>Email<input type="email" name="email" required placeholder="you@example.com"/></label><label>Company<input name="company" placeholder="Company / organization"/></label></div><label>Enquiry type<select name="type"><option>Quotation</option><option>Printer</option><option>Photocopier</option><option>Copyprinter</option><option>Repair & maintenance</option><option>Other</option></select></label><label>What do you need?<textarea name="message" required rows={6} placeholder="Tell us about the equipment, quantity, issue or requirement..."></textarea></label><button disabled={loading} className="button primary full">{loading ? "Sending..." : "Submit quotation request"} <Send size={18}/></button></form>}</div>
 </div></section><WhatsAppButton/></>;
}