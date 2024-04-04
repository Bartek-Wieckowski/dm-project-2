import { z } from 'zod';

const envVariables = z.object({
  NEXT_PUBLIC_USERNAME: z.string(),
});

export const processEnv = envVariables.parse(process.env);

declare global {
  namespace NodeJs {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
