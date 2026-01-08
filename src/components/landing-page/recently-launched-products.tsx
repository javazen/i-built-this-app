import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

/*
const recentlyLaunchedProductsData = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ["SaaS", "Pricing", "Global"],
    votes: 619,
    isFeatured: true,
  },
  {
    id: 2,
    name: "New Course",
    description: "Learn to build production-ready full-stack apps with Next.js",
    tags: ["Next.js", "Full-stack", "Course"],
    votes: 124,
    isFeatured: false,
  },
] */
const recentlyLaunchedProductsData = [
]


export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="The most recently launched products on the platform"
        />
        {recentlyLaunchedProductsData.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProductsData.map((product) => (
              <ProductCard key={product.id} product={product} /> 
            ))}
          </div>
        ) : (
          <EmptyState 
          icon={CalendarIcon}
          message="No products launched in the last week, check back soon for new launches."/>
        )}
      </div>
    </section>
  );
}