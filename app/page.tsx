import Link from "next/link"

const services = [
  { name: "品牌策略", text: "通过清晰的市场定位与叙事框架，让品牌建立更稳定、更高级的表达基底。" },
  { name: "视觉系统", text: "从标志、字体、色彩、视觉语言到品牌资产，形成统一且具辨识度的高端形象。" },
  { name: "数字体验", text: "提升品牌在数字世界中的存在感，打造让人愿意停留、信任与转化的体验。" },
]

const metrics = [
  { value: "12+", label: "品牌项目" },
  { value: "08", label: "合作伙伴" },
  { value: "4Y", label: "创作实践" },
]

const works = [
  { title: "Morrow", type: "咖啡品牌身份", tone: "amber", initial: "M" },
  { title: "Nori", type: "数字商业体验", tone: "dark", initial: "N" },
  { title: "Common Ground", type: "空间概念与编辑", tone: "sky", initial: "C" },
  { title: "Lumen", type: "工作室网站", tone: "rose", initial: "L" },
]

const process = [
  { title: "洞察", text: "对品牌、市场与用户进行深入理解，明确真正值得被建立的方向。" },
  { title: "定义", text: "形成品牌语言、叙事结构与视觉框架，使每个表达都具统一性。" },
  { title: "设计", text: "从概念到落地，织造每一处视觉和体验细节，让品牌更有质感。" },
  { title: "交付", text: "输出可持续扩展的系统与执行方案，确保长期价值不断积累。" },
]

export default function Home() {
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

        <Link href="/contact" className="button button-small button-light">
          开始项目
        </Link>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">品牌与数字工艺的私人工作室</p>
          <h1>
            让 <span>清晰</span>
            <br />
            成为高级感。
          </h1>
          <p className="lead">
            ASF 为品牌、空间与数字产品打造更值得被记住的存在方式。我们帮助客户把复杂想法，转成高级、统一、可持续的表达。
          </p>

          <div className="hero-actions">
            <Link href="/project" className="button button-primary">
              查看作品
            </Link>
            <Link href="/about" className="text-link">
              了解更多
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

        <div className="hero-visual" aria-label="高端品牌视觉组合">
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
          <span>品牌策略</span>
          <span>✦</span>
          <span>艺术指导</span>
          <span>✦</span>
          <span>视觉系统</span>
          <span>✦</span>
          <span>奢华体验</span>
          <span>✦</span>
          <span>品牌策略</span>
          <span>✦</span>
          <span>艺术指导</span>
          <span>✦</span>
          <span>视觉系统</span>
          <span>✦</span>
          <span>奢华体验</span>
        </div>
      </div>

      <section className="services container section-block">
        <div className="section-head">
          <p className="eyebrow">/ 01 — 能力</p>
          <h2>高级思维，精准落地。</h2>
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
              <p className="eyebrow">/ 02 — 作品</p>
              <h2>精选案例。</h2>
            </div>
            <Link href="/project" className="text-link">查看全部</Link>
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
          <p className="eyebrow">/ 03 — 流程</p>
          <h2>从策略到存在感。</h2>
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
          <p className="eyebrow">/ 04 — 客户反馈</p>
          <blockquote>
            “ASF 帮助我们把品牌打磨得更锐利、更克制，也更有质感。每一个接触点都像在讲同一个故事。”
          </blockquote>
          <div className="quote-person">
            <strong>Rena Chen</strong>
            <span>创始人 / Morrow</span>
          </div>
        </div>
      </section>

      <section className="cta container section-block">
        <div className="cta-panel">
          <h2>建立一个真正值得被记住的品牌存在。</h2>
          <Link href="/contact" className="button button-primary">
            联系我
          </Link>
        </div>
      </section>
    </main>
  )
}
