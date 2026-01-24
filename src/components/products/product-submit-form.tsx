"use client";
import FormField from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";

const initialState = {
  success: false,
  error: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(addProductAction, initialState);

  // console.log(state);

  return (
    <form className="space-y-6" action={formAction}>
      <FormField 
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error=""
      />
      <FormField 
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        error=""
        helperText="URL-friendly version of your product name"
      />
      <FormField 
        label="Description"
        name="description"
        id="description"
        placeholder="Detailed description of your product - tell us more about it"
        required
        onChange={() => {}}
        error=""
        textArea={true}
      />
      <FormField 
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="Brief catchy tagline for the product"
        required
        onChange={() => {}}
        error=""
        helperText="URL-friendly version of your product name"
      />
      <FormField 
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://www.yourproduct.com"
        required
        onChange={() => {}}
        error=""
        helperText="Enter your product's website or landing page"
      />
      <FormField 
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, SaaS, Productivity"
        required
        onChange={() => {}}
        error=""
        helperText="Comma-separated tags"
      />
      <Button type="submit" size="lg" className="w-full">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}

/*
      {isPending ? (
        <p>Loading...</p>
      ) : (
          <SparklesIcon className="size-4" />
          Submit Product
      )}
*/