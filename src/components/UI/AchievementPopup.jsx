import { useEffect } from 'react';
import { useProgress } from '../../context/ProgressContext';

export default function AchievementPopup() {
  const { newAchievement, clearNewAchievement } = useProgress();

  useEffect(() => {
    if (newAchievement) {
      const timer = setTimeout(() => {
        clearNewAchievement();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [newAchievement, clearNewAchievement]);

  if (!newAchievement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full pointer-events-auto animate-bounce-custom border-2 border-yellow-400">
        {/* Confetti effect (visual only) */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-4xl">🎊</div>

        <div className="text-center">
          <div className="text-6xl mb-4">{newAchievement.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            Achievement Unlocked!
          </h3>
          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
            {newAchievement.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {newAchievement.description}
          </p>
          <div className="inline-flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
            <span>+{newAchievement.points}</span>
            <span>điểm</span>
          </div>
        </div>

        <button
          onClick={clearNewAchievement}
          className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          Awesome! 🎉
        </button>
      </div>
    </div>
  );
}
