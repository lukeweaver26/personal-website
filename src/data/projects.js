export const projects = [
  {
    id: 1,
    title: "Crossing Guard: 2D Traffic Simulation",
    period: "Aug. 2025 - Present",
    description: "Modular traffic simulation in C++ modeling self-driving car networks with real-time physics, built with Box2D and ImGui for scalable vehicle-to-vehicle communication testing.",
    tech: ["C++", "Box2D", "ImGui", "Physics Simulation"],
    colors: {
      primary: "#0ea5e9",
      secondary: "#0284c7",
      accent: "#38bdf8",
      bg: "from-sky-50 to-blue-100",
      text: "#0c4a6e",
      cardBg: "bg-white",
      border: "border-sky-200"
    },
    status: "In Progress",
    role: "Lead Developer",
    github: "https://github.com/lukeweaver26/crossing_guard",
    details: [
      "Building physics-based vehicle behavior using Box2D engine",
      "Designing modular architecture with separate engines for simulation, graphics, and input",
      "Implementing real-time vehicle-to-vehicle communication protocols"
    ]
  },
  {
    id: 2,
    title: "Lost and Found: UM Engineering Makerspace",
    period: "Nov. 2024 - Jan. 2025",
    description: "Full-stack tool tracking application deployed for daily use by 50+ students, streamlining check-in/check-out processes and improving accountability in the University of Michigan Engineering Makerspace.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    colors: {
      primary: "#10b981",
      secondary: "#059669",
      accent: "#34d399",
      bg: "from-emerald-50 to-green-100",
      text: "#047857",
      cardBg: "bg-white",
      border: "border-emerald-200"
    },
    status: "Live",
    role: "Lead Developer",
    details: [
      "Deployed system used daily by 50+ students",
      "Improved tool access accountability and reduced manual tracking",
      "Providing ongoing support for bug fixes and feature updates"
    ]
  },
  {
    id: 3,
    title: "NASA BIG Idea Challenge",
    period: "May 2024 - Dec. 2024",
    description: "Finalist project developing heat dissipation modeling for Brushless DC Motors with full-scale prototype testing. Selected as one of six teams to present at national NASA conference.",
    tech: ["ROS2", "Docker", "C++", "Python"],
    colors: {
      primary: "#f59e0b",
      secondary: "#d97706",
      accent: "#fbbf24",
      bg: "from-amber-50 to-orange-100",
      text: "#92400e",
      cardBg: "bg-white",
      border: "border-amber-200"
    },
    status: "Completed - Finalist",
    role: "Software & Controls Developer",
    details: [
      "Researched and developed heat dissipation modeling program",
      "Setup Dockerized ROS development environment",
      "Assembled 6ft x 4ft x 4ft driving prototype for testing",
      "Programmed custom ROS nodes for manual and automated rover control"
    ]
  },
  {
    id: 4,
    title: "Fullstack Course Planning Application",
    period: "Apr. 2023 - Dec. 2023",
    description: "System analyzing University of Michigan student schedules to generate major requirement fulfillment reports, built with modular backend architecture and intuitive React frontend.",
    tech: ["React", "Node.js", "Express"],
    colors: {
      primary: "#ef4444",
      secondary: "#dc2626",
      accent: "#f87171",
      bg: "from-red-50 to-rose-100",
      text: "#991b1b",
      cardBg: "bg-white",
      border: "border-red-200"
    },
    status: "Completed",
    role: "Lead Developer",
    github: "https://github.com/lukeweaver26/mplan-frontend",
    githubBackend: "https://github.com/lukeweaver26/mplan-backend",
    details: [
      "Implemented modular, expandable backend using test-driven development",
      "Built intuitive React frontend with live updates",
      "Analyzed student schedules and generated requirement reports"
    ]
  },
  {
    id: 5,
    title: "Fullstack Food Management Application",
    period: "Feb. 2022 - Apr. 2023",
    description: "Collaborative web application for Michigan students, built with a 5-person team using Gantt charts and objective trees for project management.",
    tech: ["Node.js", "Express", "React", "Team Collaboration"],
    colors: {
      primary: "#06b6d4",
      secondary: "#0891b2",
      accent: "#67e8f9",
      bg: "from-cyan-50 to-teal-100",
      text: "#155e75",
      cardBg: "bg-white",
      border: "border-cyan-200"
    },
    status: "Completed",
    role: "Lead Backend Developer",
    details: [
      "Collaborated with 5 team members on full project lifecycle",
      "Built prototype backend with Node.js and Express.js",
      "Delivered product presentation to audience of 50 people"
    ]
  }
];