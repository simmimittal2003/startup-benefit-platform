import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl font-bold leading-tight">
          Startup benefits <br />
          <span className="text-indigo-400">without startup costs</span>
        </h1>

        <p className="text-zinc-400 text-lg">
          Discover exclusive SaaS deals curated for founders and early-stage teams.
        </p>

        <Link
          href="/deals"
          className="inline-block bg-white text-black px-8 py-4 rounded-xl font-medium"
        >
          Explore Deals →
        </Link>
      </div>
    </main>
  );
}
