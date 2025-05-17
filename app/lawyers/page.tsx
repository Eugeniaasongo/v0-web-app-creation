import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

// Mock data for lawyers
const lawyers = [
  {
    id: 1,
    name: "Kwame Mensah",
    specialization: "Civil Law",
    location: "Accra",
    languages: ["English", "Akan"],
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Abena Osei",
    specialization: "Property Law",
    location: "Kumasi",
    languages: ["English", "Akan", "Hausa"],
    rating: 4.5,
    reviews: 18,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Kofi Adu",
    specialization: "Family Law",
    location: "Tamale",
    languages: ["English", "Ewe"],
    rating: 4.9,
    reviews: 32,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Ama Darko",
    specialization: "Human Rights",
    location: "Accra",
    languages: ["English", "Ga", "Akan"],
    rating: 4.7,
    reviews: 15,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function LawyersPage() {
  return (
    <div className="container py-10 md:py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Find a Lawyer</h1>
        <p className="mt-2 text-muted-foreground">Connect with verified legal practitioners in Ghana</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div>
          <label htmlFor="search" className="text-sm font-medium">
            Search
          </label>
          <Input id="search" placeholder="Search by name or keyword" className="mt-1" />
        </div>
        <div>
          <label htmlFor="specialization" className="text-sm font-medium">
            Specialization
          </label>
          <Select>
            <SelectTrigger id="specialization" className="mt-1">
              <SelectValue placeholder="All specializations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All specializations</SelectItem>
              <SelectItem value="civil">Civil Law</SelectItem>
              <SelectItem value="property">Property Law</SelectItem>
              <SelectItem value="family">Family Law</SelectItem>
              <SelectItem value="human-rights">Human Rights</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>
          <Select>
            <SelectTrigger id="location" className="mt-1">
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              <SelectItem value="accra">Accra</SelectItem>
              <SelectItem value="kumasi">Kumasi</SelectItem>
              <SelectItem value="tamale">Tamale</SelectItem>
              <SelectItem value="takoradi">Takoradi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="language" className="text-sm font-medium">
            Language
          </label>
          <Select>
            <SelectTrigger id="language" className="mt-1">
              <SelectValue placeholder="All languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All languages</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="akan">Akan</SelectItem>
              <SelectItem value="ewe">Ewe</SelectItem>
              <SelectItem value="ga">Ga</SelectItem>
              <SelectItem value="hausa">Hausa</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lawyers.map((lawyer) => (
          <Card key={lawyer.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{lawyer.name}</h3>
                  <p className="text-sm text-muted-foreground">{lawyer.specialization}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(lawyer.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {lawyer.rating} ({lawyer.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Location:</span>
                  <span>{lawyer.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Languages:</span>
                  <span>{lawyer.languages.join(", ")}</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Button asChild variant="outline" className="flex-1">
                  <Link href={`/lawyers/${lawyer.id}`}>View Profile</Link>
                </Button>
                <Button className="flex-1">Request Consultation</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
