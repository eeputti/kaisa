import Link from "next/link";
import { site } from "@/content/site";
import FunLayer from "@/app/components/FunLayer";

export default function Tapahtumat() {
  const events = [...site.timeline.events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main className="page">
      <FunLayer />

      <header className="header">
        <Link className="brand" href="/">
          <span className="dot" />
          <span>takaisin</span>
        </Link>
        <nav className="nav">
          <Link href="/muistot">muistot</Link>
          <Link href="/linkit">linkit</Link>
          <Link href="/lahja">lahja</Link>
        </nav>
      </header>

      <section className="section">
        <h1>{site.timeline.title}</h1>

        <div className="timeline">
          {events.map((e) => (
            <div className="timelineItem" key={`${e.date}-${e.title}`}>
              <div className="pill">{e.date}</div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>{e.title}</h3>
                <p className="muted">{e.desc}</p>
                {e.link ? (
                  <a className="link" href={e.link} target="_blank" rel="noreferrer">
                    avaa linkki
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
