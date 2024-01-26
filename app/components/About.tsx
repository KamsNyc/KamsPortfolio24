import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="">
      <div className=" mt-[  px] md:mt-[120px] md:flex justify-between">
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
          {/* LINK */}
          <Link href={""} className="text-[#d3e97a]">
            <span className="flex items-center gap-1 paragraph font-bold uppercase  mt-[54px]">
              More About Me
            </span>
          </Link>

          {/* IMAGE FOR MOBILE */}
          <div className="bg-gray-100 rounded-[16px] flex items-center justify-center mt-[64px]">
          <Image src={'/portfolioPicture.png'} alt="portfolio picture 2" width={343} height={400} className="max-w-full max-h-[400px] md:hidden" />
          </div>
        </div>
      </div>
      <div className=" pt-[32px] md:pt-[140px]">
        <hr />
      </div>
    </div>
  );
}
export default About;
