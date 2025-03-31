"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Briefcase, BarChart2, Users, Calendar, LogOut } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

interface DashboardNavProps {
  isAdmin?: boolean
}

export function DashboardNav({ isAdmin = false }: DashboardNavProps) {
  const pathname = usePathname()

  const baseUrl = isAdmin ? "/admin" : "/applicant"

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: `${baseUrl}/dashboard`,
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Jobs",
      href: `${baseUrl}/jobs`,
      icon: <Briefcase className="h-5 w-5" />,
    },
    ...(isAdmin
      ? [
          {
            title: "Analytics",
            href: `${baseUrl}/analytics`,
            icon: <BarChart2 className="h-5 w-5" />,
          },
          {
            title: "Community",
            href: `${baseUrl}/community`,
            icon: <Users className="h-5 w-5" />,
          },
        ]
      : [
          {
            title: "Events",
            href: `${baseUrl}/events`,
            icon: <Calendar className="h-5 w-5" />,
          },
        ]),
    {
      title: "Calendar",
      href: `${baseUrl}/calendar`,
      icon: <Calendar className="h-5 w-5" />,
    },
  ]

  return (
    <nav className="grid gap-2 p-4">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
            pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
      <div className="mt-auto pt-4">
        <Link href="/">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            Log Out
          </Button>
        </Link>
      </div>
    </nav>
  )
}

