import { GraduationCap, Code, Mail, Linkedin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

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
        <div className="bg-black/30 rounded-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap style={{ color: theme.primary }} size={28} />
            <h2 className="text-2xl font-bold" style={{ color: theme.primary }}>Education</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">University of Michigan, College of Engineering</h3>
            <p className="text-gray-400 mb-2">BSE in Computer Engineering • GPA: 3.85 • Anticipated: May 2026</p>
            <p className="text-gray-300">Ann Arbor, MI</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-gray-300">Relevant Coursework:</h4>
            <p className="text-gray-400 text-sm">
              Data Structures and Algorithms, Digital Logic Design, Computer Organization, 
              Signals and Systems, Advanced Embedded System Design, Embedded Control Systems, 
              Advanced Technical Communications
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-black/30 rounded-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Code style={{ color: theme.primary }} size={28} />
            <h2 className="text-2xl font-bold" style={{ color: theme.primary }}>Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-gray-300">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['C++', 'C', 'Python', 'Verilog', 'TypeScript', 'SQL'].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-gray-300">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Linux', 'QEMU', 'Docker', 'ROS2', 'React.js', 'Node.js', 'MongoDB'].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Contact */}
        <div className="bg-black/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-6">
            Always interested in discussing new opportunities, innovative projects, or just talking tech!
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:ljweaver@umich.edu"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all hover:scale-105"
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
              className="flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all hover:scale-105"
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