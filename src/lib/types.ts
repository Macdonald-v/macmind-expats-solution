export type Product = {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  price: number | null;
  image_url?: string | null;
  featured?: boolean;
  active?: boolean;
};

export type Service = {
  id: string;
  name: string;
  description: string | null;
  category?: string | null;
  active?: boolean;
};

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  enquiry_type?: string | null;
  message: string;
  status?: string | null;
  created_at: string;
};