"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Factory, Truck, Award, Headphones } from "lucide-react";

export const Testimonials = () => {
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

  const advantages = [
    {
      icon: Factory,
      title: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
      description: "Полный контроль качества на всех этапах",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Truck,
      title: "ГИБКИЕ УСЛОВИЯ ПОСТАВКИ",
      description: "Индивидуальные решения под задачи заказчика",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "СЕРТИФИЦИРОВАННАЯ ПРОДУКЦИЯ",
      description: "Соответствие ГОСТ, ТУ и международным стандартам",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Headphones,
      title: "ТЕХНИЧЕСКАЯ ПОДДЕРЖКА",
      description:
        "Помощь в подборе оборудования, монтаж и сервисное обслуживание",
      color: "from-orange-500 to-orange-600",
    },
  ];

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
          className="text-center mb-16"
          style={{
            y: springContentY,
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 300,
            }}
            viewport={{ once: true }}
            style={{
              textShadow: "0 0 30px rgba(37, 99, 235, 0.2)",
            }}
          >
            Почему выбирают УРАЛСИЛТРАНС?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 300,
            }}
            viewport={{ once: true }}
          >
            Наши преимущества, которые делают нас надежным партнером
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white/80 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden text-center group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
              }}
              style={{
                x: mousePosition.x * ((index % 2) - 0.5) * 0.1,
                y: mousePosition.y * ((index % 2) - 0.5) * 0.1,
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
                  className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <advantage.icon className="h-10 w-10 text-white" />
                </motion.div>

                <motion.h3
                  className="text-lg font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  viewport={{ once: true }}
                >
                  {advantage.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  viewport={{ once: true }}
                >
                  {advantage.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
