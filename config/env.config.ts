import { z } from "zod";
import Constants from "expo-constants";

const envSchema = z.object({
  AWS_S3_BUCKET_NAME: z.string().min(1),
  AWS_REGION: z.string().min(1),
  AWS_ACCESS_KEY: z.string().min(1),
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
});

export const env = envSchema.parse(Constants.expoConfig?.extra);
