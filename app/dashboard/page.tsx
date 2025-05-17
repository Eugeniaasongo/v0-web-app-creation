"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, FileText, MessageSquare, User } from "lucide-react"

// Mock data for reported issues
const reportedIssues = [
  {
    id: "issue-1",
    title: "Land dispute with neighbor",
    category: "Land Dispute",
    status: "In Progress",
    date: "2023-05-10",
    lawyer: "Kwame Mensah",
  },
  {
    id: "issue-2",
    title: "Property inheritance issue",
    category: "Property Rights",
    status: "Pending",
    date: "2023-05-15",
    lawyer: null,
  },
]

// Mock data for consultations
const consultations = [
  {
    id: "consult-1",
    lawyer: "Abena Osei",
    date: "2023-05-20",
    time: "10:00 AM",
    status: "Scheduled",
  },
]

export default function DashboardPage() {
  return (
    <div className="container py-10 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Manage your reported issues and consultations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">2</h3>
            <p className="text-sm text-muted-foreground">Reported Issues</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">1</h3>
            <p className="text-sm text-muted-foreground">Consultations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">1</h3>
            <p className="text-sm text-muted-foreground">Lawyers Connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">5</h3>
            <p className="text-sm text-muted-foreground">Constitution Bookmarks</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="issues" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="issues">Reported Issues</TabsTrigger>
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
        </TabsList>
        <TabsContent value="issues">
          <Card>
            <CardHeader>
              <CardTitle>Your Reported Issues</CardTitle>
              <CardDescription>Track the status of your reported civil issues</CardDescription>
            </CardHeader>
            <CardContent>
              {reportedIssues.length > 0 ? (
                <div className="space-y-4">
                  {reportedIssues.map((issue) => (
                    <div
                      key={issue.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1 mb-2 md:mb-0">
                        <h3 className="font-medium">{issue.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span>{issue.category}</span>
                          <span>•</span>
                          <span>Reported on {issue.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-2 md:items-center">
                        <Badge variant={issue.status === "In Progress" ? "default" : "secondary"}>{issue.status}</Badge>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/issues/${issue.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You haven't reported any issues yet</p>
                  <Button asChild>
                    <Link href="/report-issue">Report an Issue</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                View All Issues
              </Button>
              <Button asChild size="sm">
                <Link href="/report-issue">Report New Issue</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="consultations">
          <Card>
            <CardHeader>
              <CardTitle>Your Consultations</CardTitle>
              <CardDescription>Manage your scheduled consultations with lawyers</CardDescription>
            </CardHeader>
            <CardContent>
              {consultations.length > 0 ? (
                <div className="space-y-4">
                  {consultations.map((consultation) => (
                    <div
                      key={consultation.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1 mb-2 md:mb-0">
                        <h3 className="font-medium">Consultation with {consultation.lawyer}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span>{consultation.date}</span>
                          <span>•</span>
                          <span>{consultation.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-2 md:items-center">
                        <Badge variant={consultation.status === "Scheduled" ? "default" : "secondary"}>
                          {consultation.status}
                        </Badge>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/consultations/${consultation.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You don't have any scheduled consultations</p>
                  <Button asChild>
                    <Link href="/lawyers">Find a Lawyer</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                View All Consultations
              </Button>
              <Button asChild size="sm">
                <Link href="/lawyers">Schedule Consultation</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
