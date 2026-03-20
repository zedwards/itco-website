import Head from 'next/head';

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

export default function Careers() {
  return (
    <Layout title="Careers | ITCO Solutions">
      <div className="page">
        <h1>Careers</h1>
        <p>Join a team building the future of AI and cloud.</p>
      </div>
    </Layout>
  );
}
