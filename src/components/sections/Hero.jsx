import { Mail, Linkedin, Briefcase, Code } from 'lucide-react';
import Button from '../ui/Button';
import FullMarquee from '../ui/ScrollingMarquee';

const Hero = ({ theme, scrollToSection, refs = {} }) => (
  <section ref={refs.homeRef} className="min-h-screen pt-20 flex items-center">
    <div className="max-w-6xl mx-auto px-6 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-mono font-bold mb-6">
          <span style={{ color: theme.primary }}>{'<'}</span>
          Luke Weaver
          <span style={{ color: theme.primary }}>{' />'}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          Computer Engineering Student | University of Michigan
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          Embedded Systems • AI/ML • Full-Stack Development • Aerospace Software
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="mailto:ljweaver@umich.edu" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Mail style={{ color: theme.primary }} size={20} />
            <span>ljweaver@umich.edu</span>
          </a>
          <a href="https://linkedin.com/in/lukejweaver" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Linkedin style={{ color: theme.primary }} size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-black/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>Recent Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-black/40 rounded-lg p-6">
              <h3 className="font-bold mb-2 text-blue-400">CesiumAstro Internship</h3>
              <p className="text-gray-300 text-sm">Built QEMU-based flight computer emulator enabling testing for 20+ person software team</p>
            </div>
            <div className="bg-black/40 rounded-lg p-6">
              <h3 className="font-bold mb-2 text-purple-400">NASA BIG Idea Challenge</h3>
              <p className="text-gray-300 text-sm">Finalist - One of six teams selected to present at national NASA conference</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button 
            onClick={() => scrollToSection(refs.workRef)}
            theme={theme}
          >
            <Briefcase size={20} />
            <span>View Experience</span>
          </Button>
          <Button 
            onClick={() => scrollToSection(refs.projectsRef)}
            variant="outline"
            theme={theme}
          >
            <Code size={20} />
            <span>View Projects</span>
          </Button>
        </div>

        <FullMarquee />
      </div>
    </div>
  </section>
);

export default Hero;