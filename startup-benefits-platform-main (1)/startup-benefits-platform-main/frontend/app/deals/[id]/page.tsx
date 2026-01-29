"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchDealById, claimDeal } from "@/lib/api";
import toast from "react-hot-toast";

export default function DealDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [deal, setDeal] = useState<any>(null);

  useEffect(() => {
    fetchDealById(id as string).then(setDeal);
  }, [id]);

  if (!deal) return <p className="p-10">Loading...</p>;

  async function handleClaim() {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");

    try {
      await claimDeal(deal._id, token);
      toast.success("Deal claimed successfully");
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <h1 className="text-4xl font-bold">{deal.title}</h1>
      <p className="text-zinc-400">{deal.description}</p>

      <button
        onClick={handleClaim}
        disabled={deal.isLocked}
        className={`w-full py-4 rounded-xl font-medium ${
          deal.isLocked
            ? "bg-zinc-700 cursor-not-allowed"
            : "bg-white text-black"
        }`}
      >
        {deal.isLocked ? "Verification Required" : "Claim Deal"}
      </button>
    </main>
  );
}
