"use client";
import React, { useState, useEffect } from "react";
import { FaShieldAlt, FaLock, FaCode, FaBug } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 15,
      y: (e.clientY / window.innerHeight) * 15,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-[#272254]"
    >
      {/* Particle Effect Background */}
      <div className="absolute inset-0 cyber-particles"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 cyber-grid"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        {/* Decorative Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FaShieldAlt className="absolute top-1/4 left-1/4 text-[#2558a5] opacity-20 text-6xl transform -translate-x-1/2 animate-float" />
          <FaLock className="absolute top-1/3 right-1/4 text-[#ccadd3] opacity-20 text-4xl animate-float-delayed" />
          <FaCode className="absolute bottom-1/4 left-1/3 text-[#c9e5e0] opacity-20 text-5xl animate-float" />
          <FaBug className="absolute bottom-1/3 right-1/3 text-[#2558a5] opacity-20 text-4xl animate-float-delayed" />
        </div>
        <div
          className="text-center transform"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <h1 className="text-[#c9e5e0] text-6xl md:text-7xl font-['Golden_Antique'] mb-4 cyber-glitch-effect">
            Ferry Nurqadar
          </h1>

          <div className="h-16 mb-8">
            <TypeAnimation
              sequence={[
                "Penetration Testing",
                2000,
                "Vulnerability Assessment",
                2000,
                "Bug Hunting",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-[#ccadd3] text-2xl md:text-3xl font-['Golden_Antique']"
            />
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <a href="/blog" className="cyber-button">
              Blog/Article
              <span className="cyber-button__glitch"></span>
            </a>
            <a href="#contact" className="cyber-button-secondary">
              Contact Me
              <span className="cyber-button__glitch"></span>
            </a>
          </div>
        </div>
        {/* Bottom Decorative Bar */}
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-[#272254] via-[#2558a5] to-[#272254]">
          <div className="cyber-scan-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
