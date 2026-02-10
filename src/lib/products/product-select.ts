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

export async function getAllApprovedProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productsData;
}

export async function getAllProducts() {
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount));

  // console.log(productsData);
  return productsData;
}

export async function getRecentlyLaunchedProducts() {
  await connection();
  const productsData = await getAllApprovedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const recentProductsData = productsData.filter(
    (product) => product.createdAt && product.createdAt >= oneWeekAgo
  );

  // console.log(recentProductsData);
  return recentProductsData;
}

export async function getProductsBySlug(slug: string) {
  const product = await db.select().from(products)
    .where(eq(products.slug, slug));

  return product?.[0] ?? null;
}