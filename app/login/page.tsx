"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { site } from "@/content/site";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const from = useMemo(() => params.get("from") || "/", [params]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const r = await fetch("/api/auth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password, from }),
      });
      if (!r.ok) {
        setError("väärä salasana :(");
        return;
      }
      router.push(from);
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="centered">
      <div className="card loginCard">
        <div className="brand" style={{ marginBottom: 10 }}>
          <span className="dot" />
          <span>{site.meta.title}</span>
        </div>

        <h1 style={{ marginTop: 0 }}>salainen sisäänkäynti 🔐</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          tää sivu on vain yhdelle ihmiselle.
        </p>

        <form onSubmit={submit}>
          <label className="muted">salasana</label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="kirjoita salasana"
            autoFocus
          />
          <div className="row">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "hetki..." : "avaa"}
            </button>
            <span className="funHint">{site.fun.secretHint}</span>
          </div>
          {error ? <p className="error">{error}</p> : null}
          <p className="funHint" style={{ marginTop: 14 }}>
            aseta Verceliin env: <b>SITE_PASSWORD</b>
          </p>
        </form>
      </div>
    </div>
  );
}
