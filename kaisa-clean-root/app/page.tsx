
import Image from "next/image";

export default function Page() {
  return (
    <main className="page">
      <header className="header">
        <span className="logo">kaisa</span>
      </header>

      <section className="grid">
        <aside>
          <p className="kicker">01 · personal page</p>
          <h1>for kaisa</h1>
          <p className="body">
            minimal, quiet and made with care.
          </p>
        </aside>

        <section>
          <Image
            src="/media/main.jpg"
            alt="main"
            width={1200}
            height={1600}
            className="image"
          />
        </section>

        <aside>
          <p className="mono">no purchase. only love.</p>
        </aside>
      </section>
    </main>
  );
}
