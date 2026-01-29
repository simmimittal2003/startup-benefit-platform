"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch {
      setError("Invalid email or password");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        {error && <p className="text-red-400">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg font-medium hover:opacity-90"
        >
          Login
        </button>

        <p className="text-sm text-zinc-400 text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </motion.form>
    </main>
  );
}
