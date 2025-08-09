import { Terminal, Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ theme }) => (
  <footer className="border-t bg-white/60 backdrop-blur-sm" style={{ borderColor: theme.border?.replace('border-', '') || '#e2e8f0' }}>
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="p-2 rounded-lg" style={{ backgroundColor: theme.primary + '15', border: `1px solid ${theme.primary}40` }}>
            <Terminal style={{ color: theme.primary }} size={18} />
          </div>
          <span className="font-semibold" style={{ color: theme.primary }}>Luke Weaver</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm" style={{ color: theme.text || '#64748b' }}>© 2025 Luke Weaver</span>
            <span className="text-sm opacity-50" style={{ color: theme.text || '#64748b' }}>•</span>
            <span className="text-sm" style={{ color: theme.text || '#64748b' }}>✨ Built with Claude Sonnet 4</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="mailto:ljweaver@umich.edu" 
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ 
                color: theme.primary,
                backgroundColor: theme.primary + '10'
              }}
            >
              <Mail size={16} />
            </a>
            <a 
              href="https://linkedin.com/in/lukejweaver" 
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ 
                color: theme.primary,
                backgroundColor: theme.primary + '10'
              }}
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://github.com/lukeweaver26" 
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ 
                color: theme.primary,
                backgroundColor: theme.primary + '10'
              }}
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;