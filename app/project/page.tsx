import Link from "next/link"

export const revalidate = 60

const projects = [
  { title: "Morrow Coffee", type: "品牌身份 / 包装系统", slug: "morrow" },
  { title: "Nori Objects", type: "数字商业体验", slug: "nori" },
  { title: "Common Ground", type: "空间品牌 / 编辑设计", slug: "common-ground" },
  { title: "Lumen Studio", type: "数字产品 / 品牌网站", slug: "lumen" },
]

export default function ProjectPage() {
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
          <p className="eyebrow">/ 02 — 作品</p>
          <h1>项目.</h1>
        </div>
        <p className="page-intro">
          为有长期价值的品牌和产品，打造更清晰、更温暖、更具辨识度的表达与体验。
        </p>
      </section>

      <section className="container section-block">
        <div className="filter-row">
          <span className="filter active">全部</span>
          <span className="filter">品牌</span>
          <span className="filter">体验</span>
          <span className="filter">策略</span>
        </div>

        <div className="work-grid project-grid">
          {projects.map((project) => (
            <Link key={project.slug} href={`/project/${project.slug}`} className="work-card project-card">
              <div className={`work-visual ${project.slug === "morrow" ? "amber" : project.slug === "nori" ? "dark" : project.slug === "common-ground" ? "sky" : "rose"}`}>
                <span>{project.title.slice(0, 1)}</span>
              </div>
              <div className="work-meta">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
