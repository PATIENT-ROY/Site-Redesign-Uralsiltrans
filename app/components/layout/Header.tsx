"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { products } from "../../data/products";

interface Product {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
  application: string;
  specifications: { label: string; value: string }[];
  category: string;
  price: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSearchClick = (product: Product) => {
    router.push(`/product/${product.id}`);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const navItems = [
    { label: "Главная", path: "/" },
    { label: "О компании", path: "/aboutus" },
    { label: "Контакты", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    if (path === "/") {
      // Если это главная страница, просто переходим на главную
      if (pathname !== "/") {
        router.push("/");
      }
    } else {
      router.push(path);
    }
    setIsMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-5">
          {/* Logo */}
          <div onClick={handleLogoClick} className="block cursor-pointer group">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo/favicon.png"
                  alt="УРАЛСИЛТРАНС"
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                <p className="text-xs sm:text-sm text-gray-500 -mt-1 group-hover:text-gray-600 transition-colors duration-300">
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
                onClick={() => handleNavClick(item.path)}
                className={`py-2 font-semibold relative transition-all duration-300 text-sm xl:text-base group ${
                  isActivePage(item.path)
                    ? "text-blue-600"
                    : "text-black hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActivePage(item.path) ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:block relative" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск продуктов..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-64 px-4 py-2 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSearchClick(product)}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {product.shortDesc}
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        {product.price}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {isSearchOpen &&
              searchQuery.trim() !== "" &&
              searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-4">
                  <p className="text-sm text-gray-500 text-center">
                    Продукт не найден
                  </p>
                </div>
              )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-4 py-2 xl:px-6 xl:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors duration-300 text-sm xl:text-base">
              <Phone size={16} />
              Заказать звонок
            </button>
          </div>

          {/* Mobile Menu Button - возвращаем как было */}
          <button
            className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search - ниже логотипа для мобильных и планшетов */}
        <div className="lg:hidden mb-4 pb-4 border-b border-gray-200">
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Поиск продуктов..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full px-4 py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Mobile Search Results */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="mt-3 bg-white border border-gray-200 rounded-lg shadow-xl max-h-64 overflow-y-auto">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    handleSearchClick(product);
                  }}
                  className="flex items-center space-x-3 p-3 hover:bg-blue-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                >
                  <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {product.shortDesc}
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      {product.price}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Mobile No Results */}
          {isSearchOpen &&
            searchQuery.trim() !== "" &&
            searchResults.length === 0 && (
              <div className="mt-3 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                <p className="text-sm text-gray-500 text-center">
                  Продукт не найден
                </p>
              </div>
            )}
        </div>

        {/* Mobile Menu - возвращаем как было */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    handleNavClick(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 font-semibold rounded-lg transition-all duration-300 text-base ${
                    isActivePage(item.path)
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
