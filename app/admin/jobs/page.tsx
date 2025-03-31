import { DashboardLayout } from "@/components/dashboard-layout"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample data
const jobs = [
  { id: "1", title: "Frontend Developer", company: "Tech Co", location: "Remote", type: "Full-time" },
  { id: "2", title: "Backend Engineer", company: "Software Inc", location: "New York", type: "Full-time" },
  { id: "3", title: "Full Stack Developer", company: "Web Solutions", location: "San Francisco", type: "Contract" },
  { id: "4", title: "UI/UX Designer", company: "Design Studio", location: "Remote", type: "Part-time" },
  { id: "5", title: "DevOps Engineer", company: "Cloud Systems", location: "Seattle", type: "Full-time" },
  { id: "6", title: "Product Manager", company: "Product Co", location: "Boston", type: "Full-time" },
]

export default function JobListings() {
  return (
    <DashboardLayout isAdmin>
      <div className="container p-4 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Job Listings</h1>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs..." className="pl-8" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <Button variant="outline">Location</Button>
                <Button variant="outline">Job Type</Button>
                <Button variant="outline">Experience</Button>
                <Button variant="outline">Salary Range</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Available Positions</h2>
              {jobs.slice(0, 3).map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  company={`${job.company} • ${job.location} • ${job.type}`}
                />
              ))}
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Job Details</h2>
              <Card className="h-[calc(100%-2rem)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                  <p className="text-muted-foreground mb-4">Tech Co • Remote • Full-time</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Description</h4>
                      <p className="text-sm">
                        We are looking for a skilled Frontend Developer to join our team. You will be responsible for
                        building user interfaces and implementing designs.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Requirements</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>3+ years of experience with React</li>
                        <li>Strong knowledge of HTML, CSS, and JavaScript</li>
                        <li>Experience with responsive design</li>
                        <li>Familiarity with modern frontend tools</li>
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full">View Applicants</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

