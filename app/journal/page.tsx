import Link from "next/link"

export const revalidate = 60

const articles = [
  {
    tag: "品牌观察",
    title: "为什么“清晰”比“炫酷”更重要？",
    text: "一个品牌真正长久的价值，往往来自于它是否能够让人一眼理解并信任。",
  },
  {
    tag: "设计方法",
    title: "好的视觉系统，不只是好看，而是让团队更高效。",
    text: "统一的语言能够减少重复沟通，也让每一次传播都更加一致。",
  },
  {
    tag: "数字体验",
    title: "高端网站不是堆砌功能，而是让用户愿意停留。",
    text: "我们更看重信息层级、节奏和情绪的连续性，而不是表面的视觉噱头。",
  },
]

export default function JournalPage() {
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
          <p className="eyebrow">/ 04 — 观察</p>
          <h1>观察.</h1>
        </div>
        <p className="page-intro">
          关于品牌、内容与体验的思考，以及一个更值得被记住的存在方式。
        </p>
      </section>

      <section className="container section-block">
        <div className="journal-grid">
          {articles.map((article) => (
            <article key={article.title} className="article-card">
              <span className="tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-block page-cta">
        <div className="cta-panel">
          <h2>如果你也在追求更清晰的品牌表达，我们可以一起讨论。</h2>
          <Link href="/contact" className="button button-primary">开始项目</Link>
        </div>
      </section>
    </main>
  )
}
