import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main className="page">
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
          <Link href="/salainen">salainen</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <h1>{site.hero.headline}</h1>
          <p className="muted">{site.hero.subheadline}</p>

          <div className="heroCtas">
            <Link className="btn" href="/muistot">
              avaa muistot
            </Link>
            <Link className="btn ghost" href="/lahja">
              avaa lahja
            </Link>
          </div>
        </div>

        <div className="heroMedia">
          <div className="card">
            <Image
              src={site.hero.gifPath}
              alt="hero gif"
              width={720}
              height={480}
              priority
              style={{ width: "100%", height: "auto" }}
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
      </footer>
    </main>
  );
}
