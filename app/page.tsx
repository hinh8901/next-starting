import { FC } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


const Home: FC = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="https://ycxhdoliqwvxdsmzjknq.supabase.co/storage/v1/object/public/nextjs.todos/large-images/world.topo.bathy.200412.3x5400x2700.jpg"
        fill
        objectFit="cover"
        alt="World background"
        priority
        quality={100}
      />
      <div className="flex items-center justify-center absolute left-0 top-0 w-full h-full bg-[#202020a1] backdrop-blur-xs">
        <Link href="/color">
          <Button variant="outline" className="cursor-pointer">
            Colors
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home