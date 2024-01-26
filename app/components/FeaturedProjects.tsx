'use client'
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import axios from "axios"

type ProjectInterface = {
  heading: string;
  description: string;
  year: string;
  role: string;
  liveDemo: string;
  github: string;
  coverImage: string;
  badge: string;
  _id: string;
};


function FeaturedProjects() {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  const FetchProject = async () => {
    const res = await axios.get<ProjectInterface[]>('http://localhost:8000/project')
    setProjects(res.data)
  }

  useEffect(()=>{
    FetchProject()
  }, [])
  return (
    <div>
      {/* HEADER */}
      <div className="mt-[64px] md:mt-[80px] md:max-w-[600px]">
        <h1 className="heading font-bold text-[32px] md:text-[56px] tracking-tighter uppercase">
          Featured Projects
        </h1>
        <p className="pt-3 md:pt-2 paragraph text-[16px] md:text-[18px] text-[#c7c7c7] leading-[160%] md:leading-[150%]">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      {/* PROJECTS   */}
      {
        projects && projects.map((project) => (
          <div className="pt-[32px] md:pt-[80px] md:flex gap-[48px] items-center " key={project._id}>
          {/* IMAGE */}
          <div className="bg-[#1a1a1a] w-full h-[343px] md:w-[600px] md:h-[600px] relative rounded-[12px] flex items-center justify-center">
            {/* BADGE */}
            <Badge className="hidden paragraph font-medium text-[14px] bg-black uppercase md:absolute top-4 left-4">
              {project.badge}
            </Badge>
            {/* IMAGE */}
            <div className="rounded-[16px] absolute bottom-0 md:static">
              <Image
                src={project.coverImage}
                objectFit="cover"
                alt={project.heading}
                width={486}
                height={347}
                className="w-full h-[343px] md:w-[486px] md:h-[347px] object-cover rounded-[12px]"
              />
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="md:max-w-[576px] pt-[40px] md:pt-0">
            {/* HEADING */}
            <h1 className="paragraph text-[32px] font-medium leading-[140%]">
              {project.heading}
            </h1>
            {/* DESCRIPTION */}
            <p className="text-[18px] paragraph text-[#c7c7c7] leading-[150%] pt-[16px]">
              {project.description}
            </p>
            {/* PROJECT INFO */}
            <div className="md:max-w-[576px] pt-[32px]">
              {/* HEADING */}
              <h3 className="uppercase paragraph font-semibold leading-[150%] ">
                Project Info
              </h3>
              {/* BORDER */}
              <div className="pt-[16px]">
                <hr />
              </div>
              {/* YEAR */}
              <div className="flex items-center justify-between pt-[16px]">
                {/* heading */}
                <h2 className="paragraph font-medium leading-[160%]">Year</h2>
                {/* value */}
                <span className="paragraph font-medium leading-[160%] text-[#c7c7c7]">
                  {project.year}
                </span>
              </div>
              {/* BORDER */}
              <div className="pt-[16px]">
                <hr />
              </div>
              {/* ROLE */}
              <div className="flex items-center justify-between pt-[16px]">
                {/* heading */}
                <h2 className="paragraph font-medium leading-[160%]">Role</h2>
                {/* value   */}
                <span className="paragraph font-medium leading-[160%] text-[#c7c7c7]">
                  {project.role}
                </span>
              </div>
              {/* BORDER */}
              <div className="pt-[16px]">
                <hr />
              </div>
            </div>
            {/* LIVE DEMO/SEE ON GITHUB ICONS */}
            <div className="pt-[48px] flex items-center gap-[24px]">
              {/* live demo button */}
              <Link target="_blank" href={project.liveDemo} className="text-[#d3e97a]">
                <span className="flex items-center gap-1 paragraph font-bold uppercase">Live Demo <span><TbExternalLink size={20} className="pb-1 " /></span></span>
              </Link>
              {/* see on github button */}
              <Link target="_blank" href={project.github} className="text-[#d3e97a]">
                <span className="flex items-center gap-1 paragraph font-bold uppercase">See on Github <span><FaGithub size={20} className="pb-1"/></span></span>
              </Link>
            </div>
          </div>
        </div>
        ))
      }
      
      
      <div className="pt-[80px]">
        <hr />
      </div>
    </div>
  );
}

export default FeaturedProjects;
