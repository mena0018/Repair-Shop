import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { File, HomeIcon, LogOut, UsersRound } from "lucide-react"
import Link from "next/link"

import { NavButton } from "@/components/nav-button"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/styles/theme/theme-toggle"

export const Header = () => {
  return (
    <header className="animate-slide bg-background sticky top-0 z-20 h-12 border-b p-2">
      <div className="flex h-8 w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <NavButton label="Home" href="/" icon={HomeIcon} />
          <Link href="/home" title="Home" className="ml-0 flex items-center justify-center gap-2">
            <h1 className="hidden text-xl font-bold sm:block">Computer Repair Shop</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton label="Tickets" href="/tickets" icon={File} />
          <NavButton label="Customers" href="/customers" icon={UsersRound} />
          <ThemeToggle />

          <Button
            asChild
            size="icon"
            title="logout"
            variant="ghost"
            aria-label="logout"
            className="rounded-full"
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
