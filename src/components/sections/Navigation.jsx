import { Terminal } from 'lucide-react';

const Navigation = ({ theme, scrollToSection, refs = {}, terminalOpen, setTerminalOpen }) => {
  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'Experience', ref: refs.workRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'About', ref: refs.aboutRef }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b shadow-sm" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0' }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: theme.primary + '15', border: `2px solid ${theme.primary}` }}>
              <Terminal style={{ color: theme.primary }} size={24} />
            </div>
            <span className="text-xl font-semibold tracking-tight" style={{ color: theme.text || '#1e293b' }}>
              Luke Weaver
            </span>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="hidden sm:flex space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="font-medium transition-colors duration-200 hover:opacity-80 text-sm lg:text-base"
                  style={{ color: theme.text || '#64748b' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* Terminal button disabled for now - keeping for future iterations
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="px-3 py-2 lg:px-4 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-md"
              style={{ 
                backgroundColor: theme.primary + '15',
                color: theme.primary,
                border: `1px solid ${theme.primary}40`
              }}
            >
              Terminal
            </button>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;