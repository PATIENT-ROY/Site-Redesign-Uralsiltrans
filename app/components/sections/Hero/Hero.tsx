"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Spring animations
  const springConfig = { stiffness: 300, damping: 30 };
  const springHeroY = useSpring(heroY, springConfig);
  const springHeroOpacity = useSpring(heroOpacity, springConfig);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleVideoError = () => {
  //   setVideoError(true);
  // };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.section
      id="hero"
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden"
      style={{
        y: springHeroY,
        opacity: springHeroOpacity,
      }}
    >
      {/* Video Background with Fallback */}
      {!imageError ? (
        <Image
          src="/bg-image/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          onError={handleImageError}
        />
      ) : (
        // <video
        //   autoPlay
        //   loop
        //   muted
        //   playsInline
        //   className="absolute top-0 left-0 w-full h-full object-cover"
        //   onError={handleVideoError}
        // >
        //   <source src="/videos/hero-bg.mp4" type="video/mp4" />
        //   <source src="/videos/hero-bg.webm" type="video/webm" />
        //   {/* Fallback message */}
        //   <p className="text-white">Ваш браузер не поддерживает видео.</p>
        // </video>
        /* Fallback Background - Gradient */
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-16">
        <motion.div
          className="max-w-4xl"
          style={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
        >
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 300,
            }}
            style={{
              textShadow: "0 0 40px rgba(37, 99, 235, 0.3)",
            }}
          >
            Энергетические решения <br />
            <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              для промышленности
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 300,
            }}
          >
            Инновационные решения для энергетической отрасли с 20-летним опытом
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              type: "spring",
              stiffness: 300,
            }}
          >
            <motion.button
              onClick={() => scrollToSection("products")}
              className="px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/20 focus:outline-none shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">Каталог продукции</span>
            </motion.button>

            <motion.button
              onClick={() => (window.location.href = "/contact")}
              className="px-4 py-3 sm:px-8 sm:py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/50 focus:ring-4 focus:ring-white/20 focus:outline-none shadow-2xl hover:shadow-3xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Консультация</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
