export default function ProgressBar({
  value,
  max = 100,
  size = 'md',
  color = 'blue',
  showLabel = false,
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-500',
  };

  return (
    <div className={className}>
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${sizes[size]} ${colors[color]} rounded-full progress-bar`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
}

export function CircularProgress({ value, max = 100, size = 80, strokeWidth = 8, color = 'blue' }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colors = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    orange: 'text-orange-500',
    red: 'text-red-500',
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${colors[color]} transition-all duration-500 ease-out`}
        />
      </svg>
      <span className="absolute text-sm font-semibold text-gray-700 dark:text-gray-300">
        {Math.round(percentage)}%
      </span>
    </div>
  );
}
