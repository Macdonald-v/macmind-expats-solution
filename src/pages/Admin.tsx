import { useEffect, useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { Enquiry } from "@/lib/types";
import { useNavigate } from "react-router-dom";
export default function Admin(){
 const [items,setItems]=useState<Enquiry[]>([]);const [loading,setLoading]=useState(true);const nav=useNavigate();
 async function load(){if(!supabase)return;setLoading(true);const {data}=await supabase.from("enquiries").select("*").order("created_at",{ascending:false});setItems((data||[]) as Enquiry[]);setLoading(false);}
 useEffect(()=>{if(!supabase){nav("/admin/login");return;}supabase.auth.getUser().then(({data})=>{if(!data.user)nav("/admin/login");else load();});},[]);
 async function logout(){await supabase?.auth.signOut();nav("/admin/login");}
 return <div className="admin-page"><div className="container"><div className="admin-top"><div><span className="eyebrow">Admin dashboard</span><h1>Quotation enquiries</h1></div><div><button className="button secondary" onClick={load}><RefreshCw size={17}/> Refresh</button><button className="button dark" onClick={logout}><LogOut size={17}/> Sign out</button></div></div>
 <div className="admin-table">{loading?<p>Loading enquiries...</p>:items.length===0?<p>No enquiries yet.</p>:<table><thead><tr><th>Date</th><th>Customer</th><th>Contact</th><th>Type</th><th>Message</th></tr></thead><tbody>{items.map(x=><tr key={x.id}><td>{new Date(x.created_at).toLocaleString()}</td><td><strong>{x.name}</strong><br/>{x.company}</td><td>{x.phone}<br/>{x.email}</td><td>{x.enquiry_type}</td><td>{x.message}</td></tr>)}</tbody></table>}</div></div></div>;
}