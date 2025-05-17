"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Search, VolumeIcon as VolumeUp } from "lucide-react"

// Mock data for constitution chapters
const constitutionChapters = [
  {
    id: "chapter-1",
    title: "Chapter 1: The Constitution",
    articles: [
      {
        id: "article-1",
        title: "Article 1: Supremacy of the Constitution",
        content:
          "The Sovereignty of Ghana resides in the people of Ghana in whose name and for whose welfare the powers of government are to be exercised in the manner and within the limits laid down in this Constitution.",
      },
      {
        id: "article-2",
        title: "Article 2: Enforcement of the Constitution",
        content:
          "A person who alleges that an enactment or anything contained in or done under the authority of that or any other enactment; or any act or omission of any person is inconsistent with, or is in contravention of a provision of this Constitution, may bring an action in the Supreme Court for a declaration to that effect.",
      },
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Territories of Ghana",
    articles: [
      {
        id: "article-3",
        title: "Article 3: Territory of Ghana",
        content:
          "The sovereignty of Ghana resides in the people of Ghana in whose name and for whose welfare the powers of government are to be exercised in the manner and within the limits laid down in the Constitution.",
      },
    ],
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Citizenship",
    articles: [
      {
        id: "article-4",
        title: "Article 4: Citizenship",
        content:
          "A person who, on the coming into force of this Constitution, is a citizen of Ghana by law shall continue to be a citizen of Ghana.",
      },
      {
        id: "article-5",
        title: "Article 5: Citizenship by birth",
        content:
          "A person born in or outside Ghana after the coming into force of this Constitution, shall become a citizen of Ghana at the date of his birth if either of his parents or grandparents is or was a citizen of Ghana.",
      },
    ],
  },
]

export default function ConstitutionPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [language, setLanguage] = useState("english")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<string | null>(null)

  const filteredChapters = constitutionChapters
    .map((chapter) => ({
      ...chapter,
      articles: chapter.articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((chapter) => chapter.articles.length > 0)

  const handlePlayAudio = (articleId: string) => {
    if (currentArticle === articleId && isPlaying) {
      setIsPlaying(false)
      setCurrentArticle(null)
    } else {
      setIsPlaying(true)
      setCurrentArticle(articleId)
    }
  }

  return (
    <div className="container py-10 md:py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Constitution of Ghana</h1>
        <p className="mt-2 text-muted-foreground">Access and search the full text of the Constitution of Ghana</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search the Constitution..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="akan">Akan</SelectItem>
              <SelectItem value="ewe">Ewe</SelectItem>
              <SelectItem value="ga">Ga</SelectItem>
              <SelectItem value="hausa">Hausa</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="chapters" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="chapters">Chapters & Articles</TabsTrigger>
          <TabsTrigger value="bookmarks">My Bookmarks</TabsTrigger>
        </TabsList>
        <TabsContent value="chapters">
          <div className="bg-card rounded-lg border p-6">
            {filteredChapters.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredChapters.map((chapter) => (
                  <AccordionItem key={chapter.id} value={chapter.id}>
                    <AccordionTrigger className="text-lg font-medium">{chapter.title}</AccordionTrigger>
                    <AccordionContent>
                      {chapter.articles.map((article) => (
                        <div key={article.id} className="mb-6 border-b pb-6 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">{article.title}</h3>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handlePlayAudio(article.id)}
                                className={currentArticle === article.id && isPlaying ? "text-primary" : ""}
                              >
                                <VolumeUp className="h-4 w-4" />
                                <span className="sr-only">Play audio</span>
                              </Button>
                              <Button variant="ghost" size="icon">
                                <BookOpen className="h-4 w-4" />
                                <span className="sr-only">Bookmark</span>
                              </Button>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{article.content}</p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <Button variant="link" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="bookmarks">
          <div className="bg-card rounded-lg border p-6 text-center py-12">
            <h3 className="text-lg font-medium mb-2">No bookmarks yet</h3>
            <p className="text-muted-foreground mb-4">Save articles for quick access by clicking the bookmark icon</p>
            <Button
              variant="outline"
              onClick={() => document.querySelector('[value="chapters"]')?.dispatchEvent(new Event("click"))}
            >
              Browse Constitution
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
