"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface Category {
  name: string
  slug: string
}

interface BlogHeaderProps {
  categories: Category[]
}

export function BlogHeader({ categories }: BlogHeaderProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest Insights & News</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with our latest insights, industry trends, and success stories
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 bg-background/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full",
                activeCategory === category.slug && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}