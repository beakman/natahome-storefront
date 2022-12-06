import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/legacy/image";
import heroImage from "../../../../../public/hero.jpg"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Summer styles are finally here
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src={heroImage}
        layout="fill"
        loading="eager"
        priority={true}
        placeholder="blur"
        alt="Photo by @katsiajazwinska https://unsplash.com/@katsiajazwinska"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
