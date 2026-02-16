import { Suspense } from "react";

export default function AdminLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  )
}
