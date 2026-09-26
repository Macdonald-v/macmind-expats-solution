import { MessageCircle } from "lucide-react";
const number = import.meta.env.VITE_WHATSAPP_NUMBER || "254726779842";
export default function WhatsAppButton() {
  const url = `https://wa.me/${number}?text=${encodeURIComponent("Hello Macmind Expats Solutions, I would like to enquire about your printing solutions.")}`;
  return <a className="whatsapp" href={url} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/> <span>WhatsApp</span></a>;
}