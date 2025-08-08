import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';

const ExperienceCard = ({ job, theme, isSelected, onClick }) => (
  <div 
    className={`bg-black/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-all cursor-pointer ${
      isSelected ? 'ring-2 border-opacity-100' : 'hover:scale-[1.01]'
    }`}
    style={{
      ringColor: isSelected ? theme.primary : 'transparent',
      borderColor: isSelected ? theme.primary : undefined
    }}
    onClick={() => onClick(job)}
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{job.company}</h3>
          <div className="flex items-center space-x-4 text-gray-400 mb-2">
            <span className="font-semibold text-white">{job.position}</span>
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
        <ArrowRight 
          className={`text-gray-600 transition-transform ${
            isSelected ? 'rotate-90' : ''
          }`} 
          size={24} 
        />
      </div>
      <p className="text-gray-300 mb-4">{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.tech.map((tech, i) => (
          <TechBadge key={i} tech={tech} theme={theme} />
        ))}
      </div>
    </div>

    {isSelected && (
      <div className="px-8 pb-8 border-t border-gray-700">
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
                <p className="text-gray-300">{achievement}</p>
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