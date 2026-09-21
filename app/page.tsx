import Link from "next/link"

const services = [
  { name: "Brand Direction", text: "精确的市场定位与品牌叙事，给品牌建立一套更高级的表达基底。" },
  { name: "Visual Identity", text: "从标志、字体、色彩、视觉语言到品牌资产，形成统一的高端识别体系。" },
  { name: "Digital Craft", text: "提升品牌在数字世界中的存在感，打造让人愿意停留并信任的产品体验。" },
]

const metrics = [
  { value: "12+", label: "signature launches" },
  { value: "08", label: "brand partners" },
  { value: "4Y", label: "creative practice" },
]

const works = [
  { title: "Morrow", type: "cafe brand identity", tone: "amber", initial: "M" },
  { title: "Nori", type: "digital commerce", tone: "dark", initial: "N" },
  { title: "Common Ground", type: "spatial concept", tone: "sky", initial: "C" },
  { title: "Lumen", type: "studio website", tone: "rose", initial: "L" },
]

const process = [
  { title: "Discover", text: "对品牌、本体与市场进行深度定义，建立清晰而明确的方向。" },
  { title: "Define", text: "形成品牌语言、叙事结构与视觉基准，统一工作的核心逻辑。" },
  { title: "Design", text: "从概念到落地，设计所有关键触点，强化品牌的高级感和一致性。" },
  { title: "Deliver", text: "为品牌提供可延展的系统与执行方案，确保长期价值持续增长。" },
]

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">AS<span>F</span></Link>

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
          <p className="eyebrow">Maison of brand and digital craft</p>
          <h1>
            We design <span>clarity</span>
            <br />
            into luxury.
          </h1>
          <p className="lead">
            ASF 为品牌、空间与数字产品打造更值得被记住的存在方式。我们帮助客户把复杂想法，转成高级、统一、可持续的表达。
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

        <div className="hero-visual" aria-label="Luxury brand aesthetic composition">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-badge">
            AS<em>F</em>
          </div>
          <div className="hero-note">Ideas in motion</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Brand Strategy</span>
          <span>✦</span>
          <span>Art Direction</span>
          <span>✦</span>
          <span>Identity Systems</span>
          <span>✦</span>
          <span>Luxury Experience</span>
          <span>✦</span>
          <span>Brand Strategy</span>
          <span>✦</span>
          <span>Art Direction</span>
          <span>✦</span>
          <span>Identity Systems</span>
          <span>✦</span>
          <span>Luxury Experience</span>
        </div>
      </div>

      <section className="services container section-block">
        <div className="section-head">
          <p className="eyebrow">/ 01 — capabilities</p>
          <h2>Luxury thinking, precise execution.</h2>
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
              <h2>Signature work.</h2>
            </div>
            <Link href="/project" className="text-link">See portfolio</Link>
          </div>

          <div className="work-grid">
            {works.map((work) => (
              <article key={work.title} className="work-card">
                <div className={`work-visual ${work.tone}`}>
                  <span>{work.initial}</span>
                </div>
                <div className="work-meta">
                  <p>{work.type}</p>
                  <h3>{work.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process container section-block">
        <div className="section-head">
          <p className="eyebrow">/ 03 — process</p>
          <h2>From strategy to presence.</h2>
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
            “ASF helped us refine the brand into something sharper, calmer, and undeniably more premium. Every touchpoint now feels intentional.”
          </blockquote>
          <div className="quote-person">
            <strong>Rena Chen</strong>
            <span>Founder / Morrow</span>
          </div>
        </div>
      </section>

      <section className="cta container section-block">
        <div className="cta-panel">
          <h2>Build a brand presence that feels rare and memorable.</h2>
          <Link href="/contact" className="button button-primary">
            Let’s talk
          </Link>
        </div>
      </section>
    </main>
  )
}
