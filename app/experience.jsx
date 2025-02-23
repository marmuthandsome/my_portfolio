"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaShieldAlt,
  FaChevronRight,
  FaTerminal,
  FaUserSecret,
  FaNetworkWired,
  FaLock,
  FaBug,
  FaCrosshairs,
  FaServer,
  FaCode,
} from "react-icons/fa";

const Experience = () => {
  const [imageError, setImageError] = useState({});

  const experiences = [
    {
      title: "Penetration Tester Specialist",
      company: "Digiserve by Telkom Indonesia",
      companyLogo: "/companies/digiserve.png",
      companyUrl: "https://digiserve.telkom.co.id",
      period: "Mar 2025 - Current",
      badge: {
        label: "TOP SECRET",
        type: "classified",
      },
      status: {
        label: "ACTIVE",
        type: "active",
      },
      responsibilities: [
        "Advanced Web Security Testing",
        "Network Infrastructure Testing",
        "Mobile App Security Assessment",
        "Security Architecture Review",
      ],
      achievements: ["TBA"],
      tools: ["Burp Suite Pro", "Nessus", "Acunetix", "Custom Tools"],
      icon: <FaUserSecret className="text-2xl" />,
      type: "offensive",
    },
    {
      title: "Sr Penetration Tester",
      company: "Protergo",
      companyLogo: "/companies/protergo.png",
      companyUrl: "https://protergo.id",
      period: "Feb 2024 - Feb 2025",
      badge: {
        label: "CONFIDENTIAL",
        type: "restricted",
      },
      status: {
        label: "COMPLETED",
        type: "completed",
      },
      responsibilities: [
        "Red Team Operations",
        "Web Application Testing",
        "Network Penetration",
        "API Security Testing",
      ],
      achievements: ["TBA"],
      tools: ["Burp Suite Pro", "Metasploit", "Nmap", "OWASP ZAP"],
      icon: <FaCrosshairs className="text-2xl" />,
      type: "tactical",
    },
    {
      title: "Jr Penetration Tester",
      company: "Protergo",
      companyLogo: "/companies/protergo.png",
      companyUrl: "https://protergo.id",
      period: "Oct 2023 - Jan 2024",
      badge: {
        label: "CONFIDENTIAL",
        type: "restricted",
      },
      status: {
        label: "COMPLETED",
        type: "completed",
      },
      responsibilities: [
        "Web App Vulnerability Assessment",
        "Manual Security Testing",
        "Report Writing",
        "Security Documentation",
      ],
      achievements: [
        "Discovered critical vulnerabilities in client applications",
        "Developed automation scripts for testing",
        "Improved testing methodology documentation",
        "Conducted client security assessments",
      ],
      tools: ["Burp Suite", "Nmap", "OWASP ZAP", "Custom Scripts"],
      icon: <FaBug className="text-2xl" />,
      type: "technical",
    },
    {
      title: "Intern Penetration Tester",
      company: "Protergo",
      companyLogo: "/companies/protergo.png",
      companyUrl: "https://protergo.id",
      period: "Feb 2023 - Sep 2023",
      badge: {
        label: "CONFIDENTIAL",
        type: "restricted",
      },
      status: {
        label: "COMPLETED",
        type: "completed",
      },
      responsibilities: [
        "Security Testing Support",
        "Vulnerability Assessment",
        "Documentation",
        "Tool Configuration",
      ],
      achievements: [
        "Completed 20+ web application tests",
        "Contributed to security reports",
        "Learned industry testing methodologies",
        "Participated in team assessments",
      ],
      tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Basic Scripts"],
      icon: <FaTerminal className="text-2xl" />,
      type: "technical",
    },
    // Add more experiences...
  ];

  const handleImageError = (company) => {
    setImageError((prev) => ({ ...prev, [company]: true }));
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#272254] text-[#c9e5e0] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaShieldAlt className="text-4xl text-[#2558a5]" />
            <h2 className="text-5xl font-['Golden_Antique'] cyber-glitch text-white">
              Experience Timeline
            </h2>
          </div>

          <div className="cyber-console inline-flex items-center gap-2 px-6 py-3 rounded-lg">
            {/* <FaTerminal className="text-[#2558a5]" /> */}
            <span className="text-[#2558a5] font-mono">root@security:~$</span>
            <span className="text-[#ccadd3]">:~/experience$</span>
            <span className="text-[#c9e5e0] font-mono typing-animation">
              decrypt_experience --classified
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-[#2558a5]/20 transform -translate-x-1/2"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="cyber-node">
                    <FaChevronRight className="text-[#2558a5]" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={
                    index % 2 === 0 ? "md:col-span-1" : "md:col-start-2"
                  }
                >
                  <div className="cyber-exp-card">
                    {/* Security Status Bar */}
                    <div className="security-status-bar">
                      <div className="flex items-center gap-3">
                        <div className={`status-pill ${exp.status.type}`}>
                          {exp.status.type === "active" && (
                            <div className="w-2 h-2 rounded-full bg-[#2558a5] animate-ping mr-2" />
                          )}
                          {exp.status.label}
                        </div>
                      </div>
                    </div>

                    {/* Card Header */}
                    <div className="card-header mb-6">
                      <div className="flex items-center gap-4">
                        <div className="company-logo-wrapper flex-shrink-0">
                          {!imageError[exp.company] ? (
                            <Image
                              src={exp.companyLogo}
                              alt={exp.company}
                              width={48}
                              height={48}
                              className="rounded-lg company-logo"
                              onError={() => handleImageError(exp.company)}
                              priority
                            />
                          ) : (
                            <div className="fallback-logo">
                              <FaShieldAlt className="text-2xl text-[#2558a5]" />
                            </div>
                          )}
                          <div className="logo-glow"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-['Golden_Antique'] text-[#ccadd3]">
                            {exp.title}
                          </h3>
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c9e5e0] hover:text-[#ccadd3] transition-colors"
                          >
                            {exp.company}
                          </a>
                          <span className="text-sm text-[#2558a5] block">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 mb-3">
                        <FaServer className="text-[#2558a5]" />
                        <span className="font-['Golden_Antique'] text-[#ccadd3]">
                          Operations
                        </span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-white">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="resp-tag">
                            <FaCode className="text-[#2558a5]" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {/* <div className="mb-6">
                      <h4 className="flex items-center gap-2 mb-3">
                        <FaCrosshairs className="text-[#2558a5]" />
                        <span className="font-['Golden_Antique'] text-[#ccadd3]">
                          Success Rate
                        </span>
                      </h4>
                      <div className="achievement-grid">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="achievement-item">
                            <FaChevronRight className="text-[#2558a5]" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    {/* Tools */}
                    {/* <div className="tools-section">
                      <h4 className="flex items-center gap-2 mb-3">
                        <FaTerminal className="text-[#2558a5]" />
                        <span className="font-['Golden_Antique'] text-[#ccadd3]">
                          Arsenal
                        </span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, idx) => (
                          <div key={idx} className="tool-chip">
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div> */}

                    {/* Card Effects */}
                    <div className="card-effects">
                      <div className="corner top-left"></div>
                      <div className="corner top-right"></div>
                      <div className="corner bottom-left"></div>
                      <div className="corner bottom-right"></div>
                      <div className="scan-line"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
