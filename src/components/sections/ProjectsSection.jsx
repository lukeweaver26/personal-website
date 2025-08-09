import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import StatusBadge from '../ui/StatusBadge';

const ProjectCard = ({ project, theme, isSelected, onClick, index, isExpandedView = false, isCompactView = false }) => {
  const isRightColumn = index % 2 === 1; // Check if card is in right column
  
  // Compact view for cards shown below expanded project
  if (isCompactView) {
    return (
      <div 
        className="bg-black/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-all cursor-pointer hover:scale-[1.02] p-4"
        onClick={() => onClick(project)}
      >
        <div className="mb-3">
          <h4 className="text-sm font-bold mb-1">{project.title}</h4>
          <p className="text-gray-400 text-xs mb-2">{project.period}</p>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-gray-300 mb-3 text-xs overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 2).map((tech, i) => (
            <TechBadge key={i} tech={tech} theme={theme} size="small" />
          ))}
          {project.tech.length > 2 && (
            <span className="px-1 py-0.5 text-xs text-gray-400">+{project.tech.length - 2}</span>
          )}
        </div>
      </div>
    );
  }

  // Full expanded view when isExpandedView is true
  if (isExpandedView) {
    return (
      <div 
        className="bg-black/30 rounded-lg border-2 p-8 w-full cursor-pointer"
        style={{ borderColor: theme.primary }}
        onClick={() => onClick(project)}
      >
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.period}</p>
              <StatusBadge status={project.status} />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick(project);
              }}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ArrowRight 
                className="text-gray-600 rotate-90" 
                size={24} 
              />
            </button>
          </div>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <TechBadge key={i} tech={tech} theme={theme} />
            ))}
          </div>
        </div>

        {project.videoUrl && (
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
              Project Demo
            </h4>
            <div 
              className="relative rounded-lg overflow-hidden bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                className="w-full h-64 md:h-80 object-cover"
                controls
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DbGljayB0byBQbGF5IERlbW88L3RleHQ+Cjwvc3ZnPgo="
                onClick={(e) => e.stopPropagation()}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

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
    );
  }

  // Default grid view
  return (
    <div 
      className={`relative bg-black/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-all cursor-pointer ${
        isSelected ? 'ring-2 border-opacity-100 z-20' : 'hover:scale-[1.02]'
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
      <div 
        className={`absolute top-0 bg-black/95 rounded-lg border-2 p-8 w-full transition-all duration-300 ${
          isRightColumn ? 'md:right-0 md:w-[calc(200%+1.5rem)]' : 'md:left-0 md:w-[calc(200%+1.5rem)]'
        }`}
        style={{ 
          borderColor: theme.primary,
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{project.period}</p>
              <StatusBadge status={project.status} />
            </div>
            <ArrowRight 
              className="text-gray-600 rotate-90" 
              size={20} 
            />
          </div>
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <TechBadge key={i} tech={tech} theme={theme} size="small" />
            ))}
          </div>
        </div>
          {project.videoUrl && (
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
          )}

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
      )}
    </div>
  );
};

const ProjectsSection = ({ 
  projects, 
  theme, 
  selectedProject, 
  handleProjectClick,
  sectionRef 
}) => {
  // If a project is selected, show it first, then all others
  const reorderedProjects = selectedProject 
    ? [selectedProject, ...projects.filter(p => p.id !== selectedProject.id)]
    : projects;

  return (
    <section ref={sectionRef} className="min-h-screen pt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeader 
          title="Projects"
          subtitle="Personal and academic projects showcasing diverse technical skills"
          theme={theme}
        />
        
        {selectedProject ? (
          <div className="space-y-8">
            {/* Expanded selected project */}
            <div className="w-full">
              <ProjectCard
                key={selectedProject.id}
                project={selectedProject}
                theme={theme}
                isSelected={true}
                onClick={handleProjectClick}
                index={0}
                isExpandedView={true}
              />
            </div>
            
            {/* Other projects in grid below */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Other Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.filter(p => p.id !== selectedProject.id).map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    theme={theme}
                    isSelected={false}
                    onClick={handleProjectClick}
                    index={index}
                    isCompactView={true}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                theme={theme}
                isSelected={false}
                onClick={handleProjectClick}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;