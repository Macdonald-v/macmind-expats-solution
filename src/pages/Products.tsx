import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useProducts } from "@/hooks/useData";
export default function Products() {
  const products = useProducts();
  return <><section className="page-hero"><div className="container"><span className="eyebrow">Our equipment</span><h1>Printing products</h1><p>Practical printing equipment for offices, organizations and professional document environments.</p></div></section>
  <section className="section"><div className="container"><div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p}/>)}</div></div></section><WhatsAppButton/></>;
}