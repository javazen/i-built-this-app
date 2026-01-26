"use server";

import { auth } from "@clerk/nextjs/server";
import { productSchema } from "./product-validations";

type FormState = {
  success: boolean;
  errors?: Record<string, string[]>
  message: string;
}

export const addProductAction = async (
  prevState: FormState, 
  formData: FormData
): Promise<FormState> => {
  console.log(formData);

  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        errors: {},
        message: "You must be signed in to submit a product!"
      }
    }

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
    const data = validatedData.data;



  } catch (error) {
    console.error(error);
    const errors = error as Record<string, string[]>;
    return {
      success: false,
      errors: errors,
      message: "Failed to submit product!"
    }

  }

  return {
    success: true,
    errors: {},
    message: "Product submitted successfully!"
  }
}

/*
  console.log(formData.get('name'));

*/