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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaShieldVirus className="text-4xl text-[#2558a5]" />
            <h2 className="text-4xl font-['Golden_Antique'] text-[#ccadd3]">
              Security Clearance
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[rgba(37,88,165,0.1)] border border-[rgba(37,88,165,0.2)]">
            <FaTerminal className="text-[#2558a5]" />
            <span className="text-[#2558a5] font-mono">root@security:</span>
            <span className="text-[#c9e5e0] font-mono typing-text">
              authenticate_credentials --all
            </span>
          </div>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((category) => (
            <div key={category.id} className="cert-card">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[rgba(37,88,165,0.1)] border border-[rgba(37,88,165,0.2)]">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-['Golden_Antique'] text-[#ccadd3]">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <FaKey className="text-[#2558a5]" />
                      <span>Clearance: {category.clearance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications List */}
              <div className="space-y-6">
                {category.certs.map((cert) => (
                  <div key={cert.name} className="cert-item">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg text-[#ccadd3]">
                            {cert.name}
                          </h4>
                          <span
                            className={`cert-type-badge ${cert.type.toLowerCase()}`}
                          >
                            {certTypes[cert.type].badge}
                          </span>
                        </div>
                        <p className="text-sm opacity-80">{cert.title}</p>
                      </div>
                      {cert.issuerLogo && (
                        <Image
                          src={cert.issuerLogo}
                          alt="Issuer"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      )}
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {cert.topics.map((topic, idx) => (
                        <div key={idx} className="topic-tag">
                          <FaCheck className="text-[#2558a5]" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-4 border-t border-[rgba(37,88,165,0.2)]">
                      <div className="flex items-center gap-2 text-sm">
                        <FaServer className="text-[#2558a5]" />
                        <span>{cert.status}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm opacity-70">
                        <FaTerminal className="text-[#2558a5]" />
                        <span>{cert.verificationId}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Effects */}
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
              <div className="scan-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
