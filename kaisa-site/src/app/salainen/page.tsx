"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const PASSWORD = "kaisa";
const EMOJIS = ["💛", "✨", "🪩", "🎉", "💫", "🫶", "🌈", "🍰"];

export default function Salainen() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [party, setParty] = useState(false);
  const [seed, setSeed] = useState(0);

  const sparkles = useMemo(() => {
    const items = Array.from({ length: 14 }, (_, i) => {
      const emoji = EMOJIS[(seed + i) % EMOJIS.length];
      return `${emoji}`;
    });
    return items.join(" ");
  }, [seed]);

  const handleUnlock = () => {
    if (input.trim().toLowerCase() === PASSWORD) {
      setUnlocked(true);
      setShaking(false);
    } else {
      setUnlocked(false);
      setShaking(true);
      window.setTimeout(() => setShaking(false), 320);
    }
  };

  const handleParty = () => {
    setParty((prev) => !prev);
    setSeed((prev) => prev + 3);
  };

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
          <Link href="/lahja">lahja</Link>
        </nav>
      </header>

      <section className="section">
        <h1>salainen sivu 🔐</h1>
        <p className="muted">
          tää on salainen nurkka. syötä salasana ja saat luvan hengailla täällä.
        </p>

        {!unlocked ? (
          <div className={`secretGate ${shaking ? "shake" : ""}`}>
            <input
              className="input"
              type="password"
              placeholder="salasana"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button className="btn" onClick={handleUnlock}>
              avaa ovi
            </button>
            <p className="muted">vinkki: salasana on sun nimi pienillä kirjaimilla.</p>
          </div>
        ) : (
          <div className="stack">
            <div className="pill pulseBadge">sisäänpääsy myönnetty 💛</div>

            <div className="partyZone">
              <div className="orbit">
                <span>{party ? "🪩" : "💛"}</span>
              </div>
              <h2>tässä on toimintaa & aktionia</h2>
              <p className="muted">
                paina nappia ja käynnistä hyper-hauska tunnelma (ei minkäänlaista
                takuuta vakavuudesta).
              </p>
              <button className="btn" onClick={handleParty}>
                {party ? "rauhoita" : "käynnistä bileet"}
              </button>

              <div className="sparkleRow" aria-live="polite">
                {party ? sparkles : "💤 ..."}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
