import { Terminal } from 'lucide-react';

const Navigation = ({ theme, scrollToSection, refs = {}, terminalOpen, setTerminalOpen }) => {
  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'Experience', ref: refs.workRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'About', ref: refs.aboutRef }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal style={{ color: theme.primary }} size={24} />
            <span className="text-xl font-mono font-bold" style={{ color: theme.primary }}>
              Luke Weaver
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="hover:text-gray-300 transition-colors text-gray-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="px-3 py-2 bg-black/80 border border-gray-600 rounded text-green-400 font-mono text-sm hover:bg-black/90 transition-colors"
            >
              $ terminal
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;