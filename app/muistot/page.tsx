import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import FunLayer from "@/app/components/FunLayer";

export default function Muistot() {
  return (
    <main className="page">
      <FunLayer />

      <header className="header">
        <Link className="brand" href="/">
          <span className="dot" />
          <span>takaisin</span>
        </Link>
        <nav className="nav">
          <Link href="/tapahtumat">tapahtumat</Link>
          <Link href="/linkit">linkit</Link>
          <Link href="/lahja">lahja</Link>
        </nav>
      </header>

      <section className="section">
        <h1>{site.gallery.title}</h1>
        <p className="muted">lisää/poista kuvia muokkaamalla content/site.ts</p>

        <div className="grid">
          {site.gallery.photos.map((p) => (
            <div className="card" key={p.src}>
              <Image
                src={p.src}
                alt={p.alt}
                width={1200}
                height={1200}
                style={{ width: "100%", height: "auto", borderRadius: 12 }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
