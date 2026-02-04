"use client";

import dynamic from "next/dynamic";

const CustomUserButton = dynamic(
  () => import("./custom-user-button"),
  { ssr: false }
);

export default function HeaderAuth() {
  return (
    <div className="flex items-center gap-4">
      {/* other interactive nav stuff */}
      <CustomUserButton />
    </div>
  );
}
