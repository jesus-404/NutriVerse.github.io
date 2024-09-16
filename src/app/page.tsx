"use client";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    const nav = document.getElementById("nav-bar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav?.classList.add("bg-custom");
      } else {
        nav?.classList.remove("bg-custom");
      }
    });
  }, [])

  return (
    <div id="home" className="font-[family-name:var(--font-geist-sans)]">
        <nav id="nav-bar" className="flex justify-center fixed w-full h-16 backdrop-blur z-50">
          <NavBar />
        </nav>
        <main className="flex flex-col items-center">
          <Hero />
          <About />
          <Team />
        </main>
        <footer className="flex justify-center bg-[#080808]">
          <Footer />
        </footer>
    </div>
  );
}