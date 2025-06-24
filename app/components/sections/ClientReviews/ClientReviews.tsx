"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, User } from "lucide-react";

export const ClientReviews = () => {
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

  const reviews = [
    {
      name: "Александр Петров",
      company: "ООО 'ЭнергоСтрой'",
      rating: 5,
      text: "Отличное качество оборудования и профессиональный подход к работе. УРАЛСИЛТРАНС выполнил заказ в срок и с соблюдением всех технических требований.",
      avatar: "/images/avatar1.jpg",
      position: "Технический директор",
    },
    {
      name: "Мария Сидорова",
      company: "ПАО 'ПромЭнерго'",
      rating: 5,
      text: "Сотрудничаем с компанией уже более 5 лет. Всегда высокое качество продукции и отличная техническая поддержка. Рекомендуем!",
      avatar: "/images/avatar2.jpg",
      position: "Главный инженер",
    },
    {
      name: "Дмитрий Козлов",
      company: "ООО 'ИндустриалСтрой'",
      rating: 5,
      text: "Профессиональная команда, качественное оборудование и соблюдение сроков поставки. УРАЛСИЛТРАНС - надежный партнер для серьезных проектов.",
      avatar: "/images/avatar3.jpg",
      position: "Директор по закупкам",
    },
    {
      name: "Елена Волкова",
      company: "ООО 'ТехЭнерго'",
      rating: 5,
      text: "Выражаем благодарность за качественное оборудование и профессиональный сервис. Все работы выполнены на высоком уровне.",
      avatar: "/images/avatar4.jpg",
      position: "Руководитель проекта",
    },
    {
      name: "Сергей Морозов",
      company: "ПАО 'ЭнергоМаш'",
      rating: 5,
      text: "Долгосрочное сотрудничество показывает стабильно высокое качество продукции и сервиса. УРАЛСИЛТРАНС - проверенный поставщик.",
      avatar: "/images/avatar5.jpg",
      position: "Начальник отдела снабжения",
    },
    {
      name: "Анна Соколова",
      company: "ООО 'СтройЭнерго'",
      rating: 5,
      text: "Отличная работа команды УРАЛСИЛТРАНС. Оборудование соответствует всем заявленным характеристикам, монтаж выполнен качественно.",
      avatar: "/images/avatar6.jpg",
      position: "Технолог",
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
      id="client-reviews"
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
            Отзывы наших клиентов
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
            Что говорят о нас довольные клиенты по всей России
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white/80 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
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

              {/* Quote icon */}
              <motion.div
                className="absolute top-6 right-6 text-blue-500/20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote size={40} />
              </motion.div>

              <div className="relative z-10">
                {/* Rating */}
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  viewport={{ once: true }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </motion.div>

                {/* Review text */}
                <motion.p
                  className="text-gray-700 mb-6 leading-relaxed italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  viewport={{ once: true }}
                >
                  &ldquo;{review.text}&rdquo;
                </motion.p>

                {/* Client info */}
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">{review.position}</p>
                    <p className="text-sm text-blue-600 font-medium">
                      {review.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall rating */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-4xl font-bold text-gray-900">4.9</div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              Средний рейтинг на основе{" "}
              <span className="font-semibold">500+ отзывов</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
