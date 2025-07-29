"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FC } from "react"

const Actions: FC = () => {
  const router = useRouter()

  const handleRevalidateColor = async () => {
    const res = await fetch('/api/revalidate-tag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tag: 'colors' })
    })

    const data = await res.json();
    if (data.revalidated) alert(`Revalidated tag: ${data.tag}`)
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="flex items-center gap-1.5">
      <Button variant="outline" onClick={handleGoBack} className="cursor-pointer">Back</Button>
      <Button onClick={handleRevalidateColor} className="cursor-pointer">Revalidate Color</Button>
    </div>
  )
}

export default Actions