"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTerminal,
  FaLock,
  FaBars,
  FaTimes,
  FaCrosshairs,
  FaMicrochip,
  FaUserShield,
  FaCertificate,
  FaFingerprint,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [securityStatus, setSecurityStatus] = useState("SYSTEM SECURE");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Security Status Animation
    const statuses = [
      "SCANNING PERIMETER",
      "ANALYZING THREATS",
      "CHECKING ACCESS",
      "SYSTEM SECURE",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setSecurityStatus(statuses[i]);
      i = (i + 1) % statuses.length;
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const links = [
    {
      id: 3,
      link: "#experience",
      name: "Experience",
      status: "ACTIVE",
      icon: <FaUserShield />,
    },
    {
      id: 2,
      link: "#skills",
      name: "Arsenal",
      status: "VERIFIED",
      icon: <FaMicrochip />,
    },
    {
      id: 1,
      link: "#projects",
      name: "Operations",
      status: "SECURE",
      icon: <FaCrosshairs />,
    },
    {
      id: 4,
      link: "#certifications",
      name: "Clearance",
      status: "VALIDATED",
      icon: <FaCertificate />,
    },
    {
      id: 5,
      link: "#contact",
      name: "Secure Line",
      status: "ENCRYPTED",
      icon: <FaFingerprint />,
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-shadow backdrop-blur-md py-2" : "py-4"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-20"></div>
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2558a5] to-transparent"></div>

      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="cyber-shield relative">
              <FaShieldAlt className="text-2xl text-[#2558a5]" />
              <div className="shield-ping"></div>
            </div>
            <div className="cyber-terminal">
              <span className="text-[#2558a5] font-mono text-base">~/</span>
              <span className="glitch-text" data-text="Ferry">
                Ferry
              </span>
              <div className="status-text text-sm">{securityStatus}</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="cyber-nav-link"
                data-status={item.status}
              >
                <span className="icon-wrapper text-[#2558a5]">{item.icon}</span>
                <span className="font-['Golden_Antique'] text-[#c9e5e0]">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="cyber-mobile-btn"
              aria-label="Toggle Menu"
            >
              {nav ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "absolute" : "hidden"
        } top-0 left-0 w-full h-screen bg-[#272254]/95 backdrop-blur-lg`}
      >
        <div className="cyber-grid-overlay opacity-10"></div>
        <div className="h-full flex flex-col justify-center items-center space-y-8">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setNav(!nav)}
              className="cyber-mobile-link"
            >
              <span className="text-2xl text-[#2558a5]">{item.icon}</span>
              <span className="text-xl font-['Golden_Antique'] text-[#c9e5e0]">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
