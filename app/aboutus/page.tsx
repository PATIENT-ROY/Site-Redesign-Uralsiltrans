"use client";

import React from "react";
import {
  CheckCircleIcon,
  UserGroupIcon,
  ClockIcon,
  MapPinIcon,
  CogIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  StarIcon,
  SparklesIcon,
  RocketLaunchIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ClientReviews } from "../components/sections/ClientReviews";
import { LicensesSection } from "../components/sections/Licenses";
import { Testimonials } from "../components/sections/Testimonials";
import ScrollToTop from "../components/ui/ScrollToTop";

export default function ClientAboutContent() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const stats = [
    {
      value: "20+",
      label: "Лет на рынке",
      icon: ClockIcon,
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "1500+",
      label: "Реализованных проектов",
      icon: CheckCircleIcon,
      color: "from-emerald-500 to-green-500",
    },
    {
      value: "100+",
      label: "Клиентов по всей России",
      icon: UserGroupIcon,
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "50+",
      label: "Городов поставок",
      icon: MapPinIcon,
      color: "from-orange-500 to-red-500",
    },
    {
      value: "110",
      label: "кВ мощность оборудования",
      icon: CogIcon,
      color: "from-indigo-500 to-blue-500",
    },
    {
      value: "15+",
      label: "Сертификатов качества",
      icon: ShieldCheckIcon,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const processSteps = [
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />,
      title: "Консультация",
      description: "Бесплатная консультация и подбор оборудования",
      color: "from-blue-500 to-blue-600",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: <ClipboardDocumentListIcon className="h-8 w-8 text-white" />,
      title: "Техническое задание",
      description: "Составление детального ТЗ и расчет стоимости",
      color: "from-green-500 to-green-600",
      gradient: "from-green-400 via-green-500 to-green-600",
    },
    {
      icon: <CogIcon className="h-8 w-8 text-white" />,
      title: "Производство",
      description: "Изготовление на собственном заводе",
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
    },
    {
      icon: <TruckIcon className="h-8 w-8 text-white" />,
      title: "Доставка",
      description: "Транспортировка до объекта заказчика",
      color: "from-orange-500 to-orange-600",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
    },
    {
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-white" />,
      title: "Монтаж",
      description: "Установка и пусконаладка оборудования",
      color: "from-red-500 to-red-600",
      gradient: "from-red-400 via-red-500 to-red-600",
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-white" />,
      title: "Гарантия",
      description: "Гарантийное и постгарантийное обслуживание",
      color: "from-indigo-500 to-indigo-600",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
  ];

  const achievements = [
    { icon: StarIcon, text: "Лидер отрасли", color: "text-yellow-500" },
    { icon: RocketLaunchIcon, text: "Инновации", color: "text-blue-500" },
    { icon: HeartIcon, text: "Качество", color: "text-red-500" },
    { icon: SparklesIcon, text: "Надежность", color: "text-purple-500" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 text-gray-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-400/10 rounded-full blur-2xl sm:blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-purple-400/10 rounded-full blur-2xl sm:blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-cyan-400/10 rounded-full blur-2xl sm:blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden min-h-screen flex items-center"
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
        >
          {/* Background Image with Enhanced Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aboutus.png"
              alt="Наш завод"
              fill
              className="object-cover opacity-15"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-purple-900/50" />
          </div>

          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 80, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.4, 0.7, 0.4],
                x: [0, -100, 0],
                y: [0, 60, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto py-12 md:py-16 lg:py-20 px-4 sm:px-6 text-center z-10">
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mr-2 sm:mr-3 animate-pulse shadow-lg"></span>
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent font-semibold">
                Лидер в энергетических решениях
              </span>
            </motion.div>

            {/* Enhanced Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent px-2"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              О компании
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl lg:max-w-5xl mx-auto leading-relaxed text-gray-200 mb-8 sm:mb-12 font-light px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <span className="font-semibold text-white">УРАЛСИЛТРАНС</span> -
              ведущий российский производитель трансформаторного оборудования с{" "}
              <span className="font-bold text-cyan-300">2003 года</span>
            </motion.p>

            {/* Achievement Badges - оставляем только бейджи достижений */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <achievement.icon
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${achievement.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-200">
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section - УБРАН, так как информация дублируется */}
        {/* <motion.div id="projects" style={{ y: contentY }}>
          <Projects />
        </motion.div> */}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 space-y-20 sm:space-y-24 md:space-y-32 relative z-10">
          {/* About Section */}
          <motion.section
            className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>

            <motion.div
              className="space-y-6 sm:space-y-8 relative z-10 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                О компании
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Наша{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                  история
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg md:text-xl"
                >
                  Основанная в{" "}
                  <span className="font-bold text-blue-600">2003 году</span>,
                  компания УРАЛСИЛТРАНС завоевала репутацию лидера в
                  производстве электротехнического оборудования в России.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg md:text-xl"
                >
                  Мы специализируемся на комплексных поставках оборудования от{" "}
                  <span className="font-bold text-purple-600">6 до 110 кВ</span>
                  , предлагая инновационные решения благодаря многолетнему опыту
                  наших специалистов.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg md:text-xl"
                >
                  Наш завод в Свердловской области, оснащенный современным
                  оборудованием, гарантирует{" "}
                  <span className="font-bold text-cyan-600">
                    высочайшее качество
                  </span>{" "}
                  продукции и соответствие международным стандартам.
                </motion.p>
              </div>

              {/* Enhanced Key Features */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    Сертифицированное оборудование
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    Гарантия качества
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <CogIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    Собственное производство
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl sm:rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <TruckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    Быстрая доставка
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 h-full relative z-10 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-64 md:h-72 group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/44.png"
                  alt="Наши сотрудники"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="font-bold text-base sm:text-lg">
                    Наши сотрудники
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    Профессиональная команда
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-64 md:h-72 group"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/factory.png"
                  alt="Производство"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="font-bold text-base sm:text-lg">
                    Производство
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    Современные технологии
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-64 md:h-72 col-span-2 group"
                whileHover={{ scale: 1.05, rotateX: 2 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/33.png"
                  alt="Цех завода"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="font-bold text-base sm:text-lg">Цех завода</h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    Высокотехнологичное производство
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Enhanced Stats Section */}
          <motion.section
            className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl sm:rounded-3xl lg:rounded-4xl p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Enhanced Animated Background Elements */}
            <motion.div
              className="absolute top-10 right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white/10 rounded-full blur-2xl sm:blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-10 left-10 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-white/10 rounded-full blur-2xl sm:blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                УРАЛСИЛТРАНС в цифрах
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed px-4">
                Более <span className="font-bold text-cyan-300">20 лет</span>{" "}
                инноваций, качества и надежности в электротехнической отрасли
              </p>
            </motion.div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {stats.map(({ value, label, icon: Icon, color }, idx) => {
                const numericValue = parseInt(
                  value.replace("+", "").replace(" кВ", "")
                );

                return (
                  <motion.div
                    key={idx}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                  >
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <motion.div
                        className={`p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${color} shadow-xl sm:shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/20`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                      </motion.div>
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                      <CountUp
                        end={numericValue}
                        duration={3}
                        suffix={
                          value.includes("+")
                            ? "+"
                            : value.includes("кВ")
                            ? " кВ"
                            : ""
                        }
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 font-medium leading-relaxed px-2">
                      {label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Enhanced Process Section */}
          <motion.section
            className="space-y-12 sm:space-y-16 md:space-y-20 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl sm:blur-3xl"></div>

            <motion.div
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg border border-purple-200">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                Наш процесс
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
                Наш{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                  рабочий процесс
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed px-4">
                Полный цикл работ от проектирования до ввода в эксплуатацию
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />

                  <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:border-blue-200">
                    <div
                      className={`absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r ${step.gradient}`}
                    />

                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 bg-gradient-to-br ${step.gradient} shadow-xl sm:shadow-2xl group-hover:shadow-3xl`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ duration: 0.5 }}
                      >
                        {React.cloneElement(step.icon, {
                          className:
                            "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white",
                        })}
                      </motion.div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-2">
                        {step.description}
                      </p>

                      <div className="text-xs sm:text-sm font-bold text-blue-600 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200 shadow-lg">
                        Шаг {index + 1}/6
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <LicensesSection />
          <ClientReviews />
          <Testimonials />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
