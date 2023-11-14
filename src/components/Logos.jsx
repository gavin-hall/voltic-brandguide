import Image from 'next/image'

import imgLogo from '@/images/Logos.jpg'
// import imgColors2 from '@/images/Colors.jpg'

const logos = [
  {
    image: imgLogo,
  },
  // {
  //   image: imgColors2,
  // },
]

export function Logos() {
  return (
    <div className="my-8">
      <div className="not-prose">
        {logos.map((logo) => (
          <div key={logo.name} className="">
            <Image
              src={logo.image}
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
