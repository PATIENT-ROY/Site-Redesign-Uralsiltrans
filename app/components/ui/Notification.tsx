// components/Notification.tsx
"use client";

import { useEffect, useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

type NotificationProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
};

export const Notification = ({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: NotificationProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const bgColor = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  }[type];

  const iconColor = {
    success: "text-green-500",
    error: "text-red-500",
    info: "text-blue-500",
  }[type];

  return (
    <div className="fixed top-4 center-4 z-50 animate-fade-in">
      <div
        className={`${bgColor} border px-4 py-3 rounded-lg shadow-lg max-w-xs md:max-w-sm flex items-start`}
      >
        <div className="flex-shrink-0 mr-3">
          <CheckCircleIcon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={() => {
            setVisible(false);
            onClose?.();
          }}
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
