import Link from "next/link"

const projects = [
  { title: "Morrow Coffee", type: "品牌识别 / 2024", style: "orange", mark: "MORROW" },
  { title: "Nori Objects", type: "电商体验 / 2024", style: "dark", mark: "nori" },
  { title: "Common Ground", type: "空间与出版物 / 2023", style: "blue", mark: "COMMON" },
  { title: "Lumen Studio", type: "数字产品 / 2023", style: "pink", mark: "LUMEN" },
]

export default function Projects() {
  return <main><nav className="nav container"><Link className="brand" href="/">AS<span>F</span></Link><div className="nav-links"><Link href="/project">项目</Link><Link href="/about">关于我</Link><Link href="/contact">联系</Link></div><Link className="nav-cta" href="/contact">开始合作 <span>↗</span></Link></nav><section className="page container"><div className="page-head"><div><p className="eyebrow">/ 02　精选作品</p><h1>项目<span>.</span></h1></div><p className="page-lead">一些关于品牌、产品和人与人之间连接的尝试。</p></div><div className="project-grid">{projects.map(p => <article className="project-card" key={p.title}><div className={`project-visual ${p.style}`}><strong>{p.mark}</strong></div><h3>{p.title}</h3><p>{p.type}</p></article>)}</div></section></main>
}
