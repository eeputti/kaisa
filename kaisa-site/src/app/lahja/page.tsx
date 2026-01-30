"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/content/site";

export default function Lahja() {
  const [open, setOpen] = useState(false);

  const confetti = useMemo(() => {
    // super kevyt "confetti": pelkkä emoji-rivi kun avataan
    return open ? "✨💛🎁✨💛🎁✨💛🎁✨" : "";
  }, [open]);

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
          <Link href="/linkit">linkit</Link>
          <Link href="/salainen">salainen</Link>
        </nav>
      </header>

      <section className="section">
        <h1>{site.gift.title}</h1>
        <p className="muted">{site.gift.hint}</p>

        {!open ? (
          <button className="btn" onClick={() => setOpen(true)}>
            avaa 🎁
          </button>
        ) : (
          <div className="stack">
            <div className="pill">{confetti}</div>
            <div className="card">
              <h2>{site.gift.revealTitle}</h2>
              <p className="muted">{site.gift.revealText}</p>

              {site.gift.revealLinks?.length ? (
                <div className="stack">
                  {site.gift.revealLinks.map((l) => (
                    <a
                      key={l.href}
                      className="link"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
