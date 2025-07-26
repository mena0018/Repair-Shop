import Link from "next/link"

import { errorMetadata } from "@/lib/site-config"

export const metadata = errorMetadata

export default function NotFoundPage() {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="pb-60 text-center">
        <h1 className="text-primary text-9xl font-black">404</h1>
        <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
        <p className="mt-4">We can't find that page.</p>
        <Link
          href="/home"
          className="dark:text-foreground mt-6 inline-block rounded bg-indigo-800 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-900 focus:ring-3 focus:outline-hidden"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
