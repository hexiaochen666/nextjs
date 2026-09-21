import Link from "next/link"

const projects = [
  { title: "Morrow Coffee", type: "Brand identity / Packaging", slug: "morrow" },
  { title: "Nori Objects", type: "E-commerce experience", slug: "nori" },
  { title: "Common Ground", type: "Spatial identity / Editorial", slug: "common-ground" },
  { title: "Lumen Studio", type: "Digital product / Web design", slug: "lumen" },
]

export default function ProjectPage() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <Link href="/" className="brand-mark">AS<span>F</span></Link>
        <nav className="nav-links" aria-label="Main navigation">
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
