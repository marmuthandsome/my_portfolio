"use client";
import React, { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaMobile,
  FaGlobe,
  FaNetworkWired,
  FaUserSecret,
  FaFingerprint,
  FaShieldVirus,
  FaKey,
  FaLock,
  FaUnlock,
  FaCheck,
  FaTerminal,
  FaServer,
} from "react-icons/fa";
import Image from "next/image";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [verifying, setVerifying] = useState(false);

  const certTypes = {
    Professional: {
      color: "#2558a5",
      badge: "PRO",
      description: "Professional Level Certification",
    },
    Practitioner: {
      color: "#ccadd3",
      badge: "PRAC",
      description: "Practitioner Level Certification",
    },
    Associate: {
      color: "#c9e5e0",
      badge: "ASSOC",
      description: "Associate Level Certification",
    },
    Essentials: {
      color: "#8a7d9b",
      badge: "ESS",
      description: "Essential Level Certification",
    },
  };

  const certifications = [
    {
      id: "mobile",
      title: "Mobile Security",
      clearance: "Level 5",
      certs: [
        {
          name: "CMPen-IOS",
          title: "Certified Mobile Pentester (CMPen) - iOS",
          issueDate: "2025",
          verificationId: "Certificate ID: 9639185",
          topics: [
            "iOS Runtime Analysis",
            "iOS Application Reversing",
            "iOS Security Architecture",
            "iOS Exploit Development",
          ],
          status: "VERIFIED",
          type: "Professional",
          certImage: "/certifications/cmpen-ios.png",
          issuerLogo: "/certifications/cert-stamp-cmpen-ios.png",
        },
        {
          name: "CMPen-Android",
          title: "Certified Mobile Pentester (CMPen) - Android",
          issueDate: "2025",
          verificationId: "Certificate ID: 9627226",
          topics: [
            "Android Malware Analysis",
            "Android Runtime Manipulation",
            "Application Component Security",
            "Android Exploit Creation",
          ],
          status: "VERIFIED",
          type: "Professional",
          certImage: "/certifications/cmpen-android.png",
          issuerLogo: "/certifications/Certified-mobile-pentester-CMPen.png",
        },
      ],
      icon: <FaMobile />,
    },
    {
      id: "network",
      title: "Network & Infrastructure Security",
      clearance: "Level 5",
      certs: [
        {
          name: "CNSP",
          title: "Certified Network Security Practitioner",
          issueDate: "2025",
          verificationId: "Certificate ID: 9618691",
          topics: [
            "Network Infrastructure Security",
            "Vulnerability Assessment",
            "Penetration Testing Methodology",
            "Network Defense Strategies",
            "Security Compliance & Audit",
          ],
          status: "VERIFIED",
          type: "Practitioner",
          certImage: "/certifications/cnsp.png",
          issuerLogo:
            "/certifications/Certified-Network-Security-Practitioner-whbg.png",
        },
        {
          name: "NSE 3",
          title: "Fortinet Network Security Associate",
          issueDate: "2023",
          verificationId: "Certificate ID: Gxy3cyBqkh",
          topics: [
            "Network Security Solutions",
            "Zero Trust Access",
            "Secure SD-WAN",
            "Dynamic Cloud Security",
          ],
          status: "VERIFIED",
          type: "Associate",
          certImage: "/certifications/nse3.png",
          issuerLogo: "/certifications/NSE3-Certification.png",
        },
        {
          name: "NSE 2",
          title: "Fortinet Network Security Associate",
          issueDate: "2023",
          verificationId: "Certificate ID: WBDE1dTMss",
          topics: [
            "Evolution of Cybersecurity",
            "Security Products & Solutions",
            "Security Tools & Controls",
            "FortiGate Basics",
          ],
          status: "VERIFIED",
          type: "Associate",
          certImage: "/certifications/nse2.png",
          issuerLogo: "/certifications/NSE2-Certification.png",
        },
        {
          name: "NSE 1",
          title: "Fortinet Network Security Associate",
          issueDate: "2023",
          verificationId: "Certificate ID: WCzwdXvkB3",
          topics: [
            "Information Security Awareness",
            "Network Security Concepts",
            "Cloud Security Basics",
            "Threat Landscape",
          ],
          status: "VERIFIED",
          type: "Associate",
          certImage: "/certifications/nse1.png",
          issuerLogo: "/certifications/NSE1-Certification.png",
        },
      ],
      icon: <FaNetworkWired />,
    },
    {
      id: "web",
      title: "Web Security",
      clearance: "Level 5",
      certs: [
        {
          name: "EHE",
          title: "Ethical Hacking Essentials",
          issueDate: "2023",
          verificationId: "Certificate ID: 247370",
          topics: [
            "Information Security Fundamentals",
            "Web Application Security",
            "Network Security Basics",
            "System Hacking Essentials",
          ],
          status: "VERIFIED",
          type: "Essentials",
          certImage: "/certifications/ehe.png",
          issuerLogo: "/certifications/EHE-LOGO.png",
        },
      ],
      icon: <FaGlobe />,
    },
  ];

  const simulateVerification = (certId) => {
    setVerifying(true);
    setTimeout(() => {
      setSelectedCert(certId);
      setVerifying(false);
    }, 1500);
  };

  return (
    <section
      id="certifications"
      className="min-h-screen bg-[#272254] text-[#c9e5e0] py-20 px-4"
    >
      {/* Terminal Effect Background */}
      <div className="terminal-background"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <FaShieldVirus className="text-3xl text-[#2558a5]" />
              <h2 className="text-4xl font-['Golden_Antique'] cyber-glitch">
                Security Certifications
              </h2>
            </div>
            <div className="terminal-prompt mb-4">
              <span className="text-[#2558a5]">root@security</span>
              <span className="text-[#ccadd3]">:~/credentials$</span>
              <span className="typing-text"> verify_certificates --all</span>
            </div>
          </div>
          <div className="security-status">
            <FaShieldAlt className="text-[#2558a5] animate-pulse" />
            <span className="font-mono text-sm">
              SECURITY CLEARANCE: VERIFIED
            </span>
          </div>
        </div>
        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((category) => (
            <div key={category.id} className="secure-terminal-card">
              {/* Card Header */}
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="cert-icon">{category.icon}</div>
                  <div>
                    <h3 className="font-['Golden_Antique'] text-xl">
                      {category.title}
                    </h3>
                    <div className="clearance-indicator">
                      <FaKey className="text-[#2558a5]" />
                      <span>Clearance: {category.clearance}</span>
                    </div>
                  </div>
                </div>
                <FaFingerprint className="text-2xl text-[#2558a5]" />
              </div>

              {/* Certifications */}
              <div className="cert-list">
                {category.certs.map((cert) => (
                  <div key={cert.name} className="cert-item">
                    <div className="cert-header">
                      <div className="flex justify-between items-start w-full">
                        <div>
                          <div className="flex items-center gap-3">
                            <h4 className="text-lg text-[#ccadd3]">
                              {cert.name}
                            </h4>
                            <span
                              className={`cert-type-badge ${cert.type.toLowerCase()}`}
                              style={{
                                borderColor: certTypes[cert.type].color,
                              }}
                            >
                              {certTypes[cert.type].badge}
                            </span>
                          </div>
                          <p className="text-sm opacity-80">{cert.title}</p>
                          <p className="text-xs text-[#2558a5] mt-1">
                            {certTypes[cert.type].description}
                          </p>
                        </div>

                        {cert.issuerLogo && (
                          <div className="issuer-logo-container">
                            <Image
                              src={cert.issuerLogo}
                              alt="Issuer Logo"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* {cert.certImage && (
                      <div className="cert-image-container my-4">
                        <Image
                          src={cert.certImage}
                          alt={`${cert.name} Certificate`}
                          width={600}
                          height={400}
                          className="rounded-lg cert-image"
                        />
                        <div className="cert-image-overlay">
                          <span>Click to view</span>
                        </div>
                      </div>
                    )} */}

                    <div className="cert-details">
                      <div className="topics-grid">
                        {cert.topics.map((topic, idx) => (
                          <div key={idx} className="topic-tag">
                            <FaCheck className="text-[#2558a5]" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>

                      <div className="cert-footer">
                        <div className="cert-status">
                          <FaServer className="text-[#2558a5]" />
                          <span>{cert.status}</span>
                        </div>
                        <div className="verify-id">
                          <FaTerminal className="text-[#2558a5]" />
                          <span>{cert.verificationId}</span>
                        </div>
                      </div>

                      <div className="scan-line"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Effects */}
              <div className="holo-effect"></div>
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket top-right"></div>
              <div className="corner-bracket bottom-left"></div>
              <div className="corner-bracket bottom-right"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
