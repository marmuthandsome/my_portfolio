"use client";
import React, { useState, useEffect } from "react";
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
  const [selectedChannel, setSelectedChannel] = useState(null);

  const securityPhases = [
    "INITIALIZING SECURE CONNECTION",
    "VERIFYING ENCRYPTION PROTOCOLS",
    "ESTABLISHING COMM CHANNELS",
    "ACCESS GRANTED",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSecurityPhase((prev) => (prev + 1) % securityPhases.length);
    }, 2000);
    return () => clearInterval(timer);
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
      className="min-h-screen bg-[#272254] text-[#c9e5e0] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Security Console Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="security-shield">
              <FaShieldAlt className="text-4xl text-[#2558a5]" />
              <div className="shield-ping"></div>
            </div>
            <h2 className="text-4xl font-['Golden_Antique'] text-[#ccadd3]">
              Secure Communication Hub
            </h2>
          </div>

          <div className="cyber-terminal">
            <div className="terminal-header">
              <FaTerminal className="text-[#2558a5]" />
              <span className="text-[#2558a5] font-mono">system$</span>
              <span className="text-[#c9e5e0] font-mono">
                {securityPhases[securityPhase]}
                <span className="blink">_</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="channel-card"
              onMouseEnter={() => setSelectedChannel(channel.id)}
              onMouseLeave={() => setSelectedChannel(null)}
            >
              {/* Security Status */}
              <div className="channel-security">
                <div className="security-badge">
                  <FaLock className="text-[#2558a5]" />
                  <span>{channel.security}</span>
                </div>
                <div className="port-info">
                  <FaNetworkWired className="text-[#2558a5]" />
                  <span>PORT:{channel.port}</span>
                </div>
              </div>

              {/* Channel Content */}
              <div className="channel-content">
                <div className="icon-wrapper" style={{ color: channel.color }}>
                  {channel.icon}
                  <div className="icon-scan"></div>
                </div>

                <div className="channel-info">
                  <h3>{channel.title}</h3>
                  {channel.link ? (
                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-link"
                    >
                      <span>{channel.value}</span>
                      <FaChevronRight />
                    </a>
                  ) : (
                    <div className="channel-value">{channel.value}</div>
                  )}
                </div>

                {/* Protocol Info */}
                <div className="protocol-info">
                  <div className="protocol-badge">
                    <FaServer className="text-[#2558a5]" />
                    <span>{channel.protocol}</span>
                  </div>
                  <div className="access-badge">
                    <span>{channel.accessLevel}</span>
                  </div>
                </div>
              </div>

              {/* Card Effects */}
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket top-right"></div>
              <div className="corner-bracket bottom-left"></div>
              <div className="corner-bracket bottom-right"></div>
              <div className="scan-line"></div>
            </motion.div>
          ))}
        </div>

        {/* Security Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="security-footer">
            <FaFingerprint className="text-[#2558a5]" />
            <span className="font-mono">COMMUNICATION CHANNELS SECURED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
