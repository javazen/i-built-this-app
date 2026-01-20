import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, 'approved'))
    .orderBy(desc(products.voteCount));  // .limit(3)

  // console.log(productsData);
  return productsData;
}

export async function getAllProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, 'approved'))
    .orderBy(desc(products.voteCount));

  // console.log(productsData);
  return productsData;
}

export async function getRecentlyLaunchedProducts() {
  await connection();
  const productsData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  // const recentProductsData = productsData;
  const recentProductsData = productsData.filter((product) => 
    product.createdAt && 
    new Date(product.createdAt.toISOString()) >= oneWeekAgo
  )

  // console.log(recentProductsData);
  return recentProductsData;
}
