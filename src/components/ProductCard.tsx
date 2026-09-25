import { Link } from "react-router-dom";
import type { Product } from "@/lib/types";
export default function ProductCard({ product }: { product: Product }) {
  return <article className="card product-card">
    <div className="product-image">{product.image_url ? <img src={product.image_url} alt={product.name}/> : <div className="product-placeholder">PRINT</div>}</div>
    <div className="card-body"><span className="eyebrow">{product.category || "Printing Equipment"}</span><h3>{product.name}</h3><p>{product.description}</p><Link className="text-link" to="/contact">Request a quotation →</Link></div>
  </article>;
}