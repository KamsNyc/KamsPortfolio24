import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function Hero() {
  return (
    <div className="">
    <div className='block md:flex items-center justify-between space-y-[64px] md:space-y-0'>
      {/* LEFT SIDE CONTEXT */}
      <div className="max-w-[443px] md:max-w-[754px]">
        {/* MAIN HEADING */}
        <h1 className='heading uppercase font-bold text-[48px] md:text-[100px] leading-[100%] tracking-tighter'>Hi, I Am<br/>Kamel Singh.</h1>
        {/* DESCRIPTION */}
        <p className='pt-3 md:pt-2 paragraph text-[16px] md:text-[18px] text-[#c7c7c7] leading-[160%] md:leading-[150%] md:max-w-[554px]'>A New York City based fullstack developer passionate about building accessible and user friendly websites.</p>
        {/* CTA BUTTONS */}
        <div className=" pt-[32px] md:pt-[40px] flex items-center gap-5">
            {/* CONTACT BUTTON */}
            <button className='uppercase bg-[#d3e97a] hover:bg-[#c8e45b] text-black paragraph font-bold w-[187px] h-[54px] rounded-[100px] px-[24px] flex items-center justify-between'>Contact Me <span className='pb-1'><FaExternalLinkAlt />
</span></button>
            {/* SOCIAL MEDIAS */}
            <div className="flex items-center gap-4">
                {/* LINKDIN */}
                <div className="bg-[#222222] hover:bg-[#333333] cursor-pointer w-[54px] h-[54px] rounded-[100px] flex items-center justify-center">
                  <Image src={'/linkdin.svg'} height={26} width={26} alt='Linkdin Icon' />
                </div>
                {/* GITHUB */}
                <div className="bg-[#222222] hover:bg-[#333333] cursor-pointer w-[54px] h-[54px] rounded-[100px] flex items-center justify-center">
                  <Image src={'/github.svg'} height={26} width={26} alt='Linkdin Icon' />
                </div>
            </div>
        </div>
      </div>

      {/* RIGHT SIDE PICTURE */}
      <div className=" max-h-[663px] max-w-[600px] bg-gray-100 rounded-[16px]">
        <Image src={'/portfolioPicture.png'} alt='portfolio picture' width={600} height={663} />
      </div>
    </div>
    {/* HORZONTAL LINE */}
    <hr className='mt-[64px] md:mt-[80px] bg-[#484848]' />
    </div>
  )
}
export default Hero
