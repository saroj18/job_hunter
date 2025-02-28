import { z } from "zod";

export const JobZodSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(10).max(255),
  location: z.string().min(3).max(255),
  type: z.string().min(3).max(255),
  salary: z.number().min(1),
  company: z.string().min(3).max(255),
  applyLink: z.string().url(),
});
