"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("main");
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Определяем активную секцию при скролле
      const sections = ["main", "products", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (window.location.pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Высота header
      const padding = 20; // Дополнительный padding
      const elementPosition = element.offsetTop - headerHeight - padding;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const navItems = [
    { label: "Главная", id: "main" },
    { label: "Продукция", id: "products" },
    { label: "О компании", id: "projects" },
    { label: "Контакты", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div onClick={handleLogoClick} className="block cursor-pointer">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src="/favicon.png"
                  alt="УРАЛСИЛТРАНС"
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {"УралСиЛТранс".split("").map((letter, index) => (
                    <span
                      key={index}
                      className={
                        [0, 4, 7].includes(index) ? "uppercase" : "lowercase"
                      }
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  общество с ограниченной ответственностью
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className={`py-2 font-semibold relative transition-all duration-300 text-sm xl:text-base group ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : "text-black hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-3/4"
                      : "w-0 group-hover:w-3/4"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-4 py-2 xl:px-6 xl:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors duration-300 text-sm xl:text-base">
              <Phone size={16} />
              Заказать звонок
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Не мешает другим элементам */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 font-semibold rounded-lg transition-all duration-300 text-base ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-auto mx-auto mt-4 px-6 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1 sm:gap-2 transition-colors duration-300 text-sm sm:text-base">
                <Phone size={16} className="sm:w-5 sm:h-5" />
                Заказать звонок
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
