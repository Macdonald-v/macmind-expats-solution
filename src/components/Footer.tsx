import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <div className="brand footer-brand"><span className="brand-mark">M</span><span><strong>Macmind</strong><small>Expats Solutions</small></span></div>
        <p>Professional Printing Solutions for businesses and organizations in Nairobi.</p>
      </div>
      <div><h4>Company</h4><Link to="/about">About us</Link><Link to="/products">Products</Link><Link to="/services">Services</Link></div>
      <div><h4>Contact</h4><a href="tel:0726779842">0726 779842</a><a href="mailto:macmindexpatss@gmail.com">macmindexpatss@gmail.com</a><span>Nairobi, Kenya</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Macmind Expats Solutions. All rights reserved.</span><Link to="/admin/login">Admin</Link></div>
  </footer>;
}