"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type JobStatus = "applied" | "interested" | "rejected" | null

interface JobCardProps {
  id: string
  title: string
  company: string
  status?: JobStatus
  draggable?: boolean
  onClick?: () => void
}

export function JobCard({ id, title, company, status, draggable = false, onClick }: JobCardProps) {
  const statusColors = {
    applied: "bg-green-500 hover:bg-green-600",
    interested: "bg-blue-500 hover:bg-blue-600",
    rejected: "bg-pink-500 hover:bg-pink-600",
  }

  return (
    <Card
      className={cn(
        "transition-all",
        status &&
          `border-l-4 border-l-${status === "applied" ? "green" : status === "interested" ? "blue" : "pink"}-500`,
        draggable && "cursor-grab active:cursor-grabbing",
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base">{title}</CardTitle>
          {status && <Badge className={statusColors[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-muted-foreground">Job ID: {id}</p>
      </CardFooter>
    </Card>
  )
}

