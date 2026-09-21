import Link from "next/link"

const projects: Record<string, { name: string; type: string; year: string; tone: string; description: string; challenge: string; solution: string }> = {
  morrow: {
    name: "Morrow Coffee",
    type: "Brand identity / Packaging",
    year: "2024",
    tone: "amber",
    description: "为一家精品咖啡品牌建立更有温度、更具辨识度的品牌系统。",
    challenge: "Morrow 需要在拥挤的精品咖啡市场中建立自己的语气，同时保持品牌的手作感与现代感。",
    solution: "我们以晨光、咖啡豆和日常仪式为灵感，建立了完整的标志、包装、空间物料和数字触点。",
  },
  nori: {
    name: "Nori Objects",
    type: "E-commerce experience",
    year: "2024",
    tone: "dark",
    description: "用更清晰的数字体验，让设计家居产品更自然地被发现和购买。",
    challenge: "原有电商页面信息层级混乱，产品价值无法被快速理解，影响了用户的购买决策。",
    solution: "重新组织产品叙事、筛选和购买路径，让材质、细节与使用场景成为体验的核心。",
  },
  "common-ground": {
    name: "Common Ground",
    type: "Spatial identity / Editorial",
    year: "2023",
    tone: "sky",
    description: "为共享空间建立兼具文化属性与社区温度的品牌系统。",
    challenge: "空间需要同时服务创作者、访客和社区成员，品牌必须开放，却不能失去自己的个性。",
    solution: "通过灵活的字标、模块化网格和一套可持续扩展的出版物系统，建立统一而有弹性的表达。",
  },
  lumen: {
    name: "Lumen Studio",
    type: "Digital product / Web design",
    year: "2023",
    tone: "rose",
    description: "为创意工作室打造一套更大胆、更有传播力的线上体验。",
    challenge: "Lumen 的作品很有个性，但原网站缺少清晰的项目结构，也无法体现团队的工作方式。",
    solution: "设计以作品为中心的浏览体验，结合动态排版、案例叙事和更明确的合作入口。",
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug] ?? projects.morrow

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

      <section className="detail-shell container">
        <Link href="/project" className="text-link">← Back to projects</Link>
        <div className="detail-hero detail-section">
          <div className="detail-summary">
            <p className="eyebrow">/ Selected project</p>
            <h1>{project.name}</h1>
            <p className="page-intro">{project.description}</p>
            <div className="detail-list">
              <div className="detail-item"><strong>Services</strong><span>{project.type}</span></div>
              <div className="detail-item"><strong>Year</strong><span>{project.year}</span></div>
              <div className="detail-item"><strong>Studio</strong><span>ASF / Shanghai</span></div>
            </div>
          </div>
          <div className={`detail-visual ${project.tone}`} aria-label={`${project.name} visual`}>
            <span>{project.name.slice(0, 1)}</span>
          </div>
        </div>

        <div className="detail-grid detail-section">
          <article className="detail-panel"><p className="eyebrow">01 — The challenge</p><h3>让问题变得清晰</h3><p>{project.challenge}</p></article>
          <article className="detail-panel"><p className="eyebrow">02 — The approach</p><h3>从策略走向表达</h3><p>{project.solution}</p></article>
        </div>
      </section>
    </main>
  )
}
