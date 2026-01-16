"use cache";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featuredProductsData = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description: "A toolkit for creating parity products",
//     tags: ["SaaS", "Pricing", "Global"],
//     votes: 619,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "New Course",
//     description: "Learn to build production-ready full-stack apps with Next.js",
//     tags: ["Next.js", "Full-stack", "Course"],
//     votes: 124,
//     isFeatured: false,
//   },
// ]
/*
  {
    id: 2,
    name: 'TaskFlow Pro',
    slug: 'taskflow-pro',
    tagline: 'Manage projects like never before',
    description: "Streamline your team's workflow with intelligent task management, automated notifications, and real-time collaboration features.",
    websiteUrl: 'https://taskflowpro.example.com',
    tags: [ 'Productivity', 'SaaS' ],
    voteCount: 87,
    createdAt: 2024-01-18T00:00:00.000Z,
    approvedAt: 2024-01-19T00:00:00.000Z,
    status: 'approved',
    submittedBy: 'mike@example.com',
    userId: null,
    organizationId: null
  },

*/

export default async function FeaturedProducts() {
  const featuredProductsData = await getFeaturedProducts();
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
