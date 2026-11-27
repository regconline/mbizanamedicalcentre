import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(150),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9 ()-]{9,20}$/, "Please enter a valid contact number"),
  subject: z.string().trim().min(3, "Please enter a subject").max(120),
  message: z.string().trim().min(10, "Please write a short message (at least 10 characters)").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy notice to continue" }) }),
  company: z.string().max(0).optional(), // honeypot — must stay empty
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
