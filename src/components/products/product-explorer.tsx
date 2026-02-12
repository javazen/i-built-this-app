"use client";
import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/product-card";
import { ProductType } from "@/types";
import { useMemo, useState } from "react";

export default function ProductExplorer({
  products,
}: {
  products: ProductType[];
}) {
  const [sortBy, setSortBy] = useState<"recent" | "trending">("trending");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (searchQuery.length > 0) {
      return products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case "trending":
        return products.sort((a, b) => b.voteCount - a.voteCount);
      case "recent":
        return products.sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
      default:
        return products;
    }


    return products;
  }, [searchQuery, products, sortBy]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input 
            type="text"
            placeholder="Search for products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant={sortBy === "trending" ? "default" : "outline"} onClick={() => setSortBy("trending")}>
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>
          <Button variant={sortBy === "recent" ? "default" : "outline"} onClick={() => setSortBy("recent")}>
            <ClockIcon className="size-4" />
            Recent
          </Button>
        </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} products
        </p>
      </div>

        <div className="grid-wrapper">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

/*        {Array.from({ length:0 }).map((_, index) => (
            <ProductCard key={index} product={product} />
          ))}
*/