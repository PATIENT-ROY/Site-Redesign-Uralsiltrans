"use client";

import React, { useState } from "react";
import { products } from "../../data/products";
import { OrderModal, OrderFormData } from "../../components/ui/OrderModal";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  Truck,
  Shield,
  Clock,
  Zap,
  Settings,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  // Unwrap params using React.use()
  const resolvedParams = React.use(params);
  const product = products.find(
    (p: { id: number }) => p.id === parseInt(resolvedParams.id)
  );

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Продукт не найден
              </h1>
              <p className="text-gray-600 mb-6">
                Запрашиваемый продукт не существует или был удален.
              </p>
              <button
                onClick={() => router.push("/")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Вернуться на главную
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleOrderClick = () => {
    setModalOpen(true);
  };

  const handleSubmit = (formData: OrderFormData) => {
    console.log("Form submitted:", formData);
  };

  const handleFormSubmitted = () => {
    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 300);
  };

  const features = [
    {
      icon: Award,
      text: "Сертифицированное качество",
      description: "Соответствует международным стандартам",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Truck,
      text: "Быстрая доставка",
      description: "Доставка по всей России",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      text: "Гарантия 2 года",
      description: "Полная гарантия производителя",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Clock,
      text: "Срок службы 15+ лет",
      description: "Долговечность и надежность",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  const specifications = [
    { label: "Мощность", value: "1000 кВА", icon: Zap },
    { label: "Напряжение", value: "10/0.4 кВ", icon: Settings },
    { label: "Частота", value: "50 Гц", icon: Settings },
    { label: "КПД", value: "98.5%", icon: Zap },
    { label: "Вес", value: "2500 кг", icon: Settings },
    { label: "Размеры", value: "2000×1500×1800 мм", icon: Settings },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              <span className="font-medium">Назад к продукции</span>
            </button>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Product Image Section */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-3xl" />

                <div className="relative z-10">
                  <div className="h-96 bg-white rounded-2xl overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 brightness-110 contrast-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information Section */}
            <div className="space-y-10">
              {/* Product Title and Description */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className={`${
                          i < 4
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      4.8
                    </span>
                    <span className="text-gray-600">(127 отзывов)</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Ключевые преимущества
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <feature.icon size={24} className={feature.color} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {feature.text}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Технические характеристики
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <spec.icon size={20} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm font-medium">
                            {spec.label}
                          </p>
                          <p className="text-gray-900 font-bold text-lg">
                            {spec.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <button
                  onClick={handleOrderClick}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/20 focus:outline-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Заказать {product.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
        onSubmit={handleSubmit}
        onFormSubmitted={handleFormSubmitted}
      />

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 left-4 right-4 z-[999999]">
          <div className="bg-white/95 backdrop-blur-md border border-green-200 shadow-2xl rounded-2xl p-4 max-w-sm mx-auto">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
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
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Заявка отправлена!
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Заявка на &quot;{product.name}&quot; успешно отправлена
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
