import { cn } from "@/lib/utils";

export default function StatsCard({all, pending, approved, rejected}: Readonly<{
  all: number;
  pending: number;
  approved: number;
  rejected: number;
}>) {
  const stats = [
    {
      label: "Total",
      value: all,
      color: "bg-primary/10",
    },
    {
      label: "Pending",
      value: pending,
      color: "bg-yellow-500/10",
    },
    {
      label: "Approved",
      value: approved,
      color: "bg-green-500/10",
    },
    {
      label: "Rejected",
      value: rejected,
      color: "bg-red-500/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn("status-badge-card", stat.color)}
        >
          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}