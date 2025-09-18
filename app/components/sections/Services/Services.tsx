"use client";

import { motion } from "framer-motion";
import { products } from "../../../data/products";
import { useState } from "react";
import { OrderModal } from "../../ui/OrderModal";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const handleSubmit = () => {
    // Form submission logic can be added here
  };

  const handleFormSubmitted = () => {
    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 300);
  };

  // Simplified categories
  const categories = [
    { id: "all", name: "Все", icon: Sparkles },
    { id: "transformers", name: "Трансформаторы", icon: Zap },
    { id: "substations", name: "Подстанции", icon: Shield },
    { id: "switches", name: "Выключатели", icon: TrendingUp },
  ];

  // Filter products
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Наша продукция
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Каталог{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                продукции
              </span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Широкий ассортимент трансформаторного оборудования и комплектующих
              для любых задач
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-blue-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Product Image */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      {product.price}
                    </div>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 sm:p-6 group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg border border-blue-200"
                        >
                          <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {feature.split(":")[0]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleOrderClick(product.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:shadow-xl text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-1 sm:gap-2">
                      Заказать
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 text-base sm:text-lg">
                Продукты в данной категории не найдены
              </div>
            </motion.div>
          )}

          {/* About Company Section */}
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24 lg:mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative px-4 sm:px-6 lg:px-8">
              {/* Simple Gradient Block */}
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12">
                {/* Content */}
                <div className="relative z-10 text-white">
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                      О КОМПАНИИ
                    </span>
                  </motion.div>

                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Компания{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                      УралСиЛТранс
                    </span>
                  </motion.h3>

                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Ведущий российский производитель трансформаторного
                    оборудования с 2003 года. Надежная команда профессионалов с
                    мощным технологическим потенциалом. Мы успешно работаем на
                    рынке Российской Федерации, динамично развиваем
                    энергетический сегмент и внедряем инновационные решения для
                    модернизации и строительства энергетических систем.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-start sm:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => (window.location.href = "/aboutus")}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-lg text-base sm:text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ПОДРОБНЕЕ
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>

                    <motion.button
                      onClick={() => (window.location.href = "/contact")}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/70 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 group text-base sm:text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      СВЯЗАТЬСЯ
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            className="bg-white shadow-2xl rounded-2xl p-4 max-w-sm mx-auto border border-green-200"
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
