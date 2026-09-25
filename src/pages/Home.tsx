import { ArrowRight, CheckCircle2, Printer, Settings, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useProducts, useServices } from "@/hooks/useData";

export default function Home() {
  const products = useProducts().filter(p => p.featured !== false).slice(0, 3);
  const services = useServices().slice(0, 3);
  return <div>
    <section className="hero"><div className="container hero-grid">
      <div><span className="pill">Professional Printing Solutions</span><h1>Reliable printing equipment and <span>expert support.</span></h1><p className="hero-copy">Macmind Expats Solutions helps Nairobi businesses find dependable printers, photocopiers, copyprinters and professional repair services.</p>
      <div className="hero-actions"><Link className="button primary" to="/contact">Request a Quote <ArrowRight size={18}/></Link><a className="button secondary" href="tel:0726779842">Call 0726 779842</a></div>
      <div className="trust-row"><span><CheckCircle2/> Business-focused solutions</span><span><CheckCircle2/> Technical support</span></div></div>
      <div className="hero-art"><div className="machine"><Printer size={92}/><div className="paper"></div></div><div className="floating-card"><strong>Printing made dependable.</strong><span>Equipment • Service • Support</span></div></div>
    </div></section>

    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">What we offer</span><h2>Solutions for your document workflow</h2></div><Link className="text-link" to="/services">View all services →</Link></div>
      <div className="service-grid">{services.map((s, i) => <div className="feature-card" key={s.id}><div className="icon-box">{i === 0 ? <Settings/> : i === 1 ? <Printer/> : <ShieldCheck/>}</div><h3>{s.name}</h3><p>{s.description}</p></div>)}</div>
    </div></section>

    <section className="section soft"><div className="container"><div className="section-heading"><div><span className="eyebrow">Equipment</span><h2>Featured printing solutions</h2></div><Link className="text-link" to="/products">Browse products →</Link></div><div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p}/>)}</div></div></section>

    <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">Need a solution?</span><h2>Tell us what you need to print.</h2><p>We can help you choose equipment and support that fits your workload.</p></div><Link className="button light" to="/contact">Get a quotation <ArrowRight size={18}/></Link></div></section>
    <WhatsAppButton/>
  </div>;
}