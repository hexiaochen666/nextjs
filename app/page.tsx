import Link from "next/link"

const services = [
  {
    name: "Brand Strategy",
    text: "为品牌建立清晰的定位、叙事与增长方向，实现从想法到市场的转化。",
  },
  {
    name: "Visual Identity",
    text: "从 Logo、色彩和版式到品牌资产，形成一套稳定、识别度强的视觉系统。",
  },
  {
    name: "Digital Experience",
    text: "为产品与品牌打造高转化的网站和数字体验，让表达更有说服力。",
  },
]

const metrics = [
  { value: "12+", label: "项目落地" },
  { value: "08", label: "品牌合作" },
  { value: "04Y", label: "创作经验" },
]

const works = [
  { name: "Morrow", type: "咖啡品牌重塑", tone: "amber", accent: "M" },
  { name: "Nori", type: "数字商品体验", tone: "dark", accent: "N" },
  { name: "Common Ground", type: "空间品牌系统", tone: "sky", accent: "C" },
  { name: "Lumen", type: "创意工作室官网", tone: "rose", accent: "L" },
]

const process = [
  { title: "Discover", text: "深入理解目标、市场与受众，找到品牌真正要解决的问题。" },
  { title: "Define", text: "梳理品牌定位、叙事和视觉方向，建立逻辑框架。" },
  { title: "Design", text: "将表达转化为可感知的视觉语言和优秀的数字体验。" },
  { title: "Deliver", text: "完善迭代并输出高质量的品牌资产与落地方案。" },
]

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">
          AS<span>F</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/project">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="button button-small button-light">
          Start a project
        </Link>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Independent design studio / brand systems</p>
          <h1>
            Design that turns
            <br />
            ambition into <span>clarity</span>.
          </h1>
          <p className="lead">
            我帮助创始人和品牌把复杂的方向，转成一致、可持续的视觉语言与数字体验。
          </p>

          <div className="hero-actions">
            <Link href="/project" className="button button-primary">
              View selected work
            </Link>
            <Link href="/about" className="text-link">
              Learn more
            </Link>
          </div>

          <div className="metrics-row">
            {metrics.map((item) => (
              <div key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract design composition">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-badge">
            <span>AS</span>
            <em>F</em>
          </div>
          <div className="hero-note">Ideas in motion</div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>Brand Strategy</span>
          <span>✦</span>
          <span>Visual Identity</span>
          <span>✦</span>
          <span>Digital Product</span>
          <span>✦</span>
          <span>Art Direction</span>
          <span>✦</span>
          <span>Brand Strategy</span>
          <span>✦</span>
          <span>Visual Identity</span>
          <span>✦</span>
          <span>Digital Product</span>
        </div>
      </div>

      <section className="services container section-block">
        <div className="section-head">
          <p className="eyebrow">/ 01 — capabilities</p>
          <h2>可持续增长的设计系统</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.name} className="service-card">
              <span className="card-index">0{index + 1}</span>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase section-block">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">/ 02 — selected projects</p>
              <h2>精选案例</h2>
            </div>
            <Link href="/project" className="text-link">
              See all work
            </Link>
          </div>

          <div className="work-grid">
            {works.map((work) => (
              <article key={work.name} className="work-card">
                <div className={`work-visual ${work.tone}`}>
                  <span>{work.accent}</span>
                </div>
                <div className="work-meta">
                  <p>{work.type}</p>
                  <h3>{work.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process container section-block">
        <div className="section-head">
          <p className="eyebrow">/ 03 — process</p>
          <h2>从理解到落地的完整流程</h2>
        </div>

        <div className="process-grid">
          {process.map((step, index) => (
            <div key={step.title} className="process-card">
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial container section-block">
        <div className="quote-box">
          <p className="eyebrow">/ 04 — client feedback</p>
          <blockquote>
            “ASF 让我们的品牌从散乱的想法变成真正能被市场认可的表达，视觉和体验都更有说服力。”
          </blockquote>
          <div className="quote-person">
            <strong>Rena Chen</strong>
            <span>Founder / Morrow</span>
          </div>
        </div>
      </section>

      <section className="cta container section-block">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Ready to build</p>
            <h2>打造更清晰、更有影响力的品牌体验。</h2>
          </div>
          <Link href="/contact" className="button button-primary">
            Let’s talk
          </Link>
        </div>
      </section>
    </main>
  )
}
