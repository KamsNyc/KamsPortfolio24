import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import EmailForm from '../components/EmailForm'

function About() {

  const Skills = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", "EXPRESS", "MONGODB", "FIGMA", "NODEJS", "TAILWINDCSS", "NEXTJS", "SANITYIO", "WORDPRESS", "SHOPIFY" 
  ]
  return (
    <div className='px-4 md:px-16'>
      {/* ABOUT SECTION */}
      <div className="mt-[80px] md:mt-[120px]">
      <div className=" mt-[ px] md:mt-[120px] md:flex justify-between">
        {/* LEFT SIDE */}
        <div className="">
          <h1 className="heading font-bold text-[32px] md:text-[56px] tracking-tighter uppercase">
            About Me
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-[704px]">
          {/* HEADING */}
          <h1 className="paragraph text-[20px] md:text-[32px] font-medium leading-[120%] md:leading-[140%]">
            I am a fullstack developer based in Queens Nyc.
          </h1>
          {/* DESCRIPTION */}
          <p className="text-[16px] md:text-[18px] paragraph text-[#c7c7c7] leading-[150%] pt-[12px] md:pt-[16px]">
            I am a fullstack developer based in Queens Nyc looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I&apos;m exploring Reactjs, Webflow and
            a bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>
          {/* CTA BUTTONS */}
        <div className=" pt-[32px] md:pt-[40px] flex items-center gap-5">
            {/* CONTACT BUTTON */}
            <button className='uppercase bg-[#d3e97a] hover:bg-[#c8e45b] text-black paragraph font-bold w-[244px] h-[54px] rounded-[100px] px-[24px] flex items-center justify-between'>Download Resume <span className='pb-1'><FaExternalLinkAlt />
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
      </div>
      </div>
      {/* IMAGE */}
      <div className='bg-[#c7c7c7] w-full h-[443px] md:h-[700px] rounded-[16px] mt-[80px] md:mt-[120px] relative'>
      <Image 
      src={'/portabout.png'} 
      width={464} 
      height={652} 
      alt='portfolio image'
      className='absolute bottom-0 left-1/2 w-[343px] h-[443px] md:w-[464px] md:h-[652px] translate-x-[-50%]'
      />
      </div>
      

      {/* MY CAPABILITIES */}
      <div className="mt-[120px]">
        <div className="md:flex justify-between">
      <h1 className="heading font-bold text-[32px] md:text-[56px] tracking-tighter uppercase">
            My Capabilities
          </h1>
          <div className="max-w-[600px] pb-14 md:pb-20">
            {/* Description */}
          <p className='paragraph text-[18px] leading-[150%] text-[#c7c7c7] pt-[16px] md:pt-0'>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
          {/* Skills Badges */}
          <div className="flex flex-wrap gap-[8px] pt-[24px] md:pt-[32px]">
            {
             Skills && Skills.map((skill) => (
              <Badge className='border border-[#484848] hover:bg-[#d3e97a] hover:text-black cursor-pointer'>{skill}</Badge>
             ))
            }
              </div>
          </div>
          </div>
      </div>

      {/* HORZONTAL LINE */}
    <hr className='bg-[#484848]' />

      {/* CONTACT US */}
      <div className="mt-[64px] md:mt-[96px] mb-[80px]">
      <EmailForm />
      </div>
    </div>
  )
}

export default About
