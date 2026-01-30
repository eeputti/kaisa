import Link from "next/link";
import { site } from "@/content/site";

export default function Linkit() {
  return (
    <main className="page">
      <header className="header">
        <Link className="brand" href="/">
          <span className="dot" />
          <span>takaisin</span>
        </Link>
        <nav className="nav">
          <Link href="/muistot">muistot</Link>
          <Link href="/tapahtumat">tapahtumat</Link>
          <Link href="/lahja">lahja</Link>
          <Link href="/salainen">salainen</Link>
        </nav>
      </header>

      <section className="section">
        <h1>{site.links.title}</h1>
        <div className="stack">
          {site.links.items.map((i) => (
            <a
              key={i.href}
              className="card linkCard"
              href={i.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{i.label}</span>
              <span className="muted">→</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
