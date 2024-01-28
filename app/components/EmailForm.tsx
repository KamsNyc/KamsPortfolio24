"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/send-email",
        {
          name,
          email,
          subject,
          message,
        }
      );

      if (response.status === 200) {
        console.log("Email sent successfully");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div id="contact" className="md:flex justify-between">
      {/* HEADING/LEFT SIDE */}
      <div className="">
        <h1 className="heading font-bold text-[32px] md:text-[56px] tracking-tighter uppercase">
          Let's Connect
        </h1>
        {/* Contact email */}
        <p className="paragraph text-[18px] text-[#c7c7c7]">
          Say hello at{" "}
          <a
            href="mailto:KamsNyc@gmail.com"
            target="_blank"
            className="border-b border-[#d3e97a] hover:text-[#c8e45b]"
          >
            KamsNyc@gmail.com
          </a>
        </p>
        {/* Resume */}
        <p className="paragraph text-[18px] pt-[4px] md:pt-[4px] text-[#c7c7c7]">
          For more info, here's my{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-[#d3e97a] hover:text-[#c8e45b]"
          >
            resume
          </a>
        </p>

        {/* SOCIAL ICON CONTAINER */}
        <div className="flex pt-[32px] md:pt-[40px] gap-[20px]">
          <Link target="_blank" href="">
            <Image
              src="/linkdin.svg"
              alt="Linkdin"
              width={32}
              height={32}
              className="hover:scale-105 duration-300 ease-in"
            />
          </Link>
          <Link target="_blank" href="">
            <Image
              src={"/github.svg"}
              alt="Github"
              width={32}
              height={32}
              className="hover:scale-105 duration-300 ease-in"
            />
          </Link>
          <Link target="_blank" href="">
            <Image
              src={"/twitter.svg"}
              alt="Twitter"
              width={32}
              height={32}
              className="hover:scale-105 duration-300 ease-in"
            />
          </Link>
        </div>
      </div>

      {/* RIGHTSIDE CONTACT FORM */}
      <div className="mt-[48px] md:mt-0">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-[24px] ">
          <div className="flex flex-col space-y-[8px]">
            <label className="text-[16px] paragraph text-[#c7c7c7] ">
              Name
            </label>
            <input
              className="text-white md:w-[600px] bg-[#1a1a1a] h-[42px] rounded pl-[16px]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-[8px]">
            <label className="text-[16px] paragraph text-[#c7c7c7] ">
              Email:
            </label>
            <input
              className="text-white md:w-[600px] bg-[#1a1a1a] h-[42px] rounded pl-[16px]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-[8px]">
            <label className="text-[16px] paragraph text-[#c7c7c7] ">
              Subject:
            </label>
            <input
              className="text-white md:w-[600px] bg-[#1a1a1a] h-[42px] rounded pl-[16px]"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-[8px]">
            <label className="text-[16px] paragraph text-[#c7c7c7] ">
              Message:
            </label>
            <textarea
              className="text-white md:w-[600px] bg-[#1a1a1a] h-[42px] rounded pl-[16px] min-h-[148px] pt-[12px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-[#D3E97A] text-[#0a0a0a] paragraph font-bold leading-[100%] px-[40px] py-[20px] rounded-[100px] uppercase hover:bg-[#c8e45b]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
