export const workExperience = [
  {
    id: 1,
    company: "CesiumAstro",
    position: "Embedded Software Engineering Intern",
    period: "May 2025 - Aug. 2025",
    location: "Austin, TX",
    description: "Developed QEMU-based flight computer emulator enabling testing for 20+ person software team, reducing hardware dependencies and leading test infrastructure upgrades.",
    tech: ["Embedded Linux", "QEMU", "Python", "Docker"],
    colors: {
      primary: "#3b82f6",
      secondary: "#1e40af",
      accent: "#60a5fa",
      bg: "from-blue-950 to-slate-900"
    },
    achievements: [
      "Built QEMU-based emulator reducing reliance on limited hardware units",
      "Created Dockerized testing environment with custom device trees",
      "Led test infrastructure upgrades during time-sensitive customer release",
      "Wrote technical documentation for cross-team adoption"
    ]
  },
  {
    id: 2,
    company: "Blue Origin",
    position: "Avionics Software Engineering Intern",
    period: "Jan. 2025 - Apr. 2025",
    location: "Kent, WA",
    description: "Implemented GCOV-based structural coverage pipeline for embedded systems, analyzing 15,000+ lines of code to enhance mission reliability with real-time data streaming.",
    tech: ["C++", "C", "GCOV", "UDP/Ethernet"],
    colors: {
      primary: "#1e40af",
      secondary: "#1e3a8a",
      accent: "#3b82f6",
      bg: "from-indigo-950 to-slate-900"
    },
    achievements: [
      "Analyzed 15,000+ lines of code for enhanced mission reliability",
      "Enabled real-time coverage data streaming via UDP over Ethernet",
      "Created architecture documents boosting data rates by 1000×",
      "Delivered cross-functional reports enabling data-driven decisions"
    ]
  },
  {
    id: 3,
    company: "Galileo CDS",
    position: "AI Engineering Intern",
    period: "May 2024 - Sep. 2024",
    location: "Austin, TX - Remote",
    description: "Developed CNN model for MRI image segmentation achieving 91% pseudo-dice score, with data preprocessing pipelines and direct presentation to executive leadership.",
    tech: ["PyTorch", "CNNs", "Python", "MRI Analysis"],
    colors: {
      primary: "#8b5cf6",
      secondary: "#7c3aed",
      accent: "#a78bfa",
      bg: "from-purple-950 to-slate-900"
    },
    achievements: [
      "Achieved 91% pseudo-dice score across multiple test sets",
      "Developed data preprocessing pipelines for augmentation",
      "Trained CNN model for dangerous abnormality detection",
      "Presented results to CEO leading to continued code adoption"
    ]
  }
];