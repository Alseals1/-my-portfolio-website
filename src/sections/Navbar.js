import React, { useState, useEffect } from "react";
import HomeSection from "./Home/HomeSection";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Define sections for navigation
  const sections = [
    { id: "home", name: "Home" },
    { id: "projects", name: "Projects" },
    { id: "resume", name: "Resume" },
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
    <div className="flex">
      {/* Left Vertical Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-40 bg-transparent bg-red-600 text-gray-200 flex flex-col items-center justify-center space-y-16">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${
              activeSection === section.id
                ? "text-black"
                : "text-textColorSecondary"
            } hover:text-red-900 font-semibold `}
          >
            {section.name}
          </a>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="ml-20 w-full p-8">
        <section id="home" className="min-h-screen">
          <HomeSection />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="resume" className="min-h-screen">
          <Resume />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
