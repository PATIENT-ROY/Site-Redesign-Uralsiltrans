"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

export const LicensesSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? licenses.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === licenses.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const licenses = [
    {
      id: 1,
      title: "Лицензия на производство",
      description:
        "Лицензия подтверждает соответствие нашего производства всем стандартам качества",
      imageUrl: "/licenses/license1.png",
    },
    {
      id: 2,
      title: "Лицензия на производство",
      description:
        "Лицензия подтверждает соответствие нашего производства всем стандартам качества",
      imageUrl: "/licenses/license2.png",
    },
    {
      id: 3,
      title: "Лицензия на производство",
      description:
        "Лицензия подтверждает соответствие нашего производства всем стандартам качества",
      imageUrl: "/licenses/license3.png",
    },
    {
      id: 4,
      title: "Лицензия на производство",
      description:
        "Лицензия подтверждает соответствие нашего производства всем стандартам качества",
      imageUrl: "/licenses/license4.png",
    },

    // ... ваш массив с лицензиями ...
  ];

  // Анимации
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const modalItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  // ... остальные функции (openModal, closeModal, navigateImage) ...

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="text-center mb-12"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Лицензии и сертификаты
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Наша продукция соответствует всем требованиям и стандартам качества
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {licenses.map((license, index) => (
            <motion.div
              key={license.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="h-48 relative">
                <Image
                  src={license.imageUrl}
                  alt={license.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {license.title}
                </h3>
                <p className="text-gray-600">{license.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Анимированное модальное окно */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateImage("prev")}
              className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </motion.button>

            <motion.div
              key={selectedImage}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalItem}
              className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <Image
                src={licenses[selectedImage].imageUrl}
                alt={licenses[selectedImage].title}
                width={550}
                height={550}
                className="object-contain max-w-full max-h-full"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateImage("next")}
              className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight size={40} />
            </motion.button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 text-white text-center w-full"
            >
              <p className="text-xl font-semibold">
                {licenses[selectedImage].title}
              </p>
              <p className="text-gray-300">
                {licenses[selectedImage].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
