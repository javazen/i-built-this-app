import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";

const featuredProductsData = [
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
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button
            asChild
            variant='outline'
            className="hidden sm:flex"
          >
            <Link href='/explore'>
              <ArrowUpRightIcon className="size-4" />
              View All
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProductsData.map((product) => (
            <ProductCard key={product.id} product={product} /> 
          ))}
        </div>
      </div>
    </section>
  );
}
