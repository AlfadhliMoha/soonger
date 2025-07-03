"use client"

import { useState } from "react"
import { Play, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface VideoPlayerProps {
  title: string
  description: string
  thumbnail: string
}

export default function VideoPlayer({ title, description, thumbnail }: VideoPlayerProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card className="border-amber-200 hover:shadow-lg transition-shadow overflow-hidden">
      <div
        className="relative aspect-video bg-gray-100 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Button size="lg" className="bg-white/90 hover:bg-white text-amber-600 rounded-full h-16 w-16 p-0">
            <Play className="h-6 w-6 mr-1" />
          </Button>
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 left-2 opacity-0 hover:opacity-100 transition-opacity"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-amber-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
