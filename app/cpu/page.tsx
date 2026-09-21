'use client'

import { useState } from "react"

function runCpuIntensiveTask(size: number) {
  const start = performance.now()
  let total = 0
  let value = 0

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < 1200; j++) {
      value = (value + i * 17 + j * 13) % 9973
      total += Math.sin(value) * Math.cos(value + i)
    }
  }

  const duration = performance.now() - start
  return { total: Number(total.toFixed(4)), duration }
}

export default function CpuPage() {
  const [iterations, setIterations] = useState(18)
  const [status, setStatus] = useState("空闲")
  const [result, setResult] = useState<number | null>(null)
  const [duration, setDuration] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)

  const handleRun = () => {
    if (busy) return

    setBusy(true)
    setStatus("正在消耗 CPU…")
    setResult(null)
    setDuration(null)

    const timer = window.setTimeout(() => {
      const output = runCpuIntensiveTask(iterations)
      setResult(output.total)
      setDuration(output.duration)
      setStatus("完成")
      setBusy(false)
    }, 10)

    return () => window.clearTimeout(timer)
  }

  return (
    <main className="page-shell">
      <header className="topbar container">
        <a href="/" className="brand-mark">AS<span>F</span></a>
        <nav className="nav-links" aria-label="主导航">
          <a href="/project">项目</a>
          <a href="/services">服务</a>
          <a href="/process">流程</a>
          <a href="/journal">观察</a>
          <a href="/about">关于</a>
          <a href="/contact">联系</a>
        </nav>
        <a href="/contact" className="button button-small button-light">开始项目</a>
      </header>

      <section className="page-header container section-block">
        <div>
          <p className="eyebrow">/ 05 — 压测</p>
          <h1>CPU 压测.</h1>
        </div>
        <p className="page-intro">
          这是一个故意消耗 CPU 的演示页，用于测试前端卡顿、浏览器负载与占用性能。
        </p>
      </section>

      <section className="container section-block">
        <div className="cpu-shell">
          <div className="cpu-card">
            <h3>CPU 压力测试</h3>
            <p>
              通过持续计算和循环运算来制造算力占用，适合验证程序在高负载下的表现。
            </p>

            <div className="cpu-controls">
              <label htmlFor="iterations">循环强度</label>
              <input
                id="iterations"
                type="range"
                min="8"
                max="40"
                step="1"
                value={iterations}
                onChange={(event) => setIterations(Number(event.target.value))}
                disabled={busy}
              />
              <div className="cpu-meta">
                <span>{iterations}x</span>
                <span>{busy ? "运行中" : status}</span>
              </div>
            </div>

            <button className="button button-primary" onClick={handleRun} disabled={busy}>
              {busy ? "执行中..." : "开始消耗 CPU"}
            </button>
          </div>

          <div className="cpu-card cpu-result">
            <h3>结果</h3>
            <div className="result-row">
              <span>状态</span>
              <strong>{status}</strong>
            </div>
            <div className="result-row">
              <span>结果值</span>
              <strong>{result !== null ? result.toFixed(2) : "--"}</strong>
            </div>
            <div className="result-row">
              <span>耗时</span>
              <strong>{duration !== null ? `${duration.toFixed(1)} ms` : "--"}</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
