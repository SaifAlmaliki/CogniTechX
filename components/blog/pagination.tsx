"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 py-12">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
        >
          {page}
        </Button>
      ))}
      
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}