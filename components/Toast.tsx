"use client";

import { useEffect } from "react";
import { X, AlertCircle, CheckCircle, Info } from "lucide-react";

export type ToastType = "error" | "success" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type = "info", onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const styles = {
    error: "border-accent-red text-foreground",
    success: "border-border text-foreground",
    info: "border-border text-foreground",
  };

  const icons = {
    error: <AlertCircle className="w-5 h-5 text-accent-red" />,
    success: <CheckCircle className="w-5 h-5 text-foreground" />,
    info: <Info className="w-5 h-5 text-foreground" />,
  };

  return (
    <div
      className={`fixed top-6 right-6 z-[100] max-w-sm w-full bg-background shadow-[4px_4px_0px_0px_oklch(0.20_0_0)] border-2 p-4
                  flex items-start gap-3 animate-in slide-in-from-right-5 ${styles[type]}`}
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground transition-colors duration-150"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
