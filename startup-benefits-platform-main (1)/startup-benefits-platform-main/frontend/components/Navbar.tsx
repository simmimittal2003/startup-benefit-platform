"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, [pathname]); // 👈 re-check on every route change

  function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    router.push("/");
  }

  return (
    <nav className="border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold">
        StartupBenefits
      </Link>

      <div className="flex gap-6 items-center text-sm">
        <Link href="/deals">Deals</Link>

        {loggedIn ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button
              onClick={logout}
              className="text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="hover:text-indigo-400">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
