import { useToast } from '../../context/ToastContext';

const toastStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
};

const toastIcons = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

export default function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${toastStyles[toast.type]} px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 animate-slideIn min-w-[280px] max-w-md`}
        >
          <span className="text-lg">{toastIcons[toast.type]}</span>
          <span className="flex-1 text-sm font-medium">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/80 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
