import { FC } from 'react'
import Link from 'next/link'

import Actions from './Actions'
import { fetchColors } from '../helpers'
import LinkLoadingIndicator from './LinkLoadingIndicator'

const Colors: FC = async () => {
  const colors = await fetchColors()

  return (
    <>
      <div className="flex gap-2.5">
        {colors.map(color => (
          <div
            key={color.value}
            style={{ background: color.value }}
            className={`aspect-square text-white w-18 rounded-full flex items-center justify-center relative overflow-hidden`}
          >
            <Link
              href={`/color/${color.name}`}
              className="block w-full h-full absolute left-0 top-0"
            />
            <LinkLoadingIndicator />
          </div>
        ))}
      </div>
      <Actions />
    </>
  )
}

export default Colors
