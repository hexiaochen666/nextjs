import Link from "next/link"

export default function Contact() {
  return <main><nav className="nav container"><Link className="brand" href="/">AS<span>F</span></Link><div className="nav-links"><Link href="/project">项目</Link><Link href="/about">关于我</Link><Link href="/contact">联系</Link></div><Link className="nav-cta" href="/contact">开始合作 <span>↗</span></Link></nav><section className="page container"><div className="page-head"><div><p className="eyebrow">/ 04　让我们聊聊</p><h1>联系<span>.</span></h1></div></div><div className="contact-box"><h2>有一个想法？<br /><em>我很想听听。</em></h2><p>无论你正在启动一个新品牌，还是想让现有的产品焕发新生，都欢迎发来你的故事和计划。</p><a className="email" href="mailto:hello@asf.design">hello@asf.design　↗</a></div></section></main>
}
