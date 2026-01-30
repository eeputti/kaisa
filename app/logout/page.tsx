"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      await fetch("/api/auth", { method: "DELETE" });
      router.push("/login");
      router.refresh();
    })();
  }, [router]);

  return <div className="centered"><div className="muted">kirjaudutaan ulos...</div></div>;
}
