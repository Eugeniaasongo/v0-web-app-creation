import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, FileText, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Legal Support Made Accessible for All Ghanaians
              </h1>
              <p className="text-slate-500 dark:text-slate-400 md:text-xl">
                CivicJustice connects you with verified legal practitioners, enables civil issue reporting, and provides
                access to Ghana's Constitution in multiple languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/report-issue">
                    Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/constitution">Access Constitution</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="CivicJustice App"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 md:text-xl max-w-3xl mx-auto">
              Empowering citizens with tools for legal access and support
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-slate-800 dark:text-slate-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Civil Issue Reporting</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Report civil issues through text or audio recordings with optional file attachments and geotagging.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-slate-800 dark:text-slate-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lawyer Directory</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Find and connect with verified legal practitioners based on expertise, region, and language.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-slate-800 dark:text-slate-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Constitution Access</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Search and access Ghana's Constitution with multilingual support and audio playback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to get started?</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-[600px] mx-auto">
              Join CivicJustice today and gain access to legal support, resources, and the Constitution of Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="/register">Create an Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
