"use client";
import FormField from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";

export default function ProductSubmitForm() {
  return (
    <form className="space-y-6">
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

      <Button size="lg" className="w-full">
        <SparklesIcon className="size-4" />
        Submit Product
      </Button>
    </form>
  );
}

/*
      <h1>Product Submit Form</h1>
*/