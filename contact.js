import Head from 'next/head';
import { useState } from 'react';

function Layout({ children, title }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head><title>{title}</title></Head>
      <nav className="nav">
        <div className="brand">ITCO Solutions</div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      {children}
      <footer className="footer">© {new Date().getFullYear()} ITCO Solutions</footer>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Connect this form to an email service like Formspree or Resend.');
  };

  return (
    <Layout title="Contact | ITCO Solutions">
      <div className="page">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className="form">
          <input placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
          <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
          <textarea placeholder="Message" onChange={(e)=>setForm({...form, message:e.target.value})}/>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}
