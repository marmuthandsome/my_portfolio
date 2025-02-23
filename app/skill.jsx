"use client";
import React from "react";
import {
  FaGlobe,
  FaMobile,
  FaNetworkWired,
  FaUserNinja,
  FaShieldVirus,
  FaLock,
  FaTerminal,
  FaEnvelope,
  FaAndroid,
  FaApple,
  FaServer,
  FaBug,
} from "react-icons/fa";

const SecuritySkills = () => {
  const skills = [
    {
      id: "web",
      title: "Web Attack Surface",
      icon: <FaGlobe />,
      description: "Advanced Web Security Testing",
      mainSkills: [
        "Authentication Bypass",
        "SQLi & NoSQLi",
        "SSRF & XXE",
        "OAuth Vulnerabilities",
        "JWT Attacks",
        "IDOR & Access Control",
        "File Upload Vulnerabilities",
        "RCE Techniques",
      ],
      tools: [
        "Burp Suite",
        "Dirsearch",
        "Nuclei",
        "SQLmap",
        "Nmap",
        "Metasploit",
        "Custom Scripts",
      ],
      //   layout: "col-span-2 row-span-2",
      layout: "col-span-2",
      type: "offensive",
    },
    {
      id: "mobile",
      title: "Mobile Security",
      icon: <FaMobile />,
      description: "Mobile Platform Security Assessment",
      platforms: [
        { name: "Android", icon: <FaAndroid /> },
        { name: "iOS", icon: <FaApple /> },
      ],
      mainSkills: [
        "Static Code Analysis",
        "Dynamic Runtime Testing",
        "Binary Reverse Engineering",
        "API Security Testing",
        "Memory Analysis",
        "Data Storage Security",
        "Network Traffic Analysis",
        "Certificate Pinning Bypass",
      ],
      tools: ["MobSF", "Frida", "Objection", "APKTool", "Ghidra"],
      layout: "col-span-2",
      type: "technical",
    },
    {
      id: "network",
      title: "Infrastructure",
      icon: <FaNetworkWired />,
      description: "Network Attack Surface",
      mainSkills: [
        "Network Pivoting",
        "Service Enumeration",
        "Protocol Analysis",
        "Traffic Manipulation",
        "Wireless Assessment",
        "VPN Security Testing",
        "DNS Enumeration",
        "Port Scanning",
      ],
      tools: [
        "Nessus",
        "Wireshark",
        "TCPDump",
        "Nmap",
        "Aircrack-ng",
        "Responder",
      ],
      layout: "col-span-2 row-span-2",
      type: "tactical",
    },
    {
      id: "redteam",
      title: "Red Team Ops",
      icon: <FaUserNinja />,
      description: "Adversary Simulation",
      mainSkills: [
        "C2 Infrastructure",
        "Evasion Techniques",
        "Post Exploitation",
        "Lateral Movement",
        "Active Directory Attacks",
        "Privilege Escalation",
        "Defense Evasion",
        "Persistence Mechanisms",
      ],
      tools: [
        "Cobalt Strike",
        "Empire",
        "Covenant",
        "BloodHound",
        "Mimikatz",
        "PowerSploit",
        "Custom C2 Framework",
        "Advanced Tooling",
      ],
      layout: "col-span-2",
      type: "strategic",
    },
    {
      id: "phishing",
      title: "Social Engineering",
      icon: <FaEnvelope />,
      description: "Human Attack Vector Analysis",
      mainSkills: [
        "Payload Development",
        "Campaign Design",
        "Behavioral Analysis",
        "Target Research",
      ],
      tools: ["Gophish", "SniperPhish"],
      layout: "col-span-2",
      type: "tactical",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#272254] text-[#c9e5e0] py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <FaShieldVirus className="text-3xl text-[#2558a5]" />
            <h2 className="text-4xl font-['Golden_Antique'] cyber-glitch">
              Penetration Testing Skills
            </h2>
          </div>
          <div className="terminal-prompt mb-4">
            <span className="text-[#2558a5]">root@security</span>
            <span className="text-[#ccadd3]">:~/pentest$</span>
            <span className="typing-text">
              {" "}
              enumerate_capabilities --detailed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-bento ${skill.layout} ${skill.type} animate-fade-in`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Effect Layers */}
              <div className="cyber-grid-overlay"></div>
              <div className="cyber-scan-line"></div>
              <div className="pulse-border"></div>

              {/* Corner Decorations */}
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>

              <div className="relative z-10">
                <div className="bento-header">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="icon-ripple"></div>
                  </div>
                </div>

                <h3 className="skill-title cyber-glitch">{skill.title}</h3>
                <p className="skill-desc">{skill.description}</p>

                {skill.platforms && (
                  <div className="platform-flex">
                    {skill.platforms.map((platform, idx) => (
                      <div
                        key={idx}
                        className="platform-badge floating"
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      >
                        <span className="platform-icon pulse">
                          {platform.icon}
                        </span>
                        <span>{platform.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="skills-grid">
                  {skill.mainSkills.map((item, idx) => (
                    <div
                      key={idx}
                      className="ability-tag slide-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <FaLock className="icon pulse" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="tools-flex">
                  {skill.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="tool-tag fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <FaTerminal className="icon blink" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Scanning Effect */}
              <div className="scanning-line">
                <div className="scanner"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySkills;
