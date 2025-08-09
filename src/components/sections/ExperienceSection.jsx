import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';

const ExperienceCard = ({ job, theme, isSelected, onClick }) => (
  <div 
    className={`bg-white/80 backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
      isSelected ? 'ring-2 border-opacity-100 transform scale-[1.02]' : 'hover:scale-[1.01]'
    }`}
    style={{
      ringColor: isSelected ? theme.primary : 'transparent',
      borderColor: isSelected ? theme.primary : (theme.border?.replace('border-', '') || '#e2e8f0'),
      backgroundColor: theme.cardBg || 'white'
    }}
    onClick={() => onClick(job)}
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-2" style={{ color: theme.text || '#1e293b' }}>{job.company}</h3>
          <div className="flex flex-col space-y-2 mb-2">
            <span className="font-semibold" style={{ color: theme.primary }}>{job.position}</span>
            <div className="flex items-center space-x-4 text-sm" style={{ color: theme.text || '#64748b' }}>
              <span className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{job.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{job.period}</span>
              </span>
            </div>
          </div>
        </div>
        <ArrowRight 
          className={`transition-transform duration-300 ${
            isSelected ? 'rotate-90' : ''
          }`} 
          style={{ color: theme.primary }}
          size={24} 
        />
      </div>
      <p className="leading-relaxed mb-4" style={{ color: theme.text || '#64748b' }}>{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.tech.map((tech, i) => (
          <TechBadge key={i} tech={tech} theme={theme} />
        ))}
      </div>
    </div>

    {isSelected && (
      <div className="px-8 pb-8 border-t" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0' }}>
        <div className="pt-6">
          <h4 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
            Key Achievements
          </h4>
          <div className="space-y-3 mb-6">
            {job.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: theme.primary }}
                ></div>
                <p style={{ color: theme.text || '#64748b' }}>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const ExperienceSection = ({ 
  workExperience, 
  theme, 
  selectedExperience, 
  handleExperienceClick,
  sectionRef 
}) => (
  <section ref={sectionRef} className="min-h-screen pt-12">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <SectionHeader 
        title="Work Experience"
        subtitle="Professional internships in aerospace, AI, and embedded systems"
        theme={theme}
      />
      
      <div className="grid gap-6">
        {workExperience.map((job) => (
          <ExperienceCard
            key={job.id}
            job={job}
            theme={theme}
            isSelected={selectedExperience && selectedExperience.id === job.id}
            onClick={handleExperienceClick}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;