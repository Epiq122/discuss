"use server";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z]/, {
      message: "Must start with lowercase letters without spaces",
    }),
  description: z.string().min(10),
});

export const createTopic = async (formState: number, formData: FormData) => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    throw new Error(result.error.message);
  }
  return 10;
};
