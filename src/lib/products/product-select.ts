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