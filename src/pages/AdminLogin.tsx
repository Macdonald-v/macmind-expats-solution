import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
export default function AdminLogin(){
 const [email,setEmail]=useState("");const [password,setPassword]=useState("");const [error,setError]=useState("");const nav=useNavigate();
 async function submit(e:FormEvent){e.preventDefault();setError("");if(!supabase){setError("Supabase environment variables are not configured.");return;}const {error}=await supabase.auth.signInWithPassword({email,password});if(error)setError(error.message);else nav("/admin");}
 return <div className="auth-page"><div className="auth-card"><div className="brand"><span className="brand-mark">M</span><span><strong>Macmind</strong><small>Admin</small></span></div><h1>Administrator sign in</h1><p>Use the administrator account configured in Supabase Auth.</p><form onSubmit={submit}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>{error&&<div className="error">{error}</div>}<button className="button primary full">Sign in</button></form></div></div>;
}