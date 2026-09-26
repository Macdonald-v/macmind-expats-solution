import { Link } from "react-router-dom";
import type { Product } from "@/lib/types";

function fallbackImage(product: Product) {
  const value = `${product.category ?? ""} ${product.name}`.toLowerCase();

  if (value.includes("copyprinter") || value.includes("production")) {
    return "/images/copyprinter.png";
  }
  if (value.includes("photocopier") || value.includes("photocopy")) {
    return "/images/photocopier.jfif";
  }
  return "/images/printer.webp";
}

export default function ProductCard({ product }: { product: Product }) {
  const fallback = fallbackImage(product);
  const image = product.image_url || fallback;

  return (
    <article className="card product-card">
      <div className="product-image">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          onError={(event) => {
            const img = event.currentTarget;
            if (img.src.endsWith(fallback)) return;
            img.src = fallback;
          }}
        />
      </div>
      <div className="card-body">
        <span className="eyebrow">{product.category || "Printing Equipment"}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link className="text-link" to="/contact">
          Request a quotation →
        </Link>
      </div>
    </article>
  );
}
