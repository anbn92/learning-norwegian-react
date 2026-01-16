import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useProgress } from '../../context/ProgressContext';

const navLinks = [
  { path: '/', label: 'Home', labelVi: 'Trang chủ', icon: '🏠' },
  { path: '/vocabulary', label: 'Vocabulary', labelVi: 'Từ vựng', icon: '📚' },
  { path: '/phrases', label: 'Phrases', labelVi: 'Cụm từ', icon: '💬' },
  { path: '/flashcards', label: 'Flashcards', labelVi: 'Thẻ học', icon: '🃏' },
  { path: '/quizzes', label: 'Quizzes', labelVi: 'Bài kiểm tra', icon: '🎯' },
  { path: '/grammar', label: 'Grammar', labelVi: 'Ngữ pháp', icon: '📝' },
  { path: '/progress', label: 'Progress', labelVi: 'Tiến độ', icon: '📊' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { progress, level } = useProgress();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇳🇴</span>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NorskLærer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                  location.pathname === link.path
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side - Stats & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Streak */}
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-orange-500">🔥</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">{progress.streak}</span>
            </div>

            {/* Level */}
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${level.color} text-white`}>
              Lv.{level.level}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Stats row */}
            <div className="flex items-center justify-center space-x-4 py-2 mb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-orange-500">🔥</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{progress.streak} streak</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${level.color} text-white`}>
                Level {level.level} - {level.title}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
                <span className="text-gray-400 text-sm ml-2">({link.labelVi})</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
