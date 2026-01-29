"use client";

import { useEffect, useState } from "react";
import { fetchDeals } from "@/lib/api";
import DealCard from "@/components/DealCard";

export default function DealsPage() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetchDeals().then(setDeals);
  }, []);

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Available Deals</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {deals.map((deal: any) => (
          <DealCard key={deal._id} deal={deal} />
        ))}
      </div>
    </main>
  );
}
