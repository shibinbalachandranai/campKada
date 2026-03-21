"use client";

import { useEffect, useState } from "react";

export default function SuccessToast({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-forest px-5 py-4 text-white shadow-lg"
    >
      <svg
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
