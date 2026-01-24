"use server";

type FormState = {
  success: boolean;
  errors?: Record<string, string[]>
  message: string;
}

export const addProductAction = async (prevState: FormState, formData: FormData) => {
  console.log(formData);

  return {
    success: true,
    message: "Product submitted successfully!"
  }
}

/*
  console.log(formData.get('name'));

*/