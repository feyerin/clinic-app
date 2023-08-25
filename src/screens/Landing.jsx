import React from "react";
// Sections
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Contact from "../components/Sections/Contact";
import whatsapp from "../assets/img/whatsapp.png"

export default function Landing() {
  return (
    <>
      <Header />
      <Services />
      <Projects />
      {/* <Blog /> */}
      {/* <Contact /> */}
      <a href="https://wa.me/628112440606">
        <button className="fixed z-90 bottom-10 right-8 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300">
            <img src={whatsapp} />
        </button>
      </a>
    </>
  );
}


