import Link from "next/link"

const projectData = [
  { slug: "morrow", name: "Morrow Coffee", type: "品牌重塑 / 2024", tone: "amber", accent: "MORROW", summary: "为一家精品咖啡品牌打造更有层次的市场识别与服务体验。" },
  { slug: "nori", name: "Nori Objects", type: "电商体验 / 2024", tone: "dark", accent: "nori", summary: "让文艺家居商品从被动展示转为更强的购买决策加持。" },
  { slug: "common-ground", name: "Common Ground", type: "空间品牌 / 2023", tone: "sky", accent: "COMMON", summary: "建立一个兼具文化属性和共享价值的空间品牌系统。" },
  { slug: "lumen", name: "Lumen Studio", type: "创意工作室 / 2023", tone: "rose", accent: "LUMEN", summary: "为创意团队打造更现代、更具传播力的官方网站。" },
]

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">AS<span>F</span></Link>
        <nav className="nav-links" aria-label="主导航">
          <Link href="/project">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="button button-small button-light">Start a project</Link>
      </header>

      <section className="page-header container section-block">
        <div>
          <p className="eyebrow">/ 02 — selected work</p>
          <h1>Projects.</h1>
        </div>
        <p className="page-intro">
          我通过品牌系统、网站设计和体验策略，帮助企业把价值传达得更清晰、更温暖、更有说服力。
        </p>
      </section>

      <section className="container section-block">
        <div className="filter-row">
          <span className="filter active">All</span>
          <span className="filter">Branding</span>
          <span className="filter">UX/UI</span>
          <span className="filter">Strategy</span>
        </div>

        <div className="work-grid project-grid">
          {projectData.map((project) => (
            <Link key={project.slug} href={`/project/${project.slug}`} className="work-card project-card">
              <div className={`work-visual ${project.tone}`}>
                <span>{project.accent}</span>
              </div>
              <div className="work-meta">
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <small>{project.summary}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
