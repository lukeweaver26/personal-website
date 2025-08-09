import { GraduationCap, Code, Mail, Linkedin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { skills } from '../../data/skills';

const AboutSection = ({ theme, sectionRef }) => (
  <section ref={sectionRef} className="min-h-screen pt-12">
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeader 
        title="About Me"
        subtitle="Computer Engineering student passionate about innovation"
        theme={theme}
      />
      
      <div className="space-y-8">
        {/* Education */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border shadow-lg p-8" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0', backgroundColor: theme.cardBg || 'white' }}>
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap style={{ color: theme.primary }} size={28} />
            <h2 className="text-2xl font-bold" style={{ color: theme.primary }}>Education</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold" style={{ color: theme.text || '#1e293b' }}>University of Michigan, College of Engineering</h3>
            <p className="mb-2" style={{ color: theme.text || '#64748b' }}>BSE in Computer Engineering • Anticipated: May 2026</p>
            <p style={{ color: theme.text || '#64748b' }}>Ann Arbor, MI</p>
          </div>
          <div>
            <h4 className="font-bold mb-2" style={{ color: theme.text || '#64748b' }}>Relevant Coursework:</h4>
            <p className="text-sm" style={{ color: theme.text || '#64748b' }}>
              Data Structures and Algorithms, Digital Logic Design, Computer Organization, 
              Signals and Systems, Advanced Embedded System Design, Embedded Control Systems, 
              Advanced Technical Communications
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border shadow-lg p-8" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0', backgroundColor: theme.cardBg || 'white' }}>
          <div className="flex items-center space-x-3 mb-6">
            <Code style={{ color: theme.primary }} size={28} />
            <h2 className="text-2xl font-bold" style={{ color: theme.primary }}>Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3" style={{ color: theme.text || '#64748b' }}>Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((lang) => (
                  <span 
                    key={lang} 
                    className="px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: theme.primary + '15',
                      color: theme.primary,
                      border: `1px solid ${theme.primary}30`
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3" style={{ color: theme.text || '#64748b' }}>Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.toolsAndTechnologies.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: theme.primary + '15',
                      color: theme.primary,
                      border: `1px solid ${theme.primary}30`
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Contact */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border shadow-lg p-8 text-center" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0', backgroundColor: theme.cardBg || 'white' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
            Let's Connect
          </h2>
          <p className="mb-6" style={{ color: theme.text || '#64748b' }}>
            Always interested in discussing new opportunities, innovative projects, or just talking tech!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="mailto:ljweaver@umich.edu"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 hover:shadow-md"
              style={{ 
                borderColor: theme.primary,
                backgroundColor: theme.primary + '10',
                color: theme.primary
              }}
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://linkedin.com/in/lukejweaver"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border transition-all hover:scale-105 hover:shadow-md"
              style={{ 
                borderColor: theme.primary,
                backgroundColor: theme.primary + '10',
                color: theme.primary
              }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;