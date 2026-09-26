import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AdminLogin from "@/pages/AdminLogin";
import Admin from "@/pages/Admin";
export default function App(){return <Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/services" element={<Services/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/></Route><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<Admin/>}/></Routes>}