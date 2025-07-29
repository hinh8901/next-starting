import { LoaderPinwheel } from "lucide-react"
import { FC } from "react"

const Loading: FC = () => {
  return (
    <LoaderPinwheel className="animate-spin" color="#ffffff" />
  )
}

export default Loading