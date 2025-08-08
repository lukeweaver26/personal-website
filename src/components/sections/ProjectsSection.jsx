import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import StatusBadge from '../ui/StatusBadge';

const ProjectCard = ({ project, theme, isSelected, onClick }) => (
  <div 
    className={`bg-black/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-all cursor-pointer ${
      isSelected ? 'md:col-span-2 ring-2 border-opacity-100' : 'hover:scale-[1.02]'
    }`}
    style={{
      ringColor: isSelected ? theme.primary : 'transparent',
      borderColor: isSelected ? theme.primary : undefined
    }}
    onClick={() => onClick(project)}
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-2">{project.period}</p>
          <StatusBadge status={project.status} />
        </div>
        <ArrowRight 
          className={`text-gray-600 transition-transform ${
            isSelected ? 'rotate-90' : ''
          }`} 
          size={20} 
        />
      </div>
      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tech, i) => (
          <TechBadge key={i} tech={tech} theme={theme} size="small" />
        ))}
        {project.tech.length > 3 && !isSelected && (
          <span className="px-2 py-1 text-xs text-gray-400">+{project.tech.length - 3}</span>
        )}
      </div>

      {isSelected && project.tech.length > 3 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.slice(3).map((tech, i) => (
            <TechBadge key={i} tech={tech} theme={theme} size="small" />
          ))}
        </div>
      )}
    </div>

    {isSelected && (
      <div className="px-8 pb-8 border-t border-gray-700">
        <div className="pt-6">
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
              Project Demo
            </h4>
            <div className="relative rounded-lg overflow-hidden bg-black/40">
              <video 
                className="w-full h-64 md:h-80 object-cover"
                controls
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DbGljayB0byBQbGF5IERlbW88L3RleHQ+Cjwvc3ZnPgo="
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
                Project Details
              </h4>
              <div className="space-y-3">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: theme.primary }}
                    ></div>
                    <p className="text-gray-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-80">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold" style={{ color: theme.primary }}>
                  Links
                </h4>
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    className="p-2 rounded-lg border transition-all hover:scale-110"
                    style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github style={{ color: theme.primary }} size={20} />
                  </a>
                  {project.status === 'Live' && (
                    <a 
                      href={project.live}
                      className="p-2 rounded-lg border transition-all hover:scale-110"
                      style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink style={{ color: theme.primary }} size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4">
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Role:</span>
                    <p className="text-white font-semibold">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Duration:</span>
                    <p className="text-white font-semibold">{project.period}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Status:</span>
                    <p className="text-white font-semibold">{project.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

const ProjectsSection = ({ 
  projects, 
  theme, 
  selectedProject, 
  handleProjectClick,
  sectionRef 
}) => (
  <section ref={sectionRef} className="min-h-screen pt-20">
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader 
        title="Projects"
        subtitle="Personal and academic projects showcasing diverse technical skills"
        theme={theme}
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            theme={theme}
            isSelected={selectedProject && selectedProject.id === project.id}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;