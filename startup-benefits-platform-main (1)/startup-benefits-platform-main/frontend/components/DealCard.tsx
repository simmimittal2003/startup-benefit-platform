"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function DealCard({ deal }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative rounded-xl p-6 border border-zinc-800 bg-zinc-900 ${
        deal.isLocked ? "opacity-60" : ""
      }`}
    >
      {/* Content layer */}
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-semibold mb-2">
          {deal.title}
        </h3>

        <p className="text-sm text-zinc-400 mb-4">
          {deal.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500">
            {deal.partnerName}
          </span>

          {deal.isLocked ? (
            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Locked
            </span>
          ) : (
            <Link
              href={`/deals/${deal._id}`}
              className="text-green-400 text-sm hover:underline"
            >
              View →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
