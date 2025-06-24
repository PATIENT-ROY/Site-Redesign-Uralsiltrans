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
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ClientReviews } from "../components/sections/ClientReviews";
import { LicensesSection } from "../components/sections/Licenses";

export default function ClientAboutContent() {
  const stats = [
    { value: "20+", label: "Лет на рынке", icon: ClockIcon },
    { value: "1500+", label: "Реализованных проектов", icon: CheckCircleIcon },
    { value: "100+", label: "Клиентов по всей России", icon: UserGroupIcon },
    { value: "50+", label: "Городов поставок", icon: MapPinIcon },
    { value: "110", label: "кВ мощность оборудования", icon: CogIcon },
    { value: "15+", label: "Сертификатов качества", icon: ShieldCheckIcon },
  ];

  const processSteps = [
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />,
      title: "Консультация",
      description: "Бесплатная консультация и подбор оборудования",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <ClipboardDocumentListIcon className="h-8 w-8 text-white" />,
      title: "Техническое задание",
      description: "Составление детального ТЗ и расчет стоимости",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <CogIcon className="h-8 w-8 text-white" />,
      title: "Производство",
      description: "Изготовление на собственном заводе",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <TruckIcon className="h-8 w-8 text-white" />,
      title: "Доставка",
      description: "Транспортировка до объекта заказчика",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-white" />,
      title: "Монтаж",
      description: "Установка и пусконаладка оборудования",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-white" />,
      title: "Гарантия",
      description: "Гарантийное и постгарантийное обслуживание",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aboutus.png"
              alt="Наш завод"
              fill
              className="object-cover blur-sm"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-gray-900/10" />
          </div>

          <div className="relative max-w-7xl mx-auto py-32 px-6 text-center z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              О компании
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              УРАЛСИЛТРАНС - ведущий российский производитель трансформаторного
              оборудования с 2003 года
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-24">
          {/* About Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Наша <span className="text-blue-600">история</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Основанная в 2003 году, компания УРАЛСИЛТРАНС завоевала
                  репутацию лидера в производстве электротехнического
                  оборудования в России.
                </p>
                <p>
                  Мы специализируемся на комплексных поставках оборудования от 6
                  до 110 кВ, предлагая инновационные решения благодаря
                  многолетнему опыту наших специалистов.
                </p>
                <p>
                  Наш завод в Свердловской области, оснащенный современным
                  оборудованием, гарантирует высочайшее качество продукции и
                  соответствие международным стандартам.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4 h-full"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-64">
                <Image
                  src="/images/44.png"
                  alt="Наши сотрудники"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-64">
                <Image
                  src="/images/factory.png"
                  alt="Производство"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-64 col-span-2">
                <Image
                  src="/images/33.png"
                  alt="Цех завода"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                УРАЛСИЛТРАНС в цифрах
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Более 20 лет инноваций, качества и надежности в
                электротехнической отрасли
              </p>
            </motion.div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map(({ value, label, icon: Icon }, idx) => {
                const numericValue = parseInt(
                  value.replace("+", "").replace(" кВ", "")
                );

                return (
                  <motion.div
                    key={idx}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center mb-5">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      <CountUp
                        end={numericValue}
                        duration={2.5}
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
                    <p className="text-sm md:text-base opacity-90 font-medium">
                      {label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Process Section */}
          <section className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Наш <span className="text-blue-600">рабочий процесс</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный цикл работ от проектирования до ввода в эксплуатацию
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt" />

                  <div className="relative h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r via-transparent ${step.color}" />

                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${step.color}`}
                      >
                        {React.cloneElement(step.icon, {
                          className: "h-8 w-8 text-white",
                        })}
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600">{step.description}</p>

                      <div className="mt-6 text-sm font-medium text-blue-600">
                        Шаг {index + 1}/6
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <LicensesSection />
            <ClientReviews />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
