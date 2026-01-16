import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🇳🇴</span>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NorskLærer
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Học tiếng Na Uy miễn phí cho người Việt Nam.
              <br />
              Learn Norwegian for free - designed for Vietnamese speakers.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Made with ❤️ for language learners
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vocabulary" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Vocabulary
                </Link>
              </li>
              <li>
                <Link to="/phrases" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Phrases
                </Link>
              </li>
              <li>
                <Link to="/flashcards" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Flashcards
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Quizzes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/grammar" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Grammar Guide
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Your Progress
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} NorskLærer. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🇻🇳 → 🇳🇴</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
