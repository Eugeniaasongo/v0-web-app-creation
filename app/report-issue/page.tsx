"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mic, Upload } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportIssuePage() {
  const [isRecording, setIsRecording] = useState(false)

  return (
    <div className="container py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Report a Civil Issue</h1>
          <p className="mt-2 text-muted-foreground">Submit your civil legal issue for assistance and support</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Issue Details</CardTitle>
            <CardDescription>Provide information about your civil legal issue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="text">Text Report</TabsTrigger>
                <TabsTrigger value="audio">Audio Report</TabsTrigger>
              </TabsList>
              <TabsContent value="text" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="issue-title">Issue Title</Label>
                  <Input id="issue-title" placeholder="Brief title of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue-category">Category</Label>
                  <Select>
                    <SelectTrigger id="issue-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="land">Land Dispute</SelectItem>
                      <SelectItem value="property">Property Rights</SelectItem>
                      <SelectItem value="family">Family Matter</SelectItem>
                      <SelectItem value="employment">Employment Issue</SelectItem>
                      <SelectItem value="abuse">Abuse or Harassment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue-description">Description</Label>
                  <Textarea id="issue-description" placeholder="Describe your issue in detail" rows={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Where did this issue occur?" />
                </div>
                <div className="space-y-2">
                  <Label>Attachments (Optional)</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">Images, documents or other relevant files</p>
                      </div>
                      <Input id="file-upload" type="file" className="hidden" multiple />
                    </label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="audio" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="audio-title">Issue Title</Label>
                  <Input id="audio-title" placeholder="Brief title of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audio-category">Category</Label>
                  <Select>
                    <SelectTrigger id="audio-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="land">Land Dispute</SelectItem>
                      <SelectItem value="property">Property Rights</SelectItem>
                      <SelectItem value="family">Family Matter</SelectItem>
                      <SelectItem value="employment">Employment Issue</SelectItem>
                      <SelectItem value="abuse">Abuse or Harassment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Audio Recording</Label>
                  <div className="flex flex-col items-center justify-center w-full p-6 border rounded-lg bg-muted/50">
                    <Button
                      variant={isRecording ? "destructive" : "secondary"}
                      size="lg"
                      className="w-16 h-16 rounded-full"
                      onClick={() => setIsRecording(!isRecording)}
                    >
                      <Mic className="w-6 h-6" />
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {isRecording ? "Recording... Click to stop" : "Click to start recording"}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">Or upload an existing audio file</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Upload Audio
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audio-location">Location</Label>
                  <Input id="audio-location" placeholder="Where did this issue occur?" />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center space-x-2 mt-6">
              <Checkbox id="anonymous" />
              <Label htmlFor="anonymous" className="text-sm font-normal">
                Submit this report anonymously
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button>Submit Report</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
