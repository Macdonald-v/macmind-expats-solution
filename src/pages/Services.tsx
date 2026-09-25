import { Wrench, Printer, ClipboardCheck, Headphones } from "lucide-react";
import { useServices } from "@/hooks/useData";
import { Link } from "react-router-dom";
export default function Services() {
  const services = useServices();
  const icons = [Wrench, Printer, ClipboardCheck, Headphones];
  return <><section className="page-hero"><div className="container"><span className="eyebrow">Technical support</span><h1>Services that keep you productive</h1><p>From repairs to maintenance and printing advice, our focus is dependable document equipment.</p></div></section>
  <section className="section"><div className="container service-list">{services.map((s,i)=>{const Icon=icons[i%icons.length]; return <article className="service-row" key={s.id}><div className="icon-box"><Icon/></div><div><span className="eyebrow">{s.category || "Service"}</span><h2>{s.name}</h2><p>{s.description}</p></div></article>})}</div></section>
  <section className="cta"><div className="container cta-inner"><div><h2>Need technical assistance?</h2><p>Send us the details of your equipment or request a service quotation.</p></div><Link className="button light" to="/contact">Contact us</Link></div></section></>;
}