import { useMemo } from "react";
import { useProgress } from "../context/ProgressContext";
import { useLanguage } from "../context/LanguageContext";
import { achievements, levels } from "../data/achievements";
import { vocabulary } from "../data/vocabulary";
import { phrases } from "../data/phrases";
import { grammarTopics } from "../data/grammar";
import {
  Card,
  Button,
  Badge,
  ProgressBar,
  CircularProgress,
} from "../components/UI";

export default function Progress() {
  const { progress, level, levelProgress, resetProgress } = useProgress();
  const { t } = useLanguage();

  // Calculate various stats
  const stats = useMemo(() => {
    const totalWords = vocabulary.length;
    const wordsLearned = progress.wordsLearned.length;
    const totalPhrases = phrases.length;
    const phrasesLearned = progress.phrasesLearned.length;
    const totalGrammar = grammarTopics.length;
    const grammarCompleted = progress.grammarCompleted.length;

    // Calculate average quiz score
    const averageQuizScore =
      progress.quizScores.length > 0
        ? Math.round(
            progress.quizScores.reduce((acc, q) => acc + q.percentage, 0) /
              progress.quizScores.length,
          )
        : 0;

    // Calculate recent quiz trend
    const recentQuizzes = progress.quizScores.slice(-5);
    const olderQuizzes = progress.quizScores.slice(-10, -5);
    let quizTrend = "neutral";
    if (recentQuizzes.length >= 3 && olderQuizzes.length >= 3) {
      const recentAvg =
        recentQuizzes.reduce((acc, q) => acc + q.percentage, 0) /
        recentQuizzes.length;
      const olderAvg =
        olderQuizzes.reduce((acc, q) => acc + q.percentage, 0) /
        olderQuizzes.length;
      if (recentAvg > olderAvg + 5) quizTrend = "up";
      else if (recentAvg < olderAvg - 5) quizTrend = "down";
    }

    return {
      totalWords,
      wordsLearned,
      wordsPercentage: Math.round((wordsLearned / totalWords) * 100),
      totalPhrases,
      phrasesLearned,
      phrasesPercentage: Math.round((phrasesLearned / totalPhrases) * 100),
      totalGrammar,
      grammarCompleted,
      grammarPercentage: Math.round((grammarCompleted / totalGrammar) * 100),
      averageQuizScore,
      quizTrend,
      totalAchievements: achievements.length,
      unlockedAchievements: progress.achievementsUnlocked.length,
    };
  }, [progress]);

  // Get streak calendar data (last 30 days)
  const getStreakCalendar = () => {
    const weeks = [];
    for (let week = 0; week < 4; week++) {
      const days = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date();
        date.setDate(date.getDate() - (27 - (week * 7 + day)));
        const dateStr = date.toDateString();
        days.push({
          date: date.getDate(),
          studied: progress.studyDates.includes(dateStr),
          isToday: date.toDateString() === new Date().toDateString(),
        });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const streakCalendar = getStreakCalendar();

  // Get unlocked and locked achievements
  const unlockedAchievements = achievements.filter((a) =>
    progress.achievementsUnlocked.includes(a.id),
  );
  const lockedAchievements = achievements.filter(
    (a) => !progress.achievementsUnlocked.includes(a.id),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t("progress.title")} 📊
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t("progress.subtitle")}
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {/* Level Card */}
        <Card className="p-6 md:col-span-2">
          <div className="flex items-center gap-6">
            <div
              className={`w-24 h-24 rounded-2xl ${level.color} flex flex-col items-center justify-center text-white`}
            >
              <span className="text-3xl font-bold">{level.level}</span>
              <span className="text-xs opacity-80">{t("nav.level")}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {level.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {level.titleVi} • {progress.totalPoints} points
              </p>
              <ProgressBar
                value={levelProgress.progress}
                max={100}
                size="lg"
                color="gradient"
              />
              {levelProgress.nextLevel && (
                <p className="text-xs text-gray-400 mt-2">
                  {levelProgress.pointsNeeded} points to{" "}
                  {levelProgress.nextLevel.title}
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Streak Card */}
        <Card className="p-6">
          <div className="text-center">
            <div className="text-5xl mb-2">🔥</div>
            <p className="text-4xl font-bold text-orange-500">
              {progress.streak}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("progress.currentStreak")}
            </p>
            {progress.streak >= 7 && (
              <Badge variant="warning" className="mt-2">
                On fire!
              </Badge>
            )}
          </div>
        </Card>

        {/* Quick Stats Card */}
        <Card className="p-6">
          <div className="text-center">
            <div className="text-5xl mb-2">🏆</div>
            <p className="text-4xl font-bold text-yellow-500">
              {stats.unlockedAchievements}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("dashboard.of")} {stats.totalAchievements}{" "}
              {t("progress.achievements")}
            </p>
          </div>
        </Card>
      </div>

      {/* Learning Progress */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Vocabulary Progress */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Vocabulary
            </h3>
            <CircularProgress
              value={stats.wordsLearned}
              max={stats.totalWords}
              color="blue"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Words Learned</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {stats.wordsLearned}/{stats.totalWords}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Favorites</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {progress.wordsFavorited.length}
              </span>
            </div>
          </div>
        </Card>

        {/* Phrases Progress */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Phrases
            </h3>
            <CircularProgress
              value={stats.phrasesLearned}
              max={stats.totalPhrases}
              color="purple"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Phrases Learned</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {stats.phrasesLearned}/{stats.totalPhrases}
              </span>
            </div>
          </div>
        </Card>

        {/* Grammar Progress */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Grammar
            </h3>
            <CircularProgress
              value={stats.grammarCompleted}
              max={stats.totalGrammar}
              color="green"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Topics Completed</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {stats.grammarCompleted}/{stats.totalGrammar}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Quiz Stats and Calendar */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Quiz Statistics */}
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Quiz Statistics
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">
                {progress.quizzesCompleted}
              </p>
              <p className="text-sm text-gray-500">Quizzes Completed</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-3xl font-bold text-green-600">
                {stats.averageQuizScore}%
              </p>
              <p className="text-sm text-gray-500">Average Score</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600">
                {progress.perfectQuizzes}
              </p>
              <p className="text-sm text-gray-500">Perfect Scores</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">
                {progress.flashcardsReviewed}
              </p>
              <p className="text-sm text-gray-500">Flashcards Reviewed</p>
            </div>
          </div>

          {/* Recent quizzes */}
          {progress.quizScores.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Recent Quizzes
              </h4>
              <div className="space-y-2">
                {progress.quizScores
                  .slice(-5)
                  .reverse()
                  .map((quiz, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(quiz.date).toLocaleDateString()}
                      </span>
                      <Badge
                        variant={
                          quiz.percentage >= 80
                            ? "success"
                            : quiz.percentage >= 60
                              ? "warning"
                              : "danger"
                        }
                      >
                        {quiz.percentage}%
                      </Badge>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </Card>

        {/* Study Calendar */}
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Study Calendar
          </h3>

          <div className="mb-4">
            <div className="grid grid-cols-7 gap-1 mb-1 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <span key={i} className="text-xs text-gray-400">
                  {day}
                </span>
              ))}
            </div>
            <div className="space-y-1">
              {streakCalendar.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`aspect-square rounded flex items-center justify-center text-xs font-medium ${
                        day.studied
                          ? "bg-green-500 text-white"
                          : day.isToday
                            ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 ring-2 ring-blue-500"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                      }`}
                    >
                      {day.date}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-500" />
              <span className="text-gray-500">Studied</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-100 dark:bg-blue-900/50 ring-2 ring-blue-500" />
              <span className="text-gray-500">Today</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <div className="space-y-6">
        {/* Unlocked Achievements */}
        {unlockedAchievements.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Unlocked Achievements 🏆
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {unlockedAchievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="p-4 text-center bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {achievement.titleVi}
                  </p>
                  <Badge variant="warning" className="mt-2">
                    +{achievement.points}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        {lockedAchievements.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Locked Achievements 🔒
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {lockedAchievements.slice(0, 12).map((achievement) => (
                <Card
                  key={achievement.id}
                  className="p-4 text-center opacity-60"
                >
                  <div className="text-4xl mb-2 grayscale">🔒</div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* All Levels */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          All Levels
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {levels.map((lvl) => (
            <Card
              key={lvl.level}
              className={`p-4 text-center ${
                lvl.level <= level.level
                  ? "ring-2 ring-green-500"
                  : "opacity-60"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full ${lvl.color} mx-auto mb-2 flex items-center justify-center text-white font-bold`}
              >
                {lvl.level}
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                {lvl.title}
              </h4>
              <p className="text-xs text-gray-500">{lvl.titleVi}</p>
              <p className="text-xs text-gray-400 mt-1">{lvl.minPoints}+ pts</p>
              {lvl.level <= level.level && (
                <Badge variant="success" className="mt-2" icon="✓">
                  Reached
                </Badge>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Reset Progress (danger zone) */}
      <Card className="p-6 mt-8 border-2 border-red-200 dark:border-red-900">
        <h3 className="font-semibold text-red-600 mb-2">Danger Zone</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Reset all your progress. This action cannot be undone.
        </p>
        <Button
          variant="danger"
          onClick={() => {
            if (
              confirm(
                "Are you sure you want to reset all progress? This cannot be undone!",
              )
            ) {
              resetProgress();
            }
          }}
        >
          Reset All Progress
        </Button>
      </Card>
    </div>
  );
}
