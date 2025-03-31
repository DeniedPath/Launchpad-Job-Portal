"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { JobCard, type JobStatus } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

interface Job {
  id: string
  title: string
  company: string
  status: JobStatus
}

// Sample data
const initialJobs: Job[] = [
  { id: "1", title: "Frontend Developer", company: "Tech Co", status: "applied" },
  { id: "2", title: "Backend Engineer", company: "Software Inc", status: "interested" },
  { id: "3", title: "Full Stack Developer", company: "Web Solutions", status: "applied" },
  { id: "4", title: "UI/UX Designer", company: "Design Studio", status: "interested" },
  { id: "5", title: "DevOps Engineer", company: "Cloud Systems", status: "rejected" },
  { id: "6", title: "Product Manager", company: "Product Co", status: "interested" },
]

export default function ApplicantDashboard() {
  const [jobs, setJobs] = useState(initialJobs)

  const getJobsByStatus = (status: JobStatus) => {
    return jobs.filter((job) => job.status === status)
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const { source, destination, draggableId } = result

    if (source.droppableId === destination.droppableId) return

    // Update the job status
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === draggableId ? { ...job, status: destination.droppableId as JobStatus } : job)),
    )
  }

  return (
    <DashboardLayout>
      <div className="container p-4 mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Job Dashboard</h1>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Applied</CardTitle>
              </CardHeader>
              <CardContent>
                <Droppable droppableId="applied">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3 min-h-[200px]">
                      {getJobsByStatus("applied").map((job, index) => (
                        <Draggable key={job.id} draggableId={job.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <JobCard
                                id={job.id}
                                title={job.title}
                                company={job.company}
                                status={job.status}
                                draggable
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Interested</CardTitle>
              </CardHeader>
              <CardContent>
                <Droppable droppableId="interested">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3 min-h-[200px]">
                      {getJobsByStatus("interested").map((job, index) => (
                        <Draggable key={job.id} draggableId={job.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <JobCard
                                id={job.id}
                                title={job.title}
                                company={job.company}
                                status={job.status}
                                draggable
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Rejected</CardTitle>
              </CardHeader>
              <CardContent>
                <Droppable droppableId="rejected">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3 min-h-[200px]">
                      {getJobsByStatus("rejected").map((job, index) => (
                        <Draggable key={job.id} draggableId={job.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <JobCard
                                id={job.id}
                                title={job.title}
                                company={job.company}
                                status={job.status}
                                draggable
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>
          </div>
        </DragDropContext>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Tech Co Interview</h3>
                    <p className="text-sm text-muted-foreground">April 5, 2025 • 10:00 AM</p>
                  </div>
                  <Button size="sm">Prepare</Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Software Inc Technical Test</h3>
                    <p className="text-sm text-muted-foreground">April 8, 2025 • 2:00 PM</p>
                  </div>
                  <Button size="sm">Start</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <JobCard id="7" title="Senior Frontend Developer" company="Enterprise Solutions" />
                <JobCard id="8" title="React Developer" company="App Factory" />
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    View More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

