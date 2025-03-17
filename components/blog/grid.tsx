import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ChevronRight } from "lucide-react"

interface Author {
  name: string
  avatar: string
  role: string
}

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  author: Author
  publishedAt: string
  readingTime: string
  category: string
  featured?: boolean
}

interface BlogGridProps {
  posts: Post[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow">
              <a href={`https://blog.cognitechx.com/${post.slug}`} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.featured && (
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
              </a>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                <a href={`https://blog.cognitechx.com/${post.slug}`} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </a>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                  <span>•</span>
                  <time>
                    {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                  </time>
                </div>
                <Button variant="ghost" size="sm" className="group/btn" asChild>
                  <a href={`https://blog.cognitechx.com/${post.slug}`} target="_blank" rel="noopener noreferrer">
                    Read more
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}