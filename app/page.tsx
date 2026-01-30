import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import FunLayer from "@/app/components/FunLayer";

export default function Home() {
  return (
    <main className="page">
      <FunLayer />

      <header className="header">
        <div className="brand">
          <span className="dot" />
          <span>{site.meta.title}</span>
        </div>
        <nav className="nav">
          <Link href="/muistot">muistot</Link>
          <Link href="/tapahtumat">tapahtumat</Link>
          <Link href="/linkit">linkit</Link>
          <Link href="/lahja">lahja</Link>
          <Link href="/logout" style={{ opacity: 0.7 }}>logout</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <h1>{site.hero.headline}</h1>
          <p className="muted">{site.hero.subheadline}</p>
          <div className="heroCtas">
            <Link className="btn" href="/muistot">avaa muistot</Link>
            <Link className="btn ghost" href="/lahja">avaa lahja</Link>
          </div>
          <p className="funHint" style={{ marginTop: 14 }}>
            {site.fun.clickHint} · {site.fun.secretHint}
          </p>
        </div>

        <div className="heroMedia">
          <div className="card">
            <Image
              src={site.hero.gifPath}
              alt="hero gif"
              width={720}
              height={480}
              priority
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>{site.about.title}</h2>
        <ul className="list">
          {site.about.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="muted">{site.about.note}</p>
      </section>

      <footer className="footer">
        <span className="muted">{site.footer.text}</span>
        <span className="funHint">💛</span>
      </footer>
    </main>
  );
}
