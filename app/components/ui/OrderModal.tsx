"use client";

import { useState, useEffect } from "react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  onSubmit: (formData: OrderFormData) => void;
  onFormSubmitted?: () => void;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  comment: string;
  productName: string;
  contactType: "email" | "telegram";
}

export const OrderModal = ({
  isOpen,
  onClose,
  productName,
  onSubmit,
  onFormSubmitted,
}: OrderModalProps) => {
  const [formData, setFormData] = useState<Omit<OrderFormData, "productName">>({
    name: "",
    email: "",
    phone: "",
    comment: "",
    contactType: "email",
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: "",
        contactType: "email",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    onSubmit({ ...formData, productName });

    // Notify parent to show notification
    onFormSubmitted?.();

    // Close modal
    onClose();
  };

  const handleClose = () => {
    console.log("Close button clicked");
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log("Backdrop clicked");
      onClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Validation based on field type
    let validatedValue = value;

    switch (name) {
      case "name":
        // Only letters, spaces, and some special characters for names
        validatedValue = value.replace(/[^а-яёa-z\s\-'\.]/gi, "");
        break;
      case "phone":
        // Only numbers, spaces, parentheses, dashes, and plus sign
        validatedValue = value.replace(/[^\d\s\(\)\-\+]/g, "");
        break;
      case "email":
        if (formData.contactType === "email") {
          // Standard email validation
          validatedValue = value.replace(/[^\w@\.\-]/g, "");
        } else {
          // Telegram username - only letters, numbers, underscore
          validatedValue = value.replace(/[^\w]/g, "");
          // Ensure it starts with @ if not empty
          if (validatedValue && !validatedValue.startsWith("@")) {
            validatedValue = "@" + validatedValue;
          }
        }
        break;
      case "comment":
        // Allow all characters for comments
        validatedValue = value;
        break;
      default:
        validatedValue = value;
    }

    setFormData((prev) => ({ ...prev, [name]: validatedValue }));
  };

  const setContactType = (type: "email" | "telegram") => {
    setFormData((prev) => ({ ...prev, contactType: type }));
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999999] p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-gray-100/80 backdrop-blur-sm rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all duration-300 z-[999999] cursor-pointer"
          aria-label="Закрыть модальное окно"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white relative overflow-hidden">
          <h3 className="text-lg sm:text-xl font-bold relative z-10">
            Заказ: {productName}
          </h3>
          <p className="text-blue-100 mt-1 text-xs sm:text-sm relative z-10">
            Заполните форму для заказа
          </p>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                maxLength={50}
                pattern="[а-яёa-z\s\-'\.]+"
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                pattern="[\d\s\(\)\-\+]+"
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>

            <div className="relative">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Способ связи
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setContactType("email")}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 font-medium flex-1 text-xs sm:text-sm ${
                    formData.contactType === "email"
                      ? "bg-blue-100 text-blue-700 shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setContactType("telegram")}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 font-medium flex-1 text-xs sm:text-sm ${
                    formData.contactType === "telegram"
                      ? "bg-blue-100 text-blue-700 shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Telegram
                </button>
              </div>
            </div>

            <div>
              {formData.contactType === "email" ? (
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш Email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={100}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              ) : (
                <input
                  type="text"
                  name="email"
                  placeholder="@username"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={32}
                  pattern="@[\w]+"
                  className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              )}
            </div>

            <div>
              <textarea
                name="comment"
                placeholder="Сообщение"
                rows={3}
                value={formData.comment}
                onChange={handleChange}
                maxLength={500}
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
              ></textarea>
            </div>

            <p className="text-xs text-center text-gray-600 mt-3 sm:mt-4">
              Отправляя заявку вы соглашаетесь на обработку
              <br />
              <span className="text-gray-400">персональных данных</span>
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/20 focus:outline-none mt-3 sm:mt-4 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Отправить заявку</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
