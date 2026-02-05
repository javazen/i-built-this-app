"use client";
import FormField from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";

const initialState: FormState = {
  success: false,
  errors: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(addProductAction, initialState);

  const { errors, message, success } = state;
  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div className={cn(
          "p-4 rounded-lg border",
          success
            ? "bg-primary/10 border-primary text-primary"
            : "bg-destructive/10 border-destructive text-destructive"
        )}
        >
          {message}
        </div>
      )}
      <FormField 
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error={getFieldErrors("name")}
      />
      <FormField 
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        error={getFieldErrors("slug")}
        helperText="URL-friendly version of your product name"
      />
      <FormField 
        label="Description"
        name="description"
        id="description"
        placeholder="Detailed description of your product - tell us more about it"
        required
        onChange={() => {}}
        error={getFieldErrors("description")}
        textarea
      />
      <FormField 
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="Brief catchy tagline for the product"
        required
        onChange={() => {}}
        error={getFieldErrors("tagline")}
        helperText="URL-friendly version of your product name"
      />
      <FormField 
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://www.yourproduct.com"
        required
        onChange={() => {}}
        error={getFieldErrors("websiteUrl")}
        helperText="Enter your product's website or landing page"
      />
      <FormField 
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, SaaS, Productivity"
        required
        onChange={() => {}}
        error={getFieldErrors("tags")}
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
*/