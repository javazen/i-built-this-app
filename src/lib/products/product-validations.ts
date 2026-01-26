import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, {message: "Name must be at least 3 characters."})
    .max(120, {message: "Name must be less than 120 characters."}),
  slug: z
    .string()
    .min(3, {message: "Name must be at least 3 characters."})
    .max(140, {message: "Name must be less than 140 characters."})
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Slug must be lowercase and contain only letters, numbers, and hyphens."}),
  description: z.string().optional(),
  tagline: z
    .string()
    .max(200, {message: "Name must be less than 200 characters."}),
  websiteUrl: z
    .string()
    .min(1, {message: "Website URL is required."}),
  tags: z
  .string()
  .min(1, {message: "Tags are required."})
  .transform((value) => value.split(",")
    .map((tag) => tag.trim().toLowerCase())),
})
