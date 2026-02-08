"use server";

import { z } from "zod";
import { db } from "@/db";
import { products } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validations";
import { FormState } from "@/types";
import { eq, sql } from "drizzle-orm";
import { refresh, revalidatePath } from "next/cache";


export const addProductAction = async (
  prevState: FormState, 
  formData: FormData
): Promise<FormState> => {
  // console.log(formData);

  try {
    const { userId, orgId } = await auth();
    if (!userId) {
      return {
        success: false,
        errors: {},
        message: "You must be signed in to submit a product!"
      }
    }

    if (!orgId) {
      return {
        success: false,
        errors: {},
        message: "You must be a member of an organization to submit a product!"
      }
    }

    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";

    // validate the data
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedData = productSchema.safeParse(rawFormData);
    if (!validatedData.success) {
      console.log(validatedData.error.flatten());
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Invalid data"
      }
    } 
    const {name, slug, description, tagline, websiteUrl, tags} = validatedData.data;
    
    const tagsArray = tags 
      ? tags.filter((tag) => typeof tag === 'string')
      : [];

    await db
    .insert(products)
    .values({
      name, 
      slug, 
      description, 
      tagline, 
      websiteUrl, 
      tags: tagsArray,
      status: "pending", 
      submittedBy: userEmail, 
      organizationId: orgId || "",
      userId
    })

    refresh();

    return {
      success: true,
      errors: {},
      message: "Product submitted successfully! It will be reviewed soon."
    }

  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Validation failed, please check form inputs"
      }
    } 

    const errors = error as Record<string, string[]>;
    return {
      success: false,
      errors: errors,
      message: "Failed to submit product!"
    }
  }
}

export const upvoteProductAction = async (
  productId: number
) => {
  try {
    const { userId, orgId } = await auth();
    if (!userId) {
      console.log("not signed in");
      return {
        success: false,
        errors: {},
        message: "You must be signed in to vote!"
      }
    }

    if (!orgId) {
      console.log("not part of an organization");
      return {
        success: false,
        errors: {},
        message: "You must be a member of an organization to vote!"
      }
    }

    await db
    .update(products)
    .set({
      voteCount: sql`GREATEST(0, vote_count + 1)`,
    })
    .where( eq(products.id, productId) );

    revalidatePath("/");

    return {
      success: true,
      message: "Product upvoted!",
    }

  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to upvote product!"
    }
  }
};

export const downvoteProductAction = async (
  productId: number
) => {
  try {
    const { userId, orgId } = await auth();
    if (!userId) {
      console.log("not signed in");
      return {
        success: false,
        errors: {},
        message: "You must be signed in to vote!"
      }
    }

    if (!orgId) {
      console.log("not part of an organization");
      return {
        success: false,
        errors: {},
        message: "You must be a member of an organization to vote!"
      }
    }

    await db
    .update(products)
    .set({
      voteCount: sql`GREATEST(0, vote_count - 1)`,
    })
    .where( eq(products.id, productId) );

    revalidatePath("/");

    return {
      success: true,
      message: "Product downvoted!",
    }

  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to downvote product!"
    }
  }
};

/*
  console.log(formData.get('name'));

*/