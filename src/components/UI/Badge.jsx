const variants = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400',
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400',
  secondary: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-400',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400',
  info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-400',
  formal: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-400',
  informal: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-400',
  neutral: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

export default function Badge({ children, variant = 'primary', size = 'sm', className = '', icon }) {
  return (
    <span className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}

export function DifficultyBadge({ difficulty }) {
  const labels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  };

  return (
    <Badge variant={difficulty}>
      {labels[difficulty] || difficulty}
    </Badge>
  );
}

export function FormalityBadge({ formality }) {
  const labels = {
    formal: 'Formal',
    informal: 'Informal',
    neutral: 'Neutral',
    urgent: 'Urgent',
  };

  const variants = {
    formal: 'formal',
    informal: 'informal',
    neutral: 'neutral',
    urgent: 'danger',
  };

  return (
    <Badge variant={variants[formality] || 'neutral'}>
      {labels[formality] || formality}
    </Badge>
  );
}
