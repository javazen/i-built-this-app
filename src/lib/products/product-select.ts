import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getFeaturedProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, 'approved'))
    .orderBy(desc(products.voteCount));  // .limit(3)

  // console.log(productsData);
  return productsData;
}

export async function getRecentlyLaunchedProducts() {
  const productsData = await getFeaturedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const recentProductsData = productsData.filter((product) => 
    product.createdAt && 
    new Date(product.createdAt.toISOString()) >= oneWeekAgo
  )

  // console.log(recentProductsData);
  return recentProductsData;
}
