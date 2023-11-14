import Image from 'next/image'

import imgColors from '@/images/Colors.jpg'
// import imgColors2 from '@/images/Colors.jpg'

const colors = [
  {
    image: imgColors,
  },
  // {
  //   image: imgColors2,
  // },
]

export function Colors() {
  return (
    <div className="my-8">
      <div className="not-prose">
        {colors.map((color) => (
          <div key={color.name} className="">
            <Image
              src={color.image}
              alt=""
              className="h-auto w-full"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
