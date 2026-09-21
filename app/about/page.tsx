import Link from "next/link"

export default function About() {
  return <main><nav className="nav container"><Link className="brand" href="/">AS<span>F</span></Link><div className="nav-links"><Link href="/project">项目</Link><Link href="/about">关于我</Link><Link href="/contact">联系</Link></div><Link className="nav-cta" href="/contact">开始合作 <span>↗</span></Link></nav><section className="page container"><div className="page-head"><div><p className="eyebrow">/ 03　认识一下</p><h1>关于我<span>.</span></h1></div></div><div className="about-grid"><p className="about-copy">我是一个独立设计师，专注于把<span>清晰的策略</span>变成有温度的视觉和数字体验。<br /><br />我相信每个品牌都有自己的声音，设计的工作，是帮它被听见。</p><div className="about-list"><div><b>专长</b><span>品牌 / 视觉 / 产品</span></div><div><b>工作方式</b><span>独立 / 灵活 / 共创</span></div><div><b>所在</b><span>上海，中国</span></div><div><b>合作语言</b><span>中文 / English</span></div></div></div></section></main>
}
