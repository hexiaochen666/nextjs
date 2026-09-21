import Link from "next/link"

export const revalidate = 60

const services = [
  { title: "品牌策略", text: "定位、叙事与增长方向的清晰结构，帮助品牌在市场中更稳地被看见。" },
  { title: "视觉识别", text: "从字形、色彩、平面资产到品牌手册，建立统一而高级的表达系统。" },
  { title: "数字体验", text: "网站、落地页与产品界面，提升品牌在数字世界中的可信度与转化力。" },
]

const process = [
  { step: "01", title: "洞察", text: "我们从行业、客户和用户的真实状态入手，识别问题和差异化机会。" },
  { step: "02", title: "定位", text: "把模糊的品牌愿景转成可执行的叙事、价值与沟通框架。" },
  { step: "03", title: "设计", text: "在视觉、信息和体验之间建立一套统一且有质感的设计语言。" },
  { step: "04", title: "交付", text: "输出可持续迭代的资产包，并确保品牌的每次触点都保持一致。" },
]

export default function ServicesPage() {
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
          <p className="eyebrow">/ 01 — 服务</p>
          <h1>服务.</h1>
        </div>
        <p className="page-intro">
          我们帮助品牌把复杂的信息转成更清晰、更可信、更具辨识度的存在方式。
        </p>
      </section>

      <section className="container section-block">
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <span className="card-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-head">
          <p className="eyebrow">/ 02 — 方式</p>
          <h2>从策略到落地的协作方式。</h2>
        </div>

        <div className="timeline">
          {process.map((item) => (
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
          <h2>如果你正在为品牌下一步发力，我可以一起拆解和落地。</h2>
          <Link href="/contact" className="button button-primary">联系我</Link>
        </div>
      </section>
    </main>
  )
}
