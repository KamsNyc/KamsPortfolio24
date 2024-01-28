import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import About from "./components/About";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <main className="">

      {/* HERO SECTION */}
      <div className="px-4 md:px-16 pt-[30px]">
        <Hero />
      </div>

      {/* FEATURED PROJECTS */}
      <div className="px-4 md:px-16">
        <FeaturedProjects />
      </div>

      {/* ABOUT ME */}
      <div className="px-4 md:px-16">
        <About />
      </div>

      {/* CONTACT US */}
      <div className="px-4 md:px-16 py-20">
        <EmailForm />
      </div>

      
    </main>
  );
}
