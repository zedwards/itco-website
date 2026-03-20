import Head from 'next/head';

function Layout({ children, title }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
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

export default function Services() {
  return (
    <Layout title="Services | ITCO Solutions">
      <div className="page">
        <h1>Services</h1>
        <ul>
          <li><b>AI & Generative AI:</b> Enterprise-grade AI solutions.</li>
          <li><b>Cloud & Infrastructure:</b> Optimize and scale environments.</li>
          <li><b>Digital Transformation:</b> End-to-end modernization.</li>
          <li><b>Workforce Solutions:</b> Elite technical talent.</li>
        </ul>
      </div>
    </Layout>
  );
}
