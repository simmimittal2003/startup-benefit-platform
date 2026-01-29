"use client";

import { useEffect, useState } from "react";
import { fetchMyClaims } from "@/lib/api";

export default function Dashboard() {
  const [claims, setClaims] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchMyClaims(token).then(setClaims);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-6">
      <h1 className="text-4xl font-bold">Your Dashboard</h1>

      {claims.map((c) => (
        <div
          key={c._id}
          className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
        >
          <h3 className="font-semibold">{c.dealId.title}</h3>
          <p className="text-sm text-zinc-400">Status: {c.status}</p>
        </div>
      ))}
    </main>
  );
}
