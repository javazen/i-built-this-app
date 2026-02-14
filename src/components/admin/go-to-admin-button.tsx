"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function GoToAdminButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin");

    // close Clerk modal (same as pressing Escape)
    requestAnimationFrame(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape" })
      );
    });
  };

  return (
    <Button
      size="default"
      className="w-full justify-start"
      onClick={handleClick}
    >
      Go to Admin Panel
    </Button>
  );
}
