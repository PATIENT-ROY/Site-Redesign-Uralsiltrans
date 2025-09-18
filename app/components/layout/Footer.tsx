"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.png"
          alt="Footer background"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src="/favicon.png"
                  alt="УРАЛСИЛТРАНС"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">УРАЛСИЛТРАНС</h3>
                <p className="text-xs sm:text-sm text-gray-300">ООО</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Производство и поставка качественного электротехнического
              оборудования.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Продукция
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">
              Свяжитесь с нами
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="flex-shrink-0 mt-1 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base">
                  620017, Свердловская область, г. Екатеринбург, ул. Фронтовых
                  Бригад, д. 18, корп. 2, оф. 209
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="flex-shrink-0 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base">+7 (343) 287-65-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="flex-shrink-0 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base">
                  info@uralsiltrans.ru
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">
              Правовая информация
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} ООО &quot;УРАЛСИЛТРАНС&quot;. Все
            права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
