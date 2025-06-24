"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { products } from "../../../data/products";
import { useState, useEffect } from "react";
import { OrderModal, OrderFormData } from "../../ui/OrderModal";
import Image from "next/image";
import Link from "next/link";

export const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [0, 1000], [0, -100]);
  const sectionOpacity = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 0.6]);
  const titleY = useTransform(scrollY, [0, 500], [0, -50]);
  const titleScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  // Spring animations
  const springConfig = { stiffness: 300, damping: 30 };
  const springY = useSpring(sectionY, springConfig);
  const springOpacity = useSpring(sectionOpacity, springConfig);
  const springTitleY = useSpring(titleY, springConfig);
  const springTitleScale = useSpring(titleScale, springConfig);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const handleSubmit = (formData: OrderFormData) => {
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleFormSubmitted = () => {
    // Show notification after modal closes
    setTimeout(() => {
      setShowNotification(true);

      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 300);
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  return (
    <>
      <motion.section
        id="products"
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
              y: springTitleY,
              scale: springTitleScale,
            }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 300,
              }}
              viewport={{ once: true }}
            >
              Наша продукция
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed"
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
              Комплексные решения для энергетики и промышленности
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                style={{
                  x: mousePosition.x * ((index % 3) - 1) * 0.05,
                  y: mousePosition.y * ((index % 3) - 1) * 0.05,
                }}
              >
                {/* Glow effect - supprimé pour éviter la fatigue visuelle */}
                {/* <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl scale-0 group-hover:scale-100 transition-all duration-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                /> */}

                <Link
                  href={`/product/${product.id}`}
                  className="block relative z-10"
                >
                  <div className="h-40 sm:h-48 md:h-56 bg-white overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProduct === product.id ? 0.3 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 brightness-110 contrast-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </Link>
                <div className="p-4 sm:p-6 md:p-8 relative z-10">
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    style={{
                      textShadow: "0 0 20px rgba(37, 99, 235, 0.1)",
                    }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-900 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {product.shortDesc}
                  </motion.p>
                  <motion.button
                    onClick={() => handleOrderClick(product.name)}
                    className="w-full px-4 py-3 sm:px-6 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-500 font-semibold text-sm sm:text-lg group-hover:shadow-2xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="relative z-10">Заказать</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
        onSubmit={handleSubmit}
        onFormSubmitted={handleFormSubmitted}
      />

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 left-4 right-4 z-[999999]">
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 400,
            }}
            className="bg-white border border-green-200 shadow-2xl rounded-2xl p-4 max-w-sm mx-auto"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <motion.div
                  className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2],
                    rotate: [0, 10],
                  }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Заявка отправлена!
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Заявка на &quot;{selectedProduct}&quot; успешно отправлена
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
