import React, { useState, useEffect } from "react";
import HomeSection from "./Home/HomeSection";
import Projects from "./Projects/ProjectsSection";
import Experience from "./Experience";
import Contact from "./Contact";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Define sections for navigation
  const sections = [
    { id: "home", name: "Home" },
    { id: "projects", name: "Projects" },
    { id: "experience", name: "Experience" },
    { id: "contact", name: "Contact" },
  ];

  // Scroll Event Handler
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex top-0">
      <DotLottieReact
        src="./a1.json"
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
      {/* Left Vertical Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-40 bg-transparent bg-red-600 text-gray-200 flex flex-col items-center justify-center space-y-16">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${
              activeSection === section.id
                ? "text-red-500"
                : "text-textColorSecondary"
            } hover:text-red-900 font-semibold `}
          >
            {section.name}
          </a>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="ml-20 w-full pl-8">
        <section id="home">
          <HomeSection />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
