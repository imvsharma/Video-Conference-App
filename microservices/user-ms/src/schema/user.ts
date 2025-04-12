import { z } from "zod";

export const userCreationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string()
})


