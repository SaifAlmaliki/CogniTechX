import { BlogHeader } from "@/components/blog/header"
import { BlogGrid } from "@/components/blog/grid"
import { Pagination } from "@/components/blog/pagination"

// Sample categories for demonstration
export const categories = [
  { name: "All", slug: "all" },
  { name: "Artificial Intelligence", slug: "ai" },
  { name: "Machine Learning", slug: "machine-learning" },
  { name: "Cloud Computing", slug: "cloud" },
  { name: "IIoT", slug: "iiot" },
  { name: "Case Studies", slug: "case-studies" },
  { name: "Industry Insights", slug: "insights" }
]

// Sample blog posts for demonstration
export const posts = [
  {
    id: "1",
    title: "The Future of Industrial AI: Trends and Innovations",
    slug: "future-of-industrial-ai",
    excerpt: "Explore the latest trends and innovations in industrial AI and how they're transforming manufacturing processes.",
    content: `
# The Future of Industrial AI: Trends and Innovations

## Introduction

Artificial Intelligence is revolutionizing the industrial sector, bringing unprecedented levels of automation, efficiency, and intelligence to manufacturing processes. In this article, we'll explore the latest trends and innovations in industrial AI and their impact on the future of manufacturing.

## Key Trends in Industrial AI

### 1. Predictive Maintenance
AI-powered predictive maintenance is transforming how industries approach equipment maintenance. By analyzing real-time sensor data and historical performance metrics, AI systems can predict potential equipment failures before they occur.

### 2. Quality Control Automation
Computer vision and machine learning algorithms are enabling automated quality control processes that are more accurate and efficient than traditional methods.

### 3. Supply Chain Optimization
AI is revolutionizing supply chain management through improved demand forecasting, inventory optimization, and logistics planning.

## Impact on Manufacturing

The implementation of AI in manufacturing environments has led to:

- Reduced downtime
- Improved product quality
- Increased operational efficiency
- Better resource utilization
- Enhanced safety measures

## Future Outlook

As AI technology continues to evolve, we can expect to see:

1. More sophisticated predictive analytics
2. Enhanced human-machine collaboration
3. Greater automation of complex tasks
4. Improved decision-making capabilities

## Conclusion

The future of industrial AI is bright, with continuous innovations driving the transformation of manufacturing processes. Companies that embrace these technologies will be better positioned to compete in the increasingly digital industrial landscape.
    `,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dr. Sarah Schmidt",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      role: "Chief Technology Officer"
    },
    publishedAt: "2024-01-25",
    readingTime: "8 min read",
    category: "ai",
    featured: true
  },
  {
    id: "2",
    title: "Implementing Machine Learning in Manufacturing",
    slug: "implementing-ml-manufacturing",
    excerpt: "A comprehensive guide to implementing machine learning solutions in manufacturing environments.",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Michael Weber",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      role: "ML Engineer"
    },
    publishedAt: "2024-01-24",
    readingTime: "12 min read",
    category: "machine-learning"
  },
  {
    id: "3",
    title: "Cloud-Native IIoT Architecture",
    slug: "cloud-native-iiot",
    excerpt: "Best practices for designing and implementing cloud-native IIoT solutions for industrial applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: {
      name: "Anna Müller",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      role: "Cloud Architect"
    },
    publishedAt: "2024-01-23",
    readingTime: "10 min read",
    category: "cloud"
  },
  {
    id: "4",
    title: "Digital Transformation Success Story: AutoTech GmbH",
    slug: "autotech-case-study",
    excerpt: "How AutoTech GmbH achieved 40% efficiency improvement through IIoT implementation.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Thomas Klein",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
      role: "Project Manager"
    },
    publishedAt: "2024-01-22",
    readingTime: "6 min read",
    category: "case-studies"
  },
  {
    id: "5",
    title: "The Rise of Edge Computing in IIoT",
    slug: "edge-computing-iiot",
    excerpt: "Understanding the critical role of edge computing in modern IIoT implementations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    author: {
      name: "Lisa Wagner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      role: "IoT Specialist"
    },
    publishedAt: "2024-01-21",
    readingTime: "9 min read",
    category: "iiot"
  },
  {
    id: "6",
    title: "Industry 4.0: 2024 Trends Report",
    slug: "industry-4-trends-2024",
    excerpt: "Key trends and predictions shaping the Industry 4.0 landscape in 2024 and beyond.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dr. Marcus Schmidt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      role: "Industry Analyst"
    },
    publishedAt: "2024-01-20",
    readingTime: "15 min read",
    category: "insights"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      <BlogHeader categories={categories} />
      <BlogGrid posts={posts} />
      <Pagination currentPage={1} totalPages={3} />
    </div>
  )
}