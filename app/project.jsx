"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaShieldVirus,
  FaServer,
  FaBug,
  FaFlag,
  FaHackerrank,
  FaLock,
  FaLink,
  FaGithub,
  FaExpand,
  FaProjectDiagram,
  FaTerminal,
} from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [starPosition, setStarPosition] = useState({ x: 0, y: 0 });

  const categories = [
    { id: "all", name: "All Projects", icon: <FaProjectDiagram /> },
    { id: "ctf", name: "CTF Writeups", icon: <FaFlag /> },
    { id: "pentest", name: "Pentest Tools", icon: <FaBug /> },
    { id: "research", name: "Security Research", icon: <FaHackerrank /> },
  ];

  const projects = [
    {
      id: 1,
      title: "WeakSweet",
      category: "pentest",
      status: "ACTIVE",
      securityLevel: "Level 4",
      description:
        "Scans a list of IP addresses for weak SSH algorithms and vulnerabilities related to the SWEET32 attack.",
      technologies: ["Python", "JavaScript", "SQLite", "Docker"],
      features: ["Weak SSH algorithms", "SWEET32 vulnerabilities"],
      links: {
        github: "https://github.com/marmuthandsome/WeakSweet",
      },
      classification: "RED TEAM TOOL",
    },
    {
      id: 2,
      title: "NmapSentinel",
      category: "research",
      status: "STABLE",
      securityLevel: "Level 3",
      description:
        "Enhanced Nmap automation tool with advanced reporting capabilities",
      technologies: ["Python", "Nmap", "XML", "JSON"],
      features: [
        "Automated Scanning",
        "Custom Report Generation",
        "Service Detection",
        "Vulnerability Mapping",
      ],
      links: {
        github: "https://github.com/marmuthandsome/nmapsentinel",
      },
      classification: "RECON TOOL",
    },
    {
      id: 3,
      title: "SecuToolbox",
      category: "pentest",
      status: "ACTIVE",
      securityLevel: "Level 4",
      description: "Security testing toolkit with multiple assessment modules",
      technologies: ["Python", "Bash", "Docker", "REST APIs"],
      features: [
        "Port Scanning",
        "Directory Enumeration",
        "SSL Analysis",
        "DNS Reconnaissance",
      ],
      links: {
        github: "https://github.com/marmuthandsome/SecuToolbox",
      },
      classification: "SECURITY TOOLKIT",
    },
    {
      id: 4,
      title: "VulnSync",
      category: "research",
      status: "BETA",
      securityLevel: "Level 3",
      description:
        "Vulnerability database synchronization and management system",
      technologies: ["Python", "PostgreSQL", "RESTful API", "Docker"],
      features: [
        "CVE Database Sync",
        "Custom Vulnerability Tracking",
        "Risk Assessment",
        "Patch Management",
      ],
      links: {
        github: "https://github.com/marmuthandsome/VulnSync",
      },
      classification: "INTELLIGENCE TOOL",
    },
    {
      id: 5,
      title: "ADB_Frida",
      category: "pentest",
      status: "STABLE",
      securityLevel: "Level 4",
      description: "Android application security testing framework using Frida",
      technologies: ["Python", "Frida", "ADB", "JavaScript"],
      features: [
        "Runtime Analysis",
        "API Hooking",
        "SSL Pinning Bypass",
        "Native Library Analysis",
      ],
      links: {
        github: "https://github.com/marmuthandsome/ADB_Frida",
      },
      classification: "MOBILE SECURITY",
    },
    {
      id: 6,
      title: "TryHackMe Writeups",
      category: "ctf",
      status: "ACTIVE",
      securityLevel: "Level 3",
      description:
        "Detailed walkthrough and solutions for TryHackMe rooms and challenges",
      technologies: [
        "Linux",
        "Penetration Testing",
        "Web Security",
        "Forensics",
      ],
      features: [
        "Room Solutions",
        "Attack Methodologies",
        "Vulnerability Analysis",
        "Exploitation Techniques",
      ],
      links: {
        github: "https://github.com/marmuthandsome/TryHackMe",
      },
      classification: "SECURITY RESEARCH",
    },
    {
      id: 7,
      title: "LetsDefend SOC",
      category: "ctf",
      status: "ACTIVE",
      securityLevel: "Level 3",
      description:
        "Documentation and analysis of SOC analyst challenges and incident response",
      technologies: [
        "SIEM",
        "Incident Response",
        "Threat Hunting",
        "Log Analysis",
      ],
      features: [
        "Incident Analysis",
        "Threat Detection",
        "Alert Investigation",
        "Response Procedures",
      ],
      links: {
        github: "https://github.com/marmuthandsome/LetsDefend",
      },
      classification: "BLUE TEAM",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  // Add animation function for running star
  const animateStarPath = () => {
    const totalDuration = 4000;
    const pathKeyframes = [
      { x: 0, y: 0 }, // Start at top-left
      { x: 100, y: 0 }, // Move to top-right
      { x: 100, y: 100 }, // Move to bottom-right
      { x: 0, y: 100 }, // Move to bottom-left
      { x: 0, y: 0 }, // Back to start
    ];

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) % totalDuration;
      const percentComplete = progress / totalDuration;

      // Calculate current position along the path
      const segment = Math.floor(percentComplete * 4);
      const segmentProgress = (percentComplete * 4) % 1;

      const startPoint = pathKeyframes[segment];
      const endPoint = pathKeyframes[segment + 1];

      setStarPosition({
        x: startPoint.x + (endPoint.x - startPoint.x) * segmentProgress,
        y: startPoint.y + (endPoint.y - startPoint.y) * segmentProgress,
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animateStarPath();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#272254] text-[#c9e5e0] py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaShieldVirus className="text-3xl text-[#2558a5]" />
            <h2 className="text-4xl font-['Golden_Antique'] cyber-glitch">
              Security Projects
            </h2>
          </div>

          {/* Terminal-style category selector */}
          <div className="project-categories mb-8">
            <div className="terminal-prompt mb-4">
              <FaTerminal className="text-[#2558a5]" />
              <span className="text-[#2558a5]">root@security</span>
              <span className="text-[#ccadd3]">:~/project$</span>
              <span className="typing-text"> verify_project --all</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`category-btn ${
                    selectedCategory === cat.id ? "category-active" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="category-icon">{cat.icon}</div>
                  <span>{cat.name}</span>
                  <div className="category-ping"></div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              {/* Star Border */}
              <div className="absolute -inset-[2px] z-0">
                {/* Running Star */}
                <div
                  className="absolute w-2 h-2 bg-[#2558a5] rotate-45 shadow-glow transition-transform"
                  style={{
                    left: `${starPosition.x}%`,
                    top: `${starPosition.y}%`,
                    transform: `translate(-50%, -50%) rotate(45deg)`,
                    boxShadow: "0 0 10px #2558a5, 0 0 20px #2558a5",
                  }}
                />

                {/* Corner Stars */}
                <div className="absolute top-0 left-0">
                  <div className="w-2 h-2 bg-[#2558a5] rotate-45" />
                  <div className="absolute top-1 right-0 h-px w-[100px] bg-gradient-to-r from-[#2558a5] to-transparent" />
                  <div className="absolute bottom-0 left-1 w-px h-[100px] bg-gradient-to-b from-[#2558a5] to-transparent" />
                </div>
                <div className="absolute top-0 right-0">
                  <div className="w-2 h-2 bg-[#2558a5] rotate-45" />
                  <div className="absolute top-1 left-0 h-px w-[100px] bg-gradient-to-l from-[#2558a5] to-transparent" />
                  <div className="absolute bottom-0 right-1 w-px h-[100px] bg-gradient-to-b from-[#2558a5] to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0">
                  <div className="w-2 h-2 bg-[#2558a5] rotate-45" />
                  <div className="absolute bottom-1 right-0 h-px w-[100px] bg-gradient-to-r from-[#2558a5] to-transparent" />
                  <div className="absolute top-0 left-1 w-px h-[100px] bg-gradient-to-t from-[#2558a5] to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="w-2 h-2 bg-[#2558a5] rotate-45" />
                  <div className="absolute bottom-1 left-0 h-px w-[100px] bg-gradient-to-l from-[#2558a5] to-transparent" />
                  <div className="absolute top-0 right-1 w-px h-[100px] bg-gradient-to-t from-[#2558a5] to-transparent" />
                </div>

                {/* Connecting Lines */}
                <div className="absolute top-0 left-[100px] right-[100px] h-px bg-gradient-to-r from-transparent via-[#2558a5] to-transparent" />
                <div className="absolute bottom-0 left-[100px] right-[100px] h-px bg-gradient-to-r from-transparent via-[#2558a5] to-transparent" />
                <div className="absolute left-0 top-[100px] bottom-[100px] w-px bg-gradient-to-b from-transparent via-[#2558a5] to-transparent" />
                <div className="absolute right-0 top-[100px] bottom-[100px] w-px bg-gradient-to-b from-transparent via-[#2558a5] to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 bg-[#272254]">
                {/* Star Border Corners */}
                <div className="star-corners">
                  {/* Top Left Corner */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="star-corner-tl"></div>
                  </div>

                  {/* Top Right Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="star-corner-tr"></div>
                  </div>

                  {/* Bottom Left Corner */}
                  <div className="absolute bottom-0 left-0 w-16 h-16">
                    <div className="star-corner-bl"></div>
                  </div>

                  {/* Bottom Right Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="star-corner-br"></div>
                  </div>
                </div>

                {/* Static Effect Overlays */}
                <div className="static-effect"></div>
                <div className="static-lines"></div>
                <div className="glitch-overlay"></div>

                {/* Security Classification Banner */}
                <div className="classification-banner">
                  <FaLock className="text-[#2558a5]" />
                  <span>{project.classification}</span>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Technologies */}
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="features-grid">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FaServer className="text-[#2558a5]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="project-link github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        <span>Repository</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="project-link demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="corner-bracket top-left"></div>
                <div className="corner-bracket top-right"></div>
                <div className="corner-bracket bottom-left"></div>
                <div className="corner-bracket bottom-right"></div>
                <div className="scan-line"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
