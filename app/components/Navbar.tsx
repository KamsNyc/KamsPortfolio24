'use client'
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";




function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log("toggled Menu")
  }
  return (
    <div className="h-[72px] flex items-center justify-between px-4  md:px-16">
      {/* Logo Left side */}
      <div className="text-white ">
        <Link href={'/'}><h1 className="heading font-[800] hover:text-[#d3e97a]">KAMEL SINGH</h1></Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        {mobileMenuOpen ? (
          <MdClose size={24} className="text-red-500 text-2xl cursor-pointer " onClick={toggleMenu} />
        ) : (
          <RxHamburgerMenu className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Link Right side */}
      <div className={`paragraph text-white md:flex items-center gap-8 ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
      <Link className="paragraph text-[16px] font-medium hover:text-[#d3e97a]" href={"/"}>
          Home
        </Link>
        <Link className="paragraph text-[16px] font-medium hover:text-[#d3e97a]" href={"http://localhost:3000/#projects"}>
          Work
        </Link>
        <Link className="paragraph text-[16px] font-medium hover:text-[#d3e97a]" href={"/about"}>
          About
        </Link> 
        <Link className="paragraph text-[16px] font-medium hover:text-[#d3e97a]" href={"http://localhost:3000/#contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
