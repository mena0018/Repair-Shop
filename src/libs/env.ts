import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().min(1),
    DATABASE_URL: z.string().url(),

    SENTRY_AUTH_TOKEN: z.string().min(1),

    KINDE_CLIENT_ID: z.string().min(1),
    KINDE_CLIENT_SECRET: z.string().min(1),

    KINDE_SITE_URL: z.string().min(1),
    KINDE_ISSUER_URL: z.string().url(),

    KINDE_POST_LOGOUT_REDIRECT_URL: z.string().url(),
    KINDE_POST_LOGIN_REDIRECT_URL: z.string().url(),

    KINDE_DOMAIN: z.string().url(),
    KINDE_MANAGEMENT_CLIENT_ID: z.string().min(1),
    KINDE_MANAGEMENT_CLIENT_SECRET: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
    NEXT_PUBLIC_KINDE_EMAIL: z.string(),
    NEXT_PUBLIC_KINDE_GMAIL: z.string(),
    NEXT_PUBLIC_KINDE_GITHUB: z.string()
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,

    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,

    KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
    KINDE_CLIENT_SECRET: process.env.KINDE_CLIENT_SECRET,

    KINDE_SITE_URL: process.env.KINDE_SITE_URL,
    KINDE_ISSUER_URL: process.env.KINDE_ISSUER_URL,

    KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
    KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL,

    KINDE_DOMAIN: process.env.KINDE_DOMAIN,
    KINDE_MANAGEMENT_CLIENT_ID: process.env.KINDE_MANAGEMENT_CLIENT_ID,
    KINDE_MANAGEMENT_CLIENT_SECRET: process.env.KINDE_MANAGEMENT_CLIENT_SECRET,

    NEXT_PUBLIC_KINDE_EMAIL: process.env.NEXT_PUBLIC_KINDE_EMAIL,
    NEXT_PUBLIC_KINDE_GMAIL: process.env.NEXT_PUBLIC_KINDE_GMAIL,
    NEXT_PUBLIC_KINDE_GITHUB: process.env.NEXT_PUBLIC_KINDE_GITHUB
  }
})
