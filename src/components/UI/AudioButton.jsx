import { useState } from 'react';

export default function AudioButton({ className = '', size = 'md' }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const handleClick = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizes[size]} rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900 flex items-center justify-center transition-all ${
        isPlaying ? 'animate-pulse-custom' : ''
      } ${className}`}
      title="Play pronunciation"
    >
      {isPlaying ? '🔊' : '🔈'}
    </button>
  );
}
