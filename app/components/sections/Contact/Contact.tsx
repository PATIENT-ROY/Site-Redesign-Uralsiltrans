"use client";

import React, { useState } from "react";
import { Phone, Mail, Copy, Check } from "lucide-react";
import { Notification } from "../../ui/Notification";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ContactFormData {
  name: string;
  phone: string;
  contactMethod: "email" | "telegram";
  contactDetail: string;
  message: string;
}

// Validation schema
const schema = yup
  .object({
    name: yup
      .string()
      .required("Имя обязательно")
      .min(2, "Имя должно содержать минимум 2 символа"),
    phone: yup
      .string()
      .required("Телефон обязателен")
      .min(10, "Введите корректный номер телефона"),
    contactDetail: yup
      .string()
      .required("Контакт обязателен")
      .when("contactMethod", {
        is: "email",
        then: (schema) => schema.email("Введите корректный email"),
        otherwise: (schema) =>
          schema.min(3, "Username должен содержать минимум 3 символа"),
      }),
    message: yup
      .string()
      .required("Сообщение обязательно")
      .max(500, "Сообщение не должно превышать 500 символов"),
    contactMethod: yup.string().oneOf(["email", "telegram"]).required(),
  })
  .required();

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Function to copy text to clipboard
  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      contactMethod: "email",
      contactDetail: "",
      message: "",
    },
  });

  const contactMethod = watch("contactMethod");

  // Custom input handlers for validation
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters, spaces, hyphens, and apostrophes
    const value = e.target.value.replace(/[^а-яёa-zA-Z\s\-'\.]/g, "");
    e.target.value = value;
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, spaces, parentheses, dashes, and plus sign
    const value = e.target.value.replace(/[^\d\s\(\)\-\+]/g, "");
    e.target.value = value;
  };

  const onSubmit = async () => {
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Отдел заказа",
      value: "+7 (993) 515-65-13",
    },
    {
      icon: <Phone size={24} />,
      title: "Отдел комплектации",
      value: "+7 (919) 398-37-53",
    },
    {
      icon: <Phone size={24} />,
      title: "Технический отдел",
      value: "+7 (932) 601-67-48",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "uralsiltrans@yandex.ru",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-[999999] p-4">
          <Notification
            message="Заявка отправлена успешно"
            type="success"
            duration={3000}
            onClose={() => setIsSubmitted(false)}
          />
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side (Blue Panel) */}
          <div className="lg:w-1/2 bg-blue-600 text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Нужна консультация?
              </h2>
              <p className="text-blue-100 mb-8 sm:mb-12 text-sm sm:text-base">
                Наши специалисты помогут подобрать оборудование для ваших задач.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 text-blue-300">{item.icon}</div>
                  <div className="ml-3 sm:ml-4 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <div className="group relative flex items-center gap-2 mt-1">
                      <p
                        className="text-blue-100 text-sm sm:text-base cursor-copy hover:text-blue-300 transition-colors"
                        onClick={() => copyToClipboard(item.value, index)}
                        title="Кликните для копирования"
                      >
                        {item.value}
                      </p>
                      <button
                        onClick={() => copyToClipboard(item.value, index)}
                        className="opacity-0 group-hover:opacity-100 text-blue-300 hover:text-white transition-all duration-200 p-1"
                        title="Копировать"
                      >
                        {copiedIndex === index ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="lg:w-1/2 p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
              Оставить заявку
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ваше имя"
                  {...register("name")}
                  onChange={handleNameInput}
                  maxLength={50}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Телефон"
                  {...register("phone")}
                  onChange={handlePhoneInput}
                  maxLength={20}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Contact Method Toggle */}
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Способ связи
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setValue("contactMethod", "email")}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-semibold transition-colors ${
                      contactMethod === "email"
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue("contactMethod", "telegram")}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-semibold transition-colors ${
                      contactMethod === "telegram"
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Telegram
                  </button>
                </div>
              </div>

              {/* Contact Detail Input */}
              <div>
                <label htmlFor="contactDetail" className="sr-only">
                  {contactMethod === "email"
                    ? "Ваш Email"
                    : "Telegram Username"}
                </label>
                <input
                  type={contactMethod === "email" ? "email" : "text"}
                  id="contactDetail"
                  placeholder={
                    contactMethod === "email"
                      ? "your-email@example.com"
                      : "@username"
                  }
                  {...register("contactDetail")}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                />
                {errors.contactDetail && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.contactDetail.message}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Сообщение"
                  {...register("message")}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 text-sm sm:text-base"
                >
                  {isSubmitted ? "Отправка..." : "Отправить"}
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-4 sm:mt-6 text-center">
              Отправляя заявку, вы соглашаетесь на обработку персональных
              данных.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
