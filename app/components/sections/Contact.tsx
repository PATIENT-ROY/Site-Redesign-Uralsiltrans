"use client";

import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "telegram">(
    "email"
  );
  const [contactDetail, setContactDetail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      phone,
      contactMethod,
      contactDetail,
      message,
    });
    setIsSubmitted(true);
    // Reset form or show success message
    setTimeout(() => {
      setIsSubmitted(false);
      // Optionally reset form fields
      setName("");
      setPhone("");
      setContactMethod("email");
      setContactDetail("");
      setMessage("");
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
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-sm sm:text-base">
                      {item.value}
                    </p>
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
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                />
              </div>

              {/* Contact Method Toggle */}
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Способ связи
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setContactMethod("email")}
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
                    onClick={() => setContactMethod("telegram")}
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
                  value={contactDetail}
                  onChange={(e) => setContactDetail(e.target.value)}
                  placeholder={
                    contactMethod === "email"
                      ? "your-email@example.com"
                      : "@username"
                  }
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Сообщение"
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm sm:text-base"
                ></textarea>
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

export default Contact;
