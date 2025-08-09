import { ArrowRight, Github } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import StatusBadge from '../ui/StatusBadge';

const ProjectCard = ({ project, theme, isSelected, onClick, index, isExpandedView = false, isCompactView = false }) => {
  const isRightColumn = index % 2 === 1; // Check if card is in right column
  
  // Compact view for cards shown below expanded project
  if (isCompactView) {
    return (
      <div 
        className="bg-white/80 backdrop-blur-sm rounded-xl border shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] p-4"
        style={{ 
          borderColor: theme.border?.replace('border-', '') || '#e2e8f0',
          backgroundColor: theme.cardBg || 'white'
        }}
        onClick={() => onClick(project)}
      >
        <div className="mb-3">
          <h4 className="text-sm font-bold mb-1" style={{ color: theme.text || '#1e293b' }}>{project.title}</h4>
          <p className="text-xs mb-2" style={{ color: theme.text || '#64748b' }}>{project.period}</p>
          <StatusBadge status={project.status} theme={theme} />
        </div>
        <p className="mb-3 text-xs overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          color: theme.text || '#64748b'
        }}>{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 2).map((tech, i) => (
            <TechBadge key={i} tech={tech} theme={theme} size="small" />
          ))}
          {project.tech.length > 2 && (
            <span className="px-1 py-0.5 text-xs" style={{ color: theme.text || '#64748b' }}>+{project.tech.length - 2}</span>
          )}
        </div>
      </div>
    );
  }

  // Full expanded view when isExpandedView is true
  if (isExpandedView) {
    return (
      <div 
        className="bg-white/90 backdrop-blur-sm rounded-2xl border-2 p-8 w-full cursor-pointer shadow-xl"
        style={{ 
          borderColor: theme.primary,
          backgroundColor: theme.cardBg || 'white'
        }}
        onClick={() => onClick(project)}
      >
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: theme.text || '#1e293b' }}>{project.title}</h3>
              <p className="mb-2" style={{ color: theme.text || '#64748b' }}>{project.period}</p>
              <StatusBadge status={project.status} theme={theme} />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick(project);
              }}
              className="p-2 rounded-lg transition-colors hover:shadow-md"
              style={{ 
                backgroundColor: theme.primary + '10',
                border: `1px solid ${theme.primary}20`
              }}
            >
              <ArrowRight 
                className="rotate-90"
                style={{ color: theme.primary }} 
                size={24} 
              />
            </button>
          </div>
          <p className="mb-4 leading-relaxed" style={{ color: theme.text || '#64748b' }}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <TechBadge key={i} tech={tech} theme={theme} />
            ))}
          </div>
        </div>

        {project.videoUrl && (
          <div className="mb-6 lg:mb-8">
            <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4" style={{ color: theme.primary }}>
              Project Demo
            </h4>
            <div 
              className="relative rounded-lg overflow-hidden bg-gray-100 border"
              style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0' }}
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                controls
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSIjNjQ3NDhiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2xpY2sgdG8gUGxheSBEZW1vPC90ZXh0Pgo8L3N2Zz4K"
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
            <div className="space-y-3 mb-6">
              {project.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <p style={{ color: theme.text || '#64748b' }}>{detail}</p>
                </div>
              ))}
            </div>
            
            {(project.github || project.githubBackend) && (
              <div>
                {/* Single repository - inline with title */}
                {(project.github && !project.githubBackend) ? (
                  <div className="flex items-center space-x-3">
                    <h4 className="text-xl font-bold" style={{ color: theme.primary }}>
                      GitHub
                    </h4>
                    <a 
                      href={project.github}
                      className="p-2 rounded-lg border transition-all hover:scale-110"
                      style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github style={{ color: theme.primary }} size={20} />
                    </a>
                  </div>
                ) : (
                  /* Multiple repositories - below title */
                  <>
                    <h4 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
                      GitHub
                    </h4>
                    <div className="flex items-center space-x-6">
                      {project.github && (
                        <div className="flex items-center space-x-2">
                          <a 
                            href={project.github}
                            className="p-2 rounded-lg border transition-all hover:scale-110"
                            style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github style={{ color: theme.primary }} size={20} />
                          </a>
                          <span className="text-sm font-medium" style={{ color: theme.text || '#64748b' }}>
                            Frontend
                          </span>
                        </div>
                      )}
                      {project.githubBackend && (
                        <div className="flex items-center space-x-2">
                          <a 
                            href={project.githubBackend}
                            className="p-2 rounded-lg border transition-all hover:scale-110"
                            style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github style={{ color: theme.primary }} size={20} />
                          </a>
                          <span className="text-sm font-medium" style={{ color: theme.text || '#64748b' }}>
                            Backend
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          
          <div className="lg:w-80">
            <div className="rounded-lg p-4 border" style={{ 
              backgroundColor: theme.primary + '10',
              borderColor: theme.primary + '20'
            }}>
              <div className="space-y-3">
                <div>
                  <span className="text-sm" style={{ color: theme.text || '#64748b' }}>Role:</span>
                  <p className="font-semibold" style={{ color: theme.text || '#1e293b' }}>{project.role}</p>
                </div>
                <div>
                  <span className="text-sm" style={{ color: theme.text || '#64748b' }}>Duration:</span>
                  <p className="font-semibold" style={{ color: theme.text || '#1e293b' }}>{project.period}</p>
                </div>
                <div>
                  <span className="text-sm" style={{ color: theme.text || '#64748b' }}>Status:</span>
                  <p className="font-semibold" style={{ color: theme.text || '#1e293b' }}>{project.status}</p>
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
      className={`relative bg-white/80 backdrop-blur-sm rounded-xl border shadow-lg hover:shadow-xl transition-all cursor-pointer ${
        isSelected ? 'ring-2 border-opacity-100 z-20' : 'hover:scale-[1.02]'
      }`}
      style={{
        ringColor: isSelected ? theme.primary : 'transparent',
        borderColor: isSelected ? theme.primary : (theme.border?.replace('border-', '') || '#e2e8f0'),
        backgroundColor: theme.cardBg || 'white'
      }}
      onClick={() => onClick(project)}
    >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: theme.text || '#1e293b' }}>{project.title}</h3>
          <p className="text-sm mb-2" style={{ color: theme.text || '#64748b' }}>{project.period}</p>
          <StatusBadge status={project.status} theme={theme} />
        </div>
        <ArrowRight 
          className={`transition-transform ${
            isSelected ? 'rotate-90' : ''
          }`}
          style={{ color: theme.primary }}
          size={20} 
        />
      </div>
      <p className="mb-4 text-sm" style={{ color: theme.text || '#64748b' }}>{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tech, i) => (
          <TechBadge key={i} tech={tech} theme={theme} size="small" />
        ))}
        {project.tech.length > 3 && !isSelected && (
          <span className="px-2 py-1 text-xs" style={{ color: theme.text || '#64748b' }}>+{project.tech.length - 3}</span>
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
        className={`absolute top-0 bg-white/95 backdrop-blur-md rounded-xl border-2 p-6 lg:p-8 w-full transition-all duration-300 shadow-2xl ${
          isRightColumn ? 'lg:right-0 lg:w-[calc(200%+1.5rem)]' : 'lg:left-0 lg:w-[calc(200%+1.5rem)]'
        }`}
        style={{ 
          borderColor: theme.primary,
          backgroundColor: theme.cardBg || 'white'
        }}
      >
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: theme.text || '#1e293b' }}>{project.title}</h3>
              <p className="text-sm mb-2" style={{ color: theme.text || '#64748b' }}>{project.period}</p>
              <StatusBadge status={project.status} theme={theme} />
            </div>
            <ArrowRight 
              className="rotate-90" 
              style={{ color: theme.primary }}
              size={20} 
            />
          </div>
          <p className="mb-4 text-sm" style={{ color: theme.text || '#64748b' }}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <TechBadge key={i} tech={tech} theme={theme} size="small" />
            ))}
          </div>
        </div>
          {project.videoUrl && (
            <div className="mb-6 lg:mb-8">
              <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4" style={{ color: theme.primary }}>
                Project Demo
              </h4>
              <div className="relative rounded-lg overflow-hidden bg-gray-100 border" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0' }}>
                <video 
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  controls
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSIjNjQ3NDhiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2xpY2sgdG8gUGxheSBEZW1vPC90ZXh0Pgo8L3N2Zz4K"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1">
              <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4" style={{ color: theme.primary }}>
                Project Details
              </h4>
              <div className="space-y-3 mb-6">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: theme.primary }}
                    ></div>
                    <p className="text-sm lg:text-base" style={{ color: theme.text || '#64748b' }}>{detail}</p>
                  </div>
                ))}
              </div>
              
              {(project.github || project.githubBackend) && (
                <div>
                  {/* Single repository - inline with title */}
                  {(project.github && !project.githubBackend) ? (
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg lg:text-xl font-bold" style={{ color: theme.primary }}>
                        GitHub
                      </h4>
                      <a 
                        href={project.github}
                        className="p-2 rounded-lg border transition-all hover:scale-110"
                        style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github style={{ color: theme.primary }} size={20} />
                      </a>
                    </div>
                  ) : (
                    /* Multiple repositories - below title */
                    <>
                      <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4" style={{ color: theme.primary }}>
                        GitHub
                      </h4>
                      <div className="flex items-center space-x-6">
                        {project.github && (
                          <div className="flex items-center space-x-2">
                            <a 
                              href={project.github}
                              className="p-2 rounded-lg border transition-all hover:scale-110"
                              style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github style={{ color: theme.primary }} size={20} />
                            </a>
                            <span className="text-sm font-medium" style={{ color: theme.text || '#64748b' }}>
                              Frontend
                            </span>
                          </div>
                        )}
                        {project.githubBackend && (
                          <div className="flex items-center space-x-2">
                            <a 
                              href={project.githubBackend}
                              className="p-2 rounded-lg border transition-all hover:scale-110"
                              style={{ borderColor: theme.primary + '40', backgroundColor: theme.primary + '10' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github style={{ color: theme.primary }} size={20} />
                            </a>
                            <span className="text-sm font-medium" style={{ color: theme.text || '#64748b' }}>
                              Backend
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="lg:w-80">
              <div className="rounded-lg p-4 border" style={{ 
                backgroundColor: theme.primary + '10',
                borderColor: theme.primary + '20'
              }}>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm" style={{ color: theme.text || '#64748b' }}>Role:</span>
                    <p className="font-semibold" style={{ color: theme.text || '#1e293b' }}>{project.role}</p>
                  </div>
                  <div>
                    <span className="text-sm" style={{ color: theme.text || '#64748b' }}>Duration:</span>
                    <p className="font-semibold" style={{ color: theme.text || '#1e293b' }}>{project.period}</p>
                  </div>
                  <div>
                    <span className="text-sm" style={{ color: theme.text || '#64748b' }}>Status:</span>
                    <p className="font-semibold" style={{ color: theme.text || '#1e293b' }}>{project.status}</p>
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
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.text || '#64748b' }}>Other Projects</h3>
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