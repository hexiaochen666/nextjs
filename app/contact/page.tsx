import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">AS<span>F</span></Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/project">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="button button-small button-light">Start a project</Link>
      </header>

      <section className="page-header container section-block">
        <div>
          <p className="eyebrow">/ 04 — get in touch</p>
          <h1>Contact.</h1>
        </div>
      </section>

      <section className="container section-block contact-shell">
        <div className="contact-card">
          <p className="eyebrow">Let’s build something memorable</p>
          <h2>有一个想法？<br />我很想听听。</h2>
          <p className="contact-copy">无论你正在构建新品牌，还是想让现有的产品和体验更清晰、更强有力，都欢迎联系我。</p>
          <a className="email-link" href="mailto:hello@asf.design">hello@asf.design</a>
        </div>

        <div className="contact-item">
          <h3>Availability</h3>
          <p>Q4 2026 — open for selected projects</p>
          <p>Remote-friendly / Worldwide</p>
          <p>Response time: within 48 hours</p>
        </div>
      </section>
    </main>
  )
}
