import React, { useState, useRef } from 'react';
import { projects } from '../../data/projects';
import { workExperience } from '../../data/experience';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import AboutSection from '../sections/AboutSection';
import Terminal from '../Terminal';
import Footer from '../Footer';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(192);
  
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const refs = { homeRef, workRef, projectsRef, aboutRef };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleProjectClick = (project) => {
    setIsAnimating(true);
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
    setSelectedExperience(null);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleExperienceClick = (experience) => {
    setIsAnimating(true);
    if (selectedExperience && selectedExperience.id === experience.id) {
      setSelectedExperience(null);
    } else {
      setSelectedExperience(experience);
    }
    setSelectedProject(null);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getCurrentTheme = () => {
    if (selectedProject) return selectedProject.colors;
    if (selectedExperience) return selectedExperience.colors;
    
    return {
      primary: "#00ff41",
      secondary: "#00cc33",
      accent: "#66ff66",
      bg: "from-gray-950 to-black"
    };
  };

  const theme = getCurrentTheme();


  return (
    <div className={`min-h-screen h-full bg-gradient-to-br ${theme.bg} text-white transition-all duration-500`}>
      <Terminal
        terminalOpen={terminalOpen}
        terminalHeight={terminalHeight}
        setTerminalHeight={setTerminalHeight}
        workExperience={workExperience}
        projects={projects}
        scrollToSection={scrollToSection}
        refs={refs}
        setTerminalOpen={setTerminalOpen}
      />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Navigation
        theme={theme}
        scrollToSection={scrollToSection}
        refs={refs}
        terminalOpen={terminalOpen}
        setTerminalOpen={setTerminalOpen}
      />

      <main>
        <Hero 
          theme={theme}
          scrollToSection={scrollToSection}
          refs={refs}
        />

        <ExperienceSection
          workExperience={workExperience}
          theme={theme}
          selectedExperience={selectedExperience}
          handleExperienceClick={handleExperienceClick}
          sectionRef={workRef}
        />

        <ProjectsSection
          projects={projects}
          theme={theme}
          selectedProject={selectedProject}
          handleProjectClick={handleProjectClick}
          sectionRef={projectsRef}
        />

        <AboutSection
          theme={theme}
          sectionRef={aboutRef}
        />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default Portfolio;