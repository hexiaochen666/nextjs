import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">AS<span>F</span></Link>
        <nav className="nav-links" aria-label="主导航">
          <Link href="/project">项目</Link>
          <Link href="/about">关于</Link>
          <Link href="/contact">联系</Link>
        </nav>
        <Link href="/contact" className="button button-small button-light">开始项目</Link>
      </header>

      <section className="page-header container section-block">
        <div>
          <p className="eyebrow">/ 03 — 工作室</p>
          <h1>关于.</h1>
        </div>
      </section>

      <section className="container section-block about-grid">
        <p className="about-copy">
          我是一个多领域的设计师，专注于帮助有野心的品牌与创始人，在被看见的方式上变得 <strong>更清晰、更温暖、更高级</strong>。<br /><br />
          策略、品牌识别和数字体验在我的工作里相互支撑，彼此成就。
        </p>

        <div className="contact-item">
          <h3>专注方向</h3>
          <p>品牌策略与识别</p>
          <p>艺术指导与传播</p>
          <p>产品与数字体验</p>
          <p>独立 / 精选合作</p>
        </div>
      </section>
    </main>
  )
}
