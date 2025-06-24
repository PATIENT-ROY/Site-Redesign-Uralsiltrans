"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [0, 1000], [0, -50]);
  const sectionOpacity = useTransform(scrollY, [0, 500, 1000], [1, 0.9, 0.8]);
  const contentY = useTransform(scrollY, [0, 500], [0, -30]);

  // Spring animations
  const springConfig = { stiffness: 300, damping: 30 };
  const springY = useSpring(sectionY, springConfig);
  const springOpacity = useSpring(sectionOpacity, springConfig);
  const springContentY = useSpring(contentY, springConfig);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden"
      style={{
        y: springY,
        opacity: springOpacity,
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          style={{
            y: springContentY,
          }}
        >
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              x: mousePosition.x * 0.2,
            }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              variants={itemVariants}
              style={{
                textShadow: "0 0 30px rgba(37, 99, 235, 0.2)",
              }}
            >
              О компании
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Мы - ведущий поставщик электротехнического оборудования с
              20-летним опытом работы на рынке.
            </motion.p>

            <motion.ul
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "1500+ проектов",
                "Гарантия качества",
                "Сертифицированная продукция",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-1"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <CheckCircle className="h-4 w-4 text-white" />
                  </motion.div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="/aboutus"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
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
              <span className="relative z-10">Узнать больше</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              x: mousePosition.x * 0.3,
              y: mousePosition.y * 0.3,
            }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl scale-0 group-hover:scale-100 transition-all duration-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="h-96 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 rounded-2xl overflow-hidden relative"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="/images/project.png"
                    alt="Our factory"
                    width={600}
                    height={400}
                    className="object-contain max-h-full p-6 drop-shadow-lg"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
