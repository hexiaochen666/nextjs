import Link from "next/link"

export const revalidate = 60

export default function ContactPage() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">AS<span>F</span></Link>
        <nav className="nav-links" aria-label="主导航">
          <Link href="/project">项目</Link>
          <Link href="/services">服务</Link>
          <Link href="/process">流程</Link>
          <Link href="/journal">观察</Link>
          <Link href="/about">关于</Link>
          <Link href="/contact">联系</Link>
        </nav>
        <Link href="/contact" className="button button-small button-light">开始项目</Link>
      </header>

      <section className="page-header container section-block">
        <div>
          <p className="eyebrow">/ 04 — 联系</p>
          <h1>联系.</h1>
        </div>
      </section>

      <section className="container section-block contact-shell">
        <div className="contact-card">
          <p className="eyebrow">让我们一起塑造更 memorable 的存在</p>
          <h2>把你的下一步，<br />变得清晰而有分量。</h2>
          <p className="contact-copy">无论是品牌焕新、产品发布，还是更具体验感的数字项目，我都很乐意听听你正在构建什么。</p>
          <a className="email-link" href="mailto:hello@asf.design">hello@asf.design</a>
        </div>

        <div className="contact-item">
          <h3>可接项目</h3>
          <p>接受精选合作</p>
          <p>支持远程协作 / 全球</p>
          <p>48 小时内回复</p>
        </div>
      </section>
    </main>
  )
}
