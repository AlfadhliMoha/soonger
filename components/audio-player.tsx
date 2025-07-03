"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface AudioPlayerProps {
  title: string
  description: string
  audioSrc?: string
  duration?: string
}

export default function AudioPlayer({ title, description, audioSrc, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState([0])
  const [volume, setVolume] = useState([70])
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      if (audio.duration) {
        setProgress([(audio.currentTime / audio.duration) * 100])
      }
    }

    const updateDuration = () => {
      setTotalDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress([0])
      setCurrentTime(0)
    }

    const handleLoadStart = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("canplay", handleCanPlay)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("canplay", handleCanPlay)
    }
  }, [audioSrc])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume[0] / 100
    }
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Error playing audio:", error)
      setIsPlaying(false)
    }
  }

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current
    if (audio && totalDuration) {
      const newTime = (value[0] / 100) * totalDuration
      audio.currentTime = newTime
      setProgress(value)
    }
  }

  const resetAudio = () => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      setProgress([0])
      setCurrentTime(0)
      if (isPlaying) {
        setIsPlaying(false)
        audio.pause()
      }
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const displayDuration = totalDuration ? formatTime(totalDuration) : duration || "0:00"

  return (
    <Card className="border-amber-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {audioSrc && <audio ref={audioRef} src={audioSrc} preload="metadata" crossOrigin="anonymous" />}

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button
              size="lg"
              onClick={togglePlay}
              disabled={!audioSrc || isLoading}
              className="bg-amber-600 hover:bg-amber-700 rounded-full h-12 w-12 p-0"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 mr-1" />
              )}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={resetAudio}
              className="rounded-full h-8 w-8 p-0 border-amber-300 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-amber-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-600 mb-2">{description}</p>

            <div className="flex items-center gap-3">
              <Slider
                value={progress}
                onValueChange={handleProgressChange}
                max={100}
                step={0.1}
                className="flex-1"
                disabled={!audioSrc || !totalDuration}
              />
              <div className="text-xs text-gray-500 min-w-[80px] text-center">
                {formatTime(currentTime)} / {displayDuration}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-gray-400" />
            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-16" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
