import { z } from "zod";

export const UserZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
  role: z.string().default("user"),
  location: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  portfolio: z.string().optional(),
});
