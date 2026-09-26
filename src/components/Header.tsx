import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Products", "/products"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ];
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">M</span>
          <span><strong>Macmind</strong><small>Expats Solutions</small></span>
        </Link>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>
          ))}
          <a className="nav-cta" href="tel:0726779842"><Phone size={17}/> Call 0726 779842</a>
        </nav>
      </div>
    </header>
  );
}