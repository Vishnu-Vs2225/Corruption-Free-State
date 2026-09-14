import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  duration?: number;
}

// Global event bus for lightweight static toast notifications without external dependencies
type ToastListener = (toast: ToastMessage) => void;
const listeners: Set<ToastListener> = new Set();

export const showToast = (toast: Omit<ToastMessage, 'id'>) => {
  const newToast: ToastMessage = {
    ...toast,
    id: `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
  };
  listeners.forEach((listener) => listener(newToast));
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleAddToast = (toast: ToastMessage) => {
      setToasts((prev) => [...prev, toast]);
      const duration = toast.duration || 5000;
      setTimeout(() => {
        removeToast(toast.id);
      }, duration);
    };

    listeners.add(handleAddToast);
    return () => {
      listeners.delete(handleAddToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      aria-label="Notifications"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-md w-[calc(100vw-2.5rem)] pointer-events-none"
    >
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
          error: <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />,
          warning: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />,
          info: <Info className="w-5 h-5 text-blue-500 shrink-0" />,
        };

        const bgStyles = {
          success: 'bg-emerald-950/95 border-emerald-800 text-emerald-100',
          error: 'bg-red-950/95 border-red-800 text-red-100',
          warning: 'bg-amber-950/95 border-amber-800 text-amber-100',
          info: 'bg-blue-950/95 border-blue-800 text-blue-100',
        };

        return (
          <div
            key={toast.id}
            role="status"
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 ${bgStyles[toast.type]}`}
          >
            {icons[toast.type]}
            <div className="flex-1 text-sm">
              <div className="font-bold leading-snug">{toast.title}</div>
              {toast.message && <div className="mt-1 opacity-90 text-xs leading-relaxed">{toast.message}</div>}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
