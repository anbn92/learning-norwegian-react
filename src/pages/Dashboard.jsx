import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { Card, Button, ProgressBar } from '../components/UI';
import { getRandomQuote } from '../data/achievements';
import { vocabulary } from '../data/vocabulary';
import { phrases } from '../data/phrases';
import { useState, useEffect } from 'react';

const quickLinks = [
  { path: '/vocabulary', label: 'Vocabulary', labelVi: 'Từ vựng', icon: '📚', color: 'from-blue-500 to-blue-600', description: 'Learn Norwegian words' },
  { path: '/phrases', label: 'Phrases', labelVi: 'Cụm từ', icon: '💬', color: 'from-purple-500 to-purple-600', description: 'Common expressions' },
  { path: '/flashcards', label: 'Flashcards', labelVi: 'Thẻ học', icon: '🃏', color: 'from-green-500 to-green-600', description: 'Practice with cards' },
  { path: '/quizzes', label: 'Quizzes', labelVi: 'Bài kiểm tra', icon: '🎯', color: 'from-orange-500 to-orange-600', description: 'Test your knowledge' },
  { path: '/grammar', label: 'Grammar', labelVi: 'Ngữ pháp', icon: '📝', color: 'from-pink-500 to-pink-600', description: 'Learn grammar rules' },
  { path: '/progress', label: 'Progress', labelVi: 'Tiến độ', icon: '📊', color: 'from-cyan-500 to-cyan-600', description: 'Track your learning' },
];

export default function Dashboard() {
  const { progress, level, levelProgress } = useProgress();
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Calculate stats
  const totalWords = vocabulary.length;
  const wordsLearned = progress.wordsLearned.length;
  const totalPhrases = phrases.length;
  const phrasesLearned = progress.phrasesLearned.length;
  const averageQuizScore = progress.quizScores.length > 0
    ? Math.round(progress.quizScores.reduce((acc, q) => acc + q.percentage, 0) / progress.quizScores.length)
    : 0;

  // Get streak calendar data (last 7 days)
  const getStreakCalendar = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      days.push({
        day: date.toLocaleDateString('en', { weekday: 'short' }),
        date: date.getDate(),
        studied: progress.studyDates.includes(dateStr),
      });
    }
    return days;
  };

  const streakCalendar = getStreakCalendar();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl gradient-nordic p-8 md:p-12 mb-8">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Velkommen! 👋
          </h1>
          <p className="text-xl text-white/90 mb-2">Xin chào và chào mừng!</p>
          <p className="text-white/70 max-w-2xl">
            Start your Norwegian language journey today. Learn vocabulary, practice with flashcards,
            and test your knowledge with quizzes.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Words Learned</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{wordsLearned}</p>
              <p className="text-xs text-gray-400">of {totalWords}</p>
            </div>
            <div className="text-3xl">📚</div>
          </div>
          <ProgressBar value={wordsLearned} max={totalWords} size="sm" color="blue" className="mt-2" />
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Quiz Score</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{averageQuizScore}%</p>
              <p className="text-xs text-gray-400">{progress.quizzesCompleted} quizzes</p>
            </div>
            <div className="text-3xl">🎯</div>
          </div>
          <ProgressBar value={averageQuizScore} max={100} size="sm" color="green" className="mt-2" />
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{progress.streak}</p>
              <p className="text-xs text-gray-400">days</p>
            </div>
            <div className="text-3xl">🔥</div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Level</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{level.level}</p>
              <p className="text-xs text-gray-400">{level.title}</p>
            </div>
            <div className="text-3xl">⭐</div>
          </div>
          <ProgressBar value={levelProgress.progress} max={100} size="sm" color="purple" className="mt-2" />
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Quick Access */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Start Learning
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Card className="p-4 h-full hover:scale-105 transition-transform">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center text-2xl mb-3`}>
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{link.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{link.labelVi}</p>
                  <p className="text-xs text-gray-400 mt-1">{link.description}</p>
                </Card>
              </Link>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Continue Learning
            </h2>
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {wordsLearned === 0 ? 'Start with Vocabulary' : 'Keep up the great work!'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {wordsLearned === 0
                      ? 'Learn your first Norwegian words today'
                      : `You've learned ${wordsLearned} words. Keep going!`}
                  </p>
                </div>
                <Link to={wordsLearned < 20 ? '/vocabulary' : '/flashcards'}>
                  <Button variant="primary" icon="→" iconPosition="right">
                    {wordsLearned < 20 ? 'Learn Words' : 'Practice Now'}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Streak Calendar */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Weekly Streak
            </h3>
            <div className="flex justify-between">
              {streakCalendar.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-xs text-gray-400 mb-1">{day.day}</span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                      day.studied
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                    }`}
                  >
                    {day.studied ? '✓' : day.date}
                  </div>
                </div>
              ))}
            </div>
            {progress.streak >= 3 && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-3 text-center">
                🔥 You're on fire! {progress.streak} day streak!
              </p>
            )}
          </Card>

          {/* Motivational Quote */}
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-900 dark:text-white italic mb-2">
                "{quote.quote}"
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {quote.translation}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {quote.vietnamese}
              </p>
            </div>
          </Card>

          {/* Level Progress */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Level Progress
            </h3>
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-full ${level.color} flex items-center justify-center text-2xl font-bold text-white`}>
                {level.level}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">{level.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {progress.totalPoints} points
                </p>
                <ProgressBar value={levelProgress.progress} max={100} size="sm" color="gradient" />
                {levelProgress.nextLevel && (
                  <p className="text-xs text-gray-400 mt-1">
                    {levelProgress.pointsNeeded} points to {levelProgress.nextLevel.title}
                  </p>
                )}
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Flashcards Reviewed</span>
                <span className="font-medium text-gray-900 dark:text-white">{progress.flashcardsReviewed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Phrases Learned</span>
                <span className="font-medium text-gray-900 dark:text-white">{phrasesLearned}/{totalPhrases}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Perfect Quizzes</span>
                <span className="font-medium text-gray-900 dark:text-white">{progress.perfectQuizzes}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Achievements</span>
                <span className="font-medium text-gray-900 dark:text-white">{progress.achievementsUnlocked.length}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
