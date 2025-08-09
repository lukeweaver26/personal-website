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
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
    setSelectedExperience(null);
  };

  const handleExperienceClick = (experience) => {
    if (selectedExperience && selectedExperience.id === experience.id) {
      setSelectedExperience(null);
    } else {
      setSelectedExperience(experience);
    }
    setSelectedProject(null);
  };

  const getCurrentTheme = () => {
    // Dynamic color transformation disabled for now - keeping for future iterations
    // if (selectedProject) return selectedProject.colors;
    // if (selectedExperience) return selectedExperience.colors;
    
    // Always return default theme
    return {
      primary: "#4f46e5",
      secondary: "#3730a3",
      accent: "#6366f1",
      bg: "from-indigo-50 to-white",
      text: "#1e293b",
      cardBg: "bg-white",
      border: "border-indigo-200"
    };
  };

  const theme = getCurrentTheme();


  return (
    <div className={`min-h-screen h-full bg-gradient-to-br ${theme.bg} text-gray-900 transition-all duration-500`} style={{ color: theme.text || '#1e293b' }}>
      {/* Terminal component disabled for now - keeping for future iterations
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
      */}


      <Navigation
        theme={theme}
        scrollToSection={scrollToSection}
        refs={refs}
        // terminalOpen={terminalOpen} // Disabled for now
        // setTerminalOpen={setTerminalOpen} // Disabled for now
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