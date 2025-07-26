import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <main className="mx-auto flex h-dvh max-w-5xl flex-col justify-center gap-4 text-center">
      <Link href="/home">
        <Card className="mx-auto w-4/5 sm:max-w-96">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Dan's Computer Repair Shop</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 text-lg">
            <address className="flex flex-col">
              <p>555 Gateway Lane </p>
              <p>Kansas City, KS 55555</p>
            </address>
            <p>Open Daily: 9am to 5pm</p>
            <p className="hover:underline">555-555-5555</p>
          </CardContent>
        </Card>
      </Link>

      <Button asChild className="mx-auto w-fit" variant="secondary">
        <Link href="/login">View more</Link>
      </Button>
    </main>
  )
}
