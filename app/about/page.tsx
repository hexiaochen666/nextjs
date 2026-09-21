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
          <p className="eyebrow">/ 03 — who I am</p>
          <h1>About.</h1>
        </div>
      </section>

      <section className="container section-block about-grid">
        <p className="about-copy">
          我是一个独立设计师，专注于把 <strong>清晰的策略</strong> 转成有温度的视觉与数字体验。<br /><br />
          我相信每个品牌都值得被理解，也值得被表达得更完整。
        </p>

        <div className="contact-item">
          <h3>Focus</h3>
          <p>Brand / Visual / Product</p>
          <p>Independent / Collaborative / Strategic</p>
          <p>Shanghai / Remote</p>
        </div>
      </section>
    </main>
  )
}
