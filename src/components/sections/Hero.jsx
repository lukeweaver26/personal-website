import { Github, Linkedin, Briefcase, Code } from 'lucide-react';
import Button from '../ui/Button';

const Hero = ({ theme, scrollToSection, refs = {} }) => (
  <section ref={refs.homeRef} className="min-h-screen pt-20 flex items-center">
    <div className="max-w-6xl mx-auto px-6 py-20 w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span style={{ color: theme.primary }}>Luke</span>
            {' '}
            <span style={{ color: theme.text || '#1e293b' }}>Weaver</span>
          </h1>
          
          {/* Mobile image - shows after name, before subtitle */}
          <div className="flex justify-center lg:hidden mb-6">
            <div 
              className="w-48 h-48 rounded-full border-4 overflow-hidden shadow-xl"
              style={{ borderColor: theme.primary }}
            >
              <img 
                src="/hero-image.jpg" 
                alt="Luke Weaver"
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
          
          <p className="text-xl mb-4 font-medium" style={{ color: theme.text || '#64748b' }}>
            Computer Engineering Student | University of Michigan
          </p>
          <p className="text-lg mb-8 max-w-3xl lg:max-w-none lg:mx-0 mx-auto opacity-80" style={{ color: theme.text || '#64748b' }}>
            Aerospace Software • Embedded Systems • AI/ML • Full-Stack Development 
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 mb-12">
          <a 
            href="https://github.com/lukeweaver26" 
            className="flex items-center justify-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm hover:scale-105"
            style={{ 
              backgroundColor: theme.primary + '10',
              color: theme.primary
            }}
          >
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/lukejweaver" 
            className="flex items-center justify-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm hover:scale-105"
            style={{ 
              backgroundColor: theme.primary + '10',
              color: theme.primary
            }}
          >
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
        </div>
        
        {/* Desktop image - shows on right side */}
        <div className="hidden lg:block flex-shrink-0">
          <div 
            className="w-56 h-56 rounded-full border-4 overflow-hidden shadow-xl"
            style={{ borderColor: theme.primary }}
          >
            <img 
              src="/hero-image.jpg" 
              alt="Luke Weaver"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>Recent Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div 
            className="rounded-xl p-6 shadow-sm border transition-transform hover:scale-105 duration-200"
            style={{ 
              backgroundColor: theme.cardBg || 'white',
              borderColor: theme.border?.replace('border-', '') || '#e2e8f0'
            }}
          >
            <h3 className="font-bold mb-2" style={{ color: theme.primary }}>CesiumAstro Internship</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.text || '#64748b' }}>
              Built QEMU-based flight computer emulator enabling testing for 20+ person software team
            </p>
          </div>
          <div 
            className="rounded-xl p-6 shadow-sm border transition-transform hover:scale-105 duration-200"
            style={{ 
              backgroundColor: theme.cardBg || 'white',
              borderColor: theme.border?.replace('border-', '') || '#e2e8f0'
            }}
          >
            <h3 className="font-bold mb-2" style={{ color: theme.primary }}>NASA BIG Idea Challenge</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.text || '#64748b' }}>
              Finalist - One of six teams selected to present at national NASA conference
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
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
    </div>
  </section>
);

export default Hero;