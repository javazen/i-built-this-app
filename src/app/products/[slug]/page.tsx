"use cache";
import { getFeaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    slug: product.slug.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Product {slug}</h1>
    </div>
  );
}
