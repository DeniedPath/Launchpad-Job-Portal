import { DashboardLayout } from "@/components/dashboard-layout"
import { JobCard } from "@/components/job-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const students = [
  { id: "1", name: "Student 1" },
  { id: "2", name: "Student 2" },
  { id: "3", name: "Student 3" },
]

const jobs = [
  { id: "1", title: "Frontend Developer", company: "Tech Co" },
  { id: "2", title: "Backend Engineer", company: "Software Inc" },
  { id: "3", title: "Full Stack Developer", company: "Web Solutions" },
]

const applications = [
  { studentId: "1", jobId: "1", status: "applied" },
  { studentId: "1", jobId: "2", status: "interested" },
  { studentId: "2", jobId: "1", status: "interested" },
  { studentId: "2", jobId: "3", status: "rejected" },
  { studentId: "3", jobId: "2", status: "applied" },
  { studentId: "3", jobId: "3", status: "applied" },
]

export default function AdminDashboard() {
  return (
    <DashboardLayout isAdmin>
      <div className="container p-4 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid gap-6">
          <Tabs defaultValue="events">
            <TabsList className="mb-4">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {students.map((student) => (
                  <Card key={student.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        {jobs.map((job) => {
                          const application = applications.find(
                            (app) => app.studentId === student.id && app.jobId === job.id,
                          )

                          return application ? (
                            <JobCard
                              key={job.id}
                              id={job.id}
                              title={job.title}
                              company={job.company}
                              status={application.status as any}
                            />
                          ) : null
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>View and manage upcoming events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">March 2025</h3>
                      <div className="grid grid-cols-7 gap-2 mt-4">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                          <div key={i} className="text-center text-sm font-medium">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 31 }, (_, i) => (
                          <div key={i} className="text-center p-2 rounded-md hover:bg-accent cursor-pointer">
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}

