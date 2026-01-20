import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProductsData = await getRecentlyLaunchedProducts();
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