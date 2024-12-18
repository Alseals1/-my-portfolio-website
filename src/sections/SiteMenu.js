import React, { useState, useEffect } from "react";
import HomeSection from "./Home/HomeSection";
import Projects from "./Projects/ProjectsSection";
import Experience from "./Experience";
import Contact from "./Contact";

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
    <div>
      <div className="flex top-0">
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

        <div className=" w-full pl-8 ml-24">
          <section id="home" className="relative">
            <HomeSection />
          </section>
          <section id="projects" className="relative">
            <Projects />
          </section>

          <section id="experience" className="relative">
            <Experience />
          </section>
        </div>
      </div>
      <section id="contact" className="relative">
        <Contact />
      </section>
    </div>
  );
};

export default Navbar;
