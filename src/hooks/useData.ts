import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Product, Service } from "@/lib/types";

const sampleProducts: Product[] = [
  { id: "sample-1", name: "Office Multifunction Printer", description: "Reliable print, scan and copy performance for busy offices.", category: "Printers", price: null, featured: true, active: true },
  { id: "sample-2", name: "Business Photocopier", description: "High-volume copying and document finishing for growing teams.", category: "Photocopiers", price: null, featured: true, active: true },
  { id: "sample-3", name: "Production Copyprinter", description: "Efficient production printing for professional document workflows.", category: "Copyprinters", price: null, featured: true, active: true }
];

const sampleServices: Service[] = [
  { id: "service-1", name: "Printer Repair & Maintenance", description: "Professional diagnostics, repair and preventive maintenance for office printing equipment.", category: "Repair", active: true },
  { id: "service-2", name: "Photocopier Service", description: "Keep photocopiers performing reliably with servicing and technical support.", category: "Maintenance", active: true },
  { id: "service-3", name: "Printing Solutions Consultation", description: "Get practical advice on choosing and maintaining equipment for your document workload.", category: "Consultation", active: true }
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  useEffect(() => {
    if (!supabase) return;
    supabase.from("products").select("*").eq("active", true).order("created_at", { ascending: false })
      .then(({ data }) => { if (data?.length) setProducts(data as Product[]); });
  }, []);
  return products;
}

export function useServices() {
  const [services, setServices] = useState<Service[]>(sampleServices);
  useEffect(() => {
    if (!supabase) return;
    supabase.from("services").select("*").eq("active", true).order("created_at", { ascending: false })
      .then(({ data }) => { if (data?.length) setServices(data as Service[]); });
  }, []);
  return services;
}