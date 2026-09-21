import Link from "next/link"

export default function AboutPage() {
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
          <p className="eyebrow">/ 03 — studio profile</p>
          <h1>About.</h1>
        </div>
      </section>

      <section className="container section-block about-grid">
        <p className="about-copy">
          I am a multidisciplinary designer focused on helping ambitious brands and founders feel <strong>clearer, warmer and more premium</strong> in the way they are seen.<br /><br />
          Strategy, identity, and digital experience are intertwined in my work—each one supporting the next.
        </p>

        <div className="contact-item">
          <h3>Focus</h3>
          <p>Brand strategy and identity</p>
          <p>Art direction and communication</p>
          <p>Product and digital experience</p>
          <p>Independent / selective collaborations</p>
        </div>
      </section>
    </main>
  )
}
