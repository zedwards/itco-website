import Head from 'next/head';

function Layout({ children, title }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="ITCO Solutions helps enterprises deploy AI, scale cloud infrastructure, and drive measurable business outcomes." />
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

export default function Home() {
  return (
    <Layout title="ITCO Solutions | AI, Cloud & Digital Transformation">
      <section className="hero">
        <h1>From AI Strategy to Real World Impact</h1>
        <p>ITCO Solutions partners with enterprises to design, deploy, and scale AI and cloud solutions that drive measurable business outcomes.</p>
        <div className="cta">
          <a href="/contact" className="btn primary">Book a Strategy Call</a>
          <a href="/case-studies" className="btn outline">View Case Studies</a>
        </div>
      </section>

      <section className="proof">
        <div>
          <h3>32%</h3>
          <p>Average cloud cost reduction</p>
        </div>
        <div>
          <h3>90 Days</h3>
          <p>AI deployment timeline</p>
        </div>
        <div>
          <h3>250+</h3>
          <p>Enterprise professionals</p>
        </div>
      </section>

      <section className="why">
        <h2>Why ITCO</h2>
        <p>We combine Silicon Valley expertise with real-world execution. From AI strategy to deployment, we move faster and deliver results with precision.</p>
      </section>
    </Layout>
  );
}
