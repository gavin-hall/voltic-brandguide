import Image from 'next/image'

import imgType from '@/images/Typography.jpg'
// import imgColors2 from '@/images/Colors.jpg'

const typographys = [
  {
    image: imgType,
  },
  // {
  //   image: imgColors2,
  // },
]

export function Typographys() {
  return (
    <div className="my-8">
      <div className="not-prose">
        {typographys.map((typography) => (
          <div key={typography.name} className="">
            <Image
              src={typography.image}
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
