"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutMe from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero className="max-w-4xl mx-auto pb-40" backgroundFill="#000319">
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Stupid Person {/**TEMPLATE */}
              </p>

              {/**
               *  Link: https://ui.aceternity.com/components/text-generate-effect
               *
               *  change md:text-6xl, add more responsive code
               */}
              <TextGenerateEffect
                words="The Future of Web Development"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi! I&apos;m Timothee {/**TEMPLATE */}
              </p>

              <a href="#about"></a>
            </div>
          </div>
        </Hero>
        <AboutMe />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
