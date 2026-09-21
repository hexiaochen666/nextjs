import Link from "next/link"

export const revalidate = 60

const steps = [
  {
    step: "01",
    title: "对话与理解",
    text: "我们先深入理解品牌的历史、定位和目标受众，再梳理真正需要被解决的问题。",
  },
  {
    step: "02",
    title: "方向与框架",
    text: "把抽象愿景整理成清晰方向，包括品牌语言、信息结构和表达重点。",
  },
  {
    step: "03",
    title: "设计落地",
    text: "把策略转化成视觉、空间与体验的具体方案，确保每处细节都统一且有分量。",
  },
  {
    step: "04",
    title: "迭代与增长",
    text: "在投放与使用中持续观察反馈，让品牌保持清晰、稳定且更具生命力。",
  },
]

export default function ProcessPage() {
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
          <p className="eyebrow">/ 03 — 流程</p>
          <h1>流程.</h1>
        </div>
        <p className="page-intro">
          我们不是一次性做视觉，而是从方向、设计与落地一起推进，确保结果更稳、更长久。
        </p>
      </section>

      <section className="container section-block">
        <div className="timeline">
          {steps.map((item) => (
            <div key={item.step} className="timeline-item">
              <strong>{item.step}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block page-cta">
        <div className="cta-panel">
          <h2>清晰的方向，往往比更大的预算更有价值。</h2>
          <Link href="/contact" className="button button-primary">联系我</Link>
        </div>
      </section>
    </main>
  )
}
