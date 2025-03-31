import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
  isAdmin?: boolean
}

export function DashboardLayout({ children, isAdmin = false }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">{isAdmin ? "Admin Portal" : "Applicant Portal"}</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{isAdmin ? "Admin User" : "Applicant User"}</span>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r md:block">
          <DashboardNav isAdmin={isAdmin} />
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

