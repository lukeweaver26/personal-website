import { useState, useEffect, useRef } from 'react';

const Terminal = ({ 
  terminalOpen, 
  terminalHeight, 
  setTerminalHeight,
  workExperience = [],
  projects = [],
  scrollToSection,
  refs = {},
  setTerminalOpen
}) => {
  const [currentDir, setCurrentDir] = useState('/home/luke');
  const [terminalHistory, setTerminalHistory] = useState(['Welcome to Luke\'s Portfolio Terminal! Type "help" for available commands.']);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isResizing, setIsResizing] = useState(false);
  const terminalRef = useRef(null);

  const fileSystem = {
    '/home/luke': {
      type: 'directory',
      contents: ['.', '..', 'experience', 'projects', 'about.txt']
    },
    '/home/luke/experience': {
      type: 'directory',
      contents: ['.', '..', 'cesiumastro.link', 'blue_origin.link', 'galileo_cds.link']
    },
    '/home/luke/projects': {
      type: 'directory',
      contents: ['.', '..', 'crossing_guard.exe', 'lost_and_found.exe', 'nasa_big_idea.exe', 'course_planning.exe', 'food_management.exe']
    },
    '/home/luke/about.txt': {
      type: 'file',
      content: 'Computer Engineering Student at University of Michigan\nEmbedded Systems • AI/ML • Full-Stack Development • Aerospace Software'
    }
  };

  const handleTerminalCommand = (command) => {
    const args = command.trim().split(' ');
    const cmd = args[0].toLowerCase();
    let output = '';

    switch (cmd) {
      case 'help':
        output = 'Available commands:\n  cat - display file contents\n  cd - change directory\n  clear - clear terminal\n  exit - close terminal\n  ls - list directory contents\n  pwd - print working directory\n  ./<file> - execute file';
        break;
      
      case 'ls':
        const dir = fileSystem[currentDir];
        if (dir && dir.type === 'directory') {
          output = dir.contents.map(item => {
            if (item === '.' || item === '..') {
              return `\x1b[34m${item}/\x1b[0m`;
            }
            const itemPath = `${currentDir}/${item}`;
            if (fileSystem[itemPath]?.type === 'directory') {
              return `\x1b[34m${item}/\x1b[0m`;
            } else if (item.endsWith('.link')) {
              return `\x1b[36m${item}\x1b[0m`;
            } else if (item.endsWith('.exe')) {
              return `\x1b[32m${item}\x1b[0m`;
            } else {
              return item;
            }
          }).join('  ');
        } else {
          output = 'ls: cannot access directory';
        }
        break;
      
      case 'pwd':
        output = currentDir;
        break;
      
      case 'cd':
        const targetDir = args[1];
        if (!targetDir || targetDir === '.' || targetDir === '~' || targetDir === '/home/luke') {
          if (targetDir === '.') {
            output = '';
          } else {
            setCurrentDir('/home/luke');
            output = '';
          }
        } else if (targetDir === '..') {
          const pathParts = currentDir.split('/');
          if (pathParts.length > 3) {
            pathParts.pop();
            setCurrentDir(pathParts.join('/'));
          }
          output = '';
        } else {
          const newPath = currentDir === '/home/luke' ? `/home/luke/${targetDir}` : `${currentDir}/${targetDir}`;
          if (fileSystem[newPath]?.type === 'directory') {
            setCurrentDir(newPath);
            output = '';
          } else {
            output = `cd: no such file or directory: ${targetDir}`;
          }
        }
        break;
      
      case 'cat':
        const fileName = args[1];
        if (!fileName) {
          output = 'cat: missing file operand';
        } else {
          const filePath = `${currentDir}/${fileName}`;
          const file = fileSystem[filePath];
          if (file?.type === 'file') {
            output = file.content;
          } else {
            output = `cat: ${fileName}: No such file or directory`;
          }
        }
        break;
      
      case 'clear':
        setTerminalHistory([]);
        return;
      
      case 'exit':
        setTerminalOpen(false);
        return;
      
      default:
        if (command.startsWith('./')) {
          const fileName = command.substring(2);
          
          if (fileName.endsWith('.link')) {
            const expMap = {
              'cesiumastro.link': workExperience[0],
              'blue_origin.link': workExperience[1],
              'galileo_cds.link': workExperience[2]
            };
            const experience = expMap[fileName];
            if (experience) {
              scrollToSection(refs.workRef);
              output = `Opening ${experience.company} experience...`;
            } else {
              output = `bash: ./${fileName}: No such file or directory`;
            }
          } else if (fileName.endsWith('.exe')) {
            const projMap = {
              'crossing_guard.exe': projects[0],
              'lost_and_found.exe': projects[1],
              'nasa_big_idea.exe': projects[2],
              'course_planning.exe': projects[3],
              'food_management.exe': projects[4]
            };
            const project = projMap[fileName];
            if (project) {
              window.open(project.github, '_blank');
              output = `Executing ${fileName}... Opening GitHub repository`;
            } else {
              output = `bash: ./${fileName}: No such file or directory`;
            }
          } else {
            output = `bash: ./${fileName}: Permission denied`;
          }
        } else if (command.trim() === '') {
          output = '';
        } else {
          output = `bash: ${cmd}: command not found`;
        }
    }

    if (output) {
      setTerminalHistory(prev => [...prev, `luke@portfolio:${currentDir.replace('/home/luke', '~')}$ ${command}`, output]);
    } else {
      setTerminalHistory(prev => [...prev, `luke@portfolio:${currentDir.replace('/home/luke', '~')}$ ${command}`]);
    }

    return null;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTerminalCommand(currentCommand);
      setCurrentCommand('');
      setTimeout(() => {
        if (terminalRef.current) {
          const scrollContainer = terminalRef.current.querySelector('.terminal-scroll');
          if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
          }
        }
      }, 0);
    }
  };

  const handleTerminalClick = () => {
    if (terminalRef.current) {
      const input = terminalRef.current.querySelector('input[type="text"]');
      if (input) {
        input.focus();
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newHeight = Math.max(192, Math.min(600, e.clientY - 60));
      setTerminalHeight(newHeight);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  if (!terminalOpen) return null;

  return (
    <div 
      ref={terminalRef}
      className="fixed left-0 right-0 z-30 bg-black/95 backdrop-blur-sm border-b border-gray-700"
      style={{ 
        top: '80px',
        height: terminalHeight 
      }}
    >
      <div 
        className="p-4 overflow-y-auto font-mono text-sm terminal-scroll cursor-text"
        style={{ height: terminalHeight - 8 }}
        onClick={handleTerminalClick}
      >
        <div className="space-y-1">
          {terminalHistory.map((line, index) => (
            <div 
              key={index} 
              className={line.startsWith('luke@portfolio:') ? 'text-green-400' : 'text-gray-300 whitespace-pre-line'}
              dangerouslySetInnerHTML={{ 
                __html: line.replace(/\x1b\[(\d+)m/g, (match, code) => {
                  const colorMap = { '34': 'color: #3b82f6', '36': 'color: #06b6d4', '32': 'color: #10b981', '0': '' };
                  return `<span style="${colorMap[code] || ''}">`;
                }).replace(/\x1b\[0m/g, '</span>')
              }}
            />
          ))}
          <div className="flex items-center text-green-400">
            <span>luke@portfolio:{currentDir.replace('/home/luke', '~')}$ </span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent outline-none flex-1 ml-1 text-white"
              placeholder=""
              autoFocus
            />
          </div>
        </div>
      </div>
      <div
        onMouseDown={handleMouseDown}
        className={`absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize bg-gray-700 border-t border-gray-600 hover:bg-gray-600 transition-colors ${isResizing ? 'bg-gray-600' : ''}`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="w-12 h-1 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;