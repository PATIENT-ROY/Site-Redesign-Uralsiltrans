"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    email: yup
      .string()
      .required("Email обязателен")
      .when("contactType", {
        is: "email",
        then: (schema) => schema.email("Введите корректный email"),
        otherwise: (schema) =>
          schema.min(3, "Username должен содержать минимум 3 символа"),
      }),
    comment: yup
      .string()
      .required("Сообщение обязательно")
      .max(500, "Сообщение не должно превышать 500 символов"),
    contactType: yup.string().oneOf(["email", "telegram"]).required(),
  })
  .required();

type FormData = Omit<OrderFormData, "productName">;

export const OrderModal = ({
  isOpen,
  onClose,
  productName,
  onSubmit,
  onFormSubmitted,
}: OrderModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
      contactType: "email",
    },
  });

  const contactType = watch("contactType");

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

  const onSubmitForm = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit({ ...data, productName });
      reset();
      onFormSubmitted?.();
      // Close modal after successful submission
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

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
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="space-y-3 sm:space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                {...register("name")}
                onChange={handleNameInput}
                maxLength={50}
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white font-medium"
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Телефон"
                {...register("phone")}
                onChange={handlePhoneInput}
                maxLength={20}
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white font-medium"
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                Способ связи
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setValue("contactType", "email")}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 font-semibold flex-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    contactType === "email"
                      ? "bg-blue-100 text-blue-700 shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setValue("contactType", "telegram")}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 font-semibold flex-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    contactType === "telegram"
                      ? "bg-blue-100 text-blue-700 shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Telegram
                </button>
              </div>
            </div>

            <div>
              <input
                type={contactType === "email" ? "email" : "text"}
                placeholder={
                  contactType === "email" ? "Ваш Email" : "@username"
                }
                {...register("email")}
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 bg-white font-medium"
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Сообщение"
                rows={3}
                {...register("comment")}
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 text-sm sm:text-base transition-all duration-300 resize-none bg-white font-medium"
              ></textarea>
              {errors.comment && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.comment.message}
                </p>
              )}
            </div>

            <p className="text-xs text-center text-gray-700 mt-3 sm:mt-4 font-medium">
              Отправляя заявку вы соглашаетесь на обработку
              <br />
              <span className="text-gray-500">персональных данных</span>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:outline-none mt-3 sm:mt-4 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
