import { Terminal, Mail, Linkedin } from 'lucide-react';

const Footer = ({ theme }) => (
  <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Terminal style={{ color: theme.primary }} size={20} />
          <span className="font-mono" style={{ color: theme.primary }}>Luke Weaver</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">© 2025 Luke Weaver</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-400 text-sm font-mono">vibe coded with Claude Sonnet 4 ✨</span>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:ljweaver@umich.edu" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/lukejweaver" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;