import Link from "next/link"

const stats = [
  ["12", "已完成项目"],
  ["08", "合作品牌"],
  ["04", "年设计经验"],
]

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <Link className="brand" href="/">AS<span>F</span></Link>
        <div className="nav-links">
          <Link href="/project">项目</Link>
          <Link href="/about">关于我</Link>
          <Link href="/contact">联系</Link>
        </div>
        <Link className="nav-cta" href="/contact">开始合作 <span>↗</span></Link>
      </nav>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><i /> 独立设计与数字体验</p>
          <h1>让想法<br /><em>变得有形。</em></h1>
          <p className="hero-description">我用品牌策略、视觉设计与数字产品，帮助有野心的人把复杂的想法变成令人记住的体验。</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/project">查看精选项目 <span>↗</span></Link>
            <Link className="text-link" href="/about">了解更多 <span>→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="抽象橙色设计图形">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="sun">A<span>+</span></div><span className="art-label">IDEAS<br />IN MOTION</span>
        </div>
      </section>

      <section className="ticker"><div>品牌策略　✦　视觉识别　✦　数字产品　✦　品牌策略　✦　视觉识别　✦　数字产品　✦</div></section>
      <section className="intro container">
        <div><p className="eyebrow">/ 01　我的方法</p><h2>设计不只是<br /><span>好看。</span></h2></div>
        <div className="intro-right"><p>好的设计应该清晰、有性格，并且真正解决问题。每一次合作，我都会从理解你的目标开始，找到理性与感性之间的平衡。</p><Link className="circle-link" href="/about">↗</Link></div>
      </section>
      <section className="stats container">{stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</section>
    </main>
  )
}
