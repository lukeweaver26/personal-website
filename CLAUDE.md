# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Luke Weaver's personal website built with React 19, Vite, and Tailwind CSS 3. The site features a modern terminal-themed design with interactive components showcasing professional experience, projects, and contact information.

## Development Commands

```bash
# Development server (fast with Vite)
npm run dev

# Production build
npm run build

# Preview production build
npm start

# Lint code
npm run lint
```

## Architecture & Structure

### Directory Structure
```
├── index.html               # HTML entry point
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── firebase.json           # Firebase hosting config
├── public/                 # Static assets
│   └── favicon.ico         # Site icon
└── src/                    # Source code
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root App component
    ├── index.css           # Global Tailwind styles
    ├── components/         # All React components
    │   ├── layouts/        # Layout components
    │   │   └── Portfolio.jsx    # Main portfolio layout orchestrator
    │   ├── sections/       # Major page sections
    │   │   ├── Hero.jsx         # Homepage hero section
    │   │   ├── Navigation.jsx   # Top navigation bar
    │   │   ├── ExperienceSection.jsx # Work experience section
    │   │   ├── ProjectsSection.jsx   # Projects showcase section
    │   │   └── AboutSection.jsx      # About me section
    │   ├── ui/             # Reusable UI components
    │   │   ├── Button.jsx       # Reusable button with variants
    │   │   ├── TechBadge.jsx    # Technology skill badges
    │   │   ├── StatusBadge.jsx  # Project status indicators
    │   │   ├── SectionHeader.jsx # Consistent section headers
    │   │   └── ScrollingMarquee.jsx # Animated organization logos
    │   ├── Terminal.jsx    # Interactive terminal component
    │   └── Footer.jsx      # Site footer
    └── data/               # Static data files
        ├── projects.js     # Project portfolio data
        └── experience.js   # Work experience data
```

### Design System
- Uses a terminal/hacker aesthetic with dark theme and neon accents
- Color themes change dynamically based on selected project/experience
- Components use Tailwind CSS for styling
- Icons from Lucide React

### Key Features
- **Interactive Terminal**: Functional bash-like terminal with file system simulation
- **Dynamic Theming**: Color schemes change based on selected content
- **Smooth Scrolling**: Navigation between sections with smooth scroll behavior
- **Responsive Design**: Mobile-friendly responsive layout
- **Content Expansion**: Clickable project and experience cards with detailed views

### State Management
- Uses React hooks (useState, useEffect, useRef) for local state
- Terminal has its own command system and file structure simulation
- Dynamic theme switching based on selected project/experience

### Technologies
- **Build Tool**: Vite 4
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Inter from Google Fonts
- **Linting**: ESLint 8

## Code Conventions

- **Clean Architecture**: Components organized by function (layouts, sections, ui)
- **Separation of Concerns**: Data separated into `src/data/` files for easy maintenance
- **Component Hierarchy**: Layout components orchestrate sections, sections use ui components
- **Reusability**: UI components are generic and reusable across sections
- **File Naming**: Clear, descriptive names that match component functions
- **Import Paths**: Relative imports that reflect the directory structure
- Pure JavaScript (JSX) files for components
- Uses functional components with hooks  
- Inline Tailwind classes for styling
- Terminal component uses ANSI color codes for text formatting
- Event handlers follow React patterns (onClick, onKeyPress, etc.)

## Firebase Integration

The project includes Firebase configuration files:
- `firebase.json` - Firebase hosting configuration
- Note: Firebase setup mentioned in commit history

## Development Notes

- Uses Vite for fast development builds and hot module replacement
- Modern build tool with excellent React support
- ESLint configured with React recommended rules
- PostCSS configured for Tailwind CSS processing
- Optimized production builds with automatic code splitting