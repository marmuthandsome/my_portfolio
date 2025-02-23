"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTerminal,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaFingerprint,
  FaChevronRight,
} from "react-icons/fa";

const Contact = () => {
  const [securityPhase, setSecurityPhase] = useState(0);
  const [isSecured, setIsSecured] = useState(false);
  const [runningDots, setRunningDots] = useState("");

  const securityPhases = [
    { text: "INITIALIZING SECURE PROTOCOLS", delay: 2000, color: "#ccadd3" },
    { text: "SCANNING FOR VULNERABILITIES", delay: 1500, color: "#2558a5" },
    { text: "ESTABLISHING ENCRYPTED TUNNEL", delay: 1800, color: "#c9e5e0" },
    { text: "VERIFYING CERTIFICATES", delay: 1600, color: "#2558a5" },
    { text: "AUTHENTICATING CHANNELS", delay: 1700, color: "#ccadd3" },
    { text: "SECURE CONNECTION ESTABLISHED", delay: 2000, color: "#4CAF50" },
  ];

  // Dots animation effect
  useEffect(() => {
    if (!isSecured) {
      const dotsInterval = setInterval(() => {
        setRunningDots((prev) => (prev.length >= 3 ? "" : prev + "."));
      }, 500);

      return () => clearInterval(dotsInterval);
    }
  }, [isSecured]);

  // Security phases animation
  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const runSecurityCheck = () => {
      if (currentIndex < securityPhases.length - 1) {
        timeout = setTimeout(() => {
          setSecurityPhase(currentIndex);
          currentIndex++;
          runSecurityCheck();
        }, securityPhases[currentIndex].delay);
      } else {
        setSecurityPhase(securityPhases.length - 1);
        setTimeout(() => setIsSecured(true), 1000);
      }
    };

    runSecurityCheck();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const contactChannels = [
    {
      id: "email",
      title: "Encrypted Email",
      value: "ferrynurqadar14@gmail.com",
      icon: <FaEnvelope />,
      security: "PGP ENCRYPTED",
      protocol: "TLS 1.3",
      port: "443",
      accessLevel: "SECURE",
      color: "#2558a5",
    },
    {
      id: "github",
      title: "GitHub Access",
      value: "@marmuthandsome",
      link: "https://github.com/marmuthandsome",
      icon: <FaGithub />,
      security: "SSH",
      protocol: "HTTPS",
      port: "22",
      accessLevel: "PUBLIC",
      color: "#ccadd3",
    },
    {
      id: "linkedin",
      title: "LinkedIn Network",
      value: "ferrynurqadar",
      link: "https://www.linkedin.com/in/ferrynurqadar/",
      icon: <FaLinkedin />,
      security: "VERIFIED",
      protocol: "TLS 1.3",
      port: "443",
      accessLevel: "SECURE",
      color: "#2558a5",
    },
    {
      id: "twitter",
      title: "X Feed",
      value: "@marmuthandsome",
      link: "https://x.com/marmuthandsome",
      icon: <FaTwitter />,
      security: "STANDARD",
      protocol: "TLS 1.2",
      port: "443",
      accessLevel: "PUBLIC",
      color: "#c9e5e0",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#272254] text-[#c9e5e0] py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-10"></div>
      <div className="absolute inset-0 cyber-particles opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Title Group */}
          <div className="cyber-shield relative inline-flex items-center gap-3 mb-6">
            <FaShieldAlt className="text-4xl text-[#2558a5]" />
            <h2 className="text-4xl font-['Golden_Antique'] text-[#ccadd3] cyber-glitch-effect">
              Secure Communications
            </h2>
            <div className="shield-ping"></div>
          </div>

          {/* Terminal Box */}
          <div className="cyber-terminal-box mx-auto max-w-xl bg-[#272254]/80 border border-[#2558a5]/30 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <FaTerminal
                className={`text-[#2558a5] ${
                  isSecured ? "text-green-500" : ""
                }`}
              />
              <span className="text-[#2558a5] font-mono">root@secure:~$</span>
              <span
                className="text-[#c9e5e0] font-mono typing-animation"
                style={{ color: securityPhases[securityPhase].color }}
              >
                {securityPhases[securityPhase].text}
                {!isSecured && runningDots}
              </span>
              {isSecured && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-green-500"
                >
                  ✓
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Only show contact cards after security check is complete */}
        {isSecured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {contactChannels.map((channel, index) => (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="secure-channel-card"
              >
                {/* Security Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="security-clearance">
                    <FaLock className="text-[#2558a5] mr-2" />
                    <span className="text-xs font-mono">
                      {channel.security}
                    </span>
                  </div>
                  <div className="port-status">
                    <FaNetworkWired className="text-[#2558a5] mr-2" />
                    <span className="text-xs font-mono">
                      PORT: {channel.port}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className="cyber-icon-wrapper">
                    {channel.icon}
                    <div className="icon-glow"></div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-['Golden_Antique'] text-[#ccadd3]">
                      {channel.title}
                    </h3>
                    {channel.link ? (
                      <a
                        href={channel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secure-link group"
                      >
                        <span>{channel.value}</span>
                        <FaChevronRight className="transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="secure-value">{channel.value}</div>
                    )}
                  </div>
                </div>

                {/* Visual Effects */}
                <div className="corner-bracket top-left"></div>
                <div className="corner-bracket top-right"></div>
                <div className="corner-bracket bottom-left"></div>
                <div className="corner-bracket bottom-right"></div>
                <div className="scan-line"></div>
                <div className="static-effect"></div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
