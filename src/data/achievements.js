// Achievements and badges for gamification
export const achievements = [
  // Word milestones
  { id: 'first_word', title: 'First Word', titleVi: 'Từ đầu tiên', description: 'Learn your first Norwegian word', icon: '🌱', requirement: { type: 'words_learned', count: 1 }, points: 10 },
  { id: 'word_collector_10', title: 'Word Collector', titleVi: 'Sưu tầm từ', description: 'Learn 10 words', icon: '📚', requirement: { type: 'words_learned', count: 10 }, points: 25 },
  { id: 'word_master_25', title: 'Word Master', titleVi: 'Bậc thầy từ vựng', description: 'Learn 25 words', icon: '🎓', requirement: { type: 'words_learned', count: 25 }, points: 50 },
  { id: 'vocabulary_hero_50', title: 'Vocabulary Hero', titleVi: 'Anh hùng từ vựng', description: 'Learn 50 words', icon: '🦸', requirement: { type: 'words_learned', count: 50 }, points: 100 },
  { id: 'language_master_100', title: 'Language Master', titleVi: 'Bậc thầy ngôn ngữ', description: 'Learn 100 words', icon: '👑', requirement: { type: 'words_learned', count: 100 }, points: 200 },

  // Quiz achievements
  { id: 'first_quiz', title: 'Quiz Starter', titleVi: 'Bắt đầu làm quiz', description: 'Complete your first quiz', icon: '✨', requirement: { type: 'quizzes_completed', count: 1 }, points: 15 },
  { id: 'quiz_enthusiast', title: 'Quiz Enthusiast', titleVi: 'Người yêu quiz', description: 'Complete 5 quizzes', icon: '🎯', requirement: { type: 'quizzes_completed', count: 5 }, points: 50 },
  { id: 'quiz_master', title: 'Quiz Master', titleVi: 'Bậc thầy quiz', description: 'Complete 20 quizzes', icon: '🏆', requirement: { type: 'quizzes_completed', count: 20 }, points: 150 },
  { id: 'perfect_score', title: 'Perfect Score', titleVi: 'Điểm hoàn hảo', description: 'Get 100% on a quiz', icon: '💯', requirement: { type: 'perfect_quiz', count: 1 }, points: 75 },
  { id: 'triple_perfect', title: 'Triple Perfect', titleVi: 'Ba lần hoàn hảo', description: 'Get three perfect scores', icon: '🌟', requirement: { type: 'perfect_quiz', count: 3 }, points: 150 },

  // Streak achievements
  { id: 'first_streak', title: 'Getting Started', titleVi: 'Bắt đầu', description: 'Study for 2 days in a row', icon: '🔥', requirement: { type: 'streak', count: 2 }, points: 20 },
  { id: 'week_streak', title: 'Week Warrior', titleVi: 'Chiến binh tuần', description: 'Study for 7 days in a row', icon: '⚡', requirement: { type: 'streak', count: 7 }, points: 100 },
  { id: 'two_week_streak', title: 'Dedicated Learner', titleVi: 'Người học chăm chỉ', description: 'Study for 14 days in a row', icon: '💪', requirement: { type: 'streak', count: 14 }, points: 200 },
  { id: 'month_streak', title: 'Monthly Champion', titleVi: 'Vô địch tháng', description: 'Study for 30 days in a row', icon: '🏅', requirement: { type: 'streak', count: 30 }, points: 500 },

  // Flashcard achievements
  { id: 'flashcard_beginner', title: 'Flashcard Beginner', titleVi: 'Người mới dùng thẻ', description: 'Review 10 flashcards', icon: '🃏', requirement: { type: 'flashcards_reviewed', count: 10 }, points: 15 },
  { id: 'flashcard_pro', title: 'Flashcard Pro', titleVi: 'Chuyên gia thẻ', description: 'Review 50 flashcards', icon: '📇', requirement: { type: 'flashcards_reviewed', count: 50 }, points: 75 },
  { id: 'flashcard_master', title: 'Flashcard Master', titleVi: 'Bậc thầy thẻ', description: 'Review 200 flashcards', icon: '🎴', requirement: { type: 'flashcards_reviewed', count: 200 }, points: 200 },

  // Category achievements
  { id: 'greetings_complete', title: 'Greeting Expert', titleVi: 'Chuyên gia chào hỏi', description: 'Learn all greeting words', icon: '👋', requirement: { type: 'category_complete', category: 'greetings' }, points: 50 },
  { id: 'numbers_complete', title: 'Number Ninja', titleVi: 'Ninja số', description: 'Learn all numbers', icon: '🔢', requirement: { type: 'category_complete', category: 'numbers' }, points: 50 },
  { id: 'food_complete', title: 'Food Connoisseur', titleVi: 'Sành ăn', description: 'Learn all food words', icon: '🍽️', requirement: { type: 'category_complete', category: 'food' }, points: 75 },

  // Special achievements
  { id: 'night_owl', title: 'Night Owl', titleVi: 'Cú đêm', description: 'Study after 10 PM', icon: '🦉', requirement: { type: 'time_study', time: 'night' }, points: 25 },
  { id: 'early_bird', title: 'Early Bird', titleVi: 'Dậy sớm', description: 'Study before 7 AM', icon: '🐦', requirement: { type: 'time_study', time: 'morning' }, points: 25 },
  { id: 'weekend_warrior', title: 'Weekend Warrior', titleVi: 'Chiến binh cuối tuần', description: 'Study on both Saturday and Sunday', icon: '🎉', requirement: { type: 'weekend_study' }, points: 50 },

  // Grammar achievements
  { id: 'grammar_starter', title: 'Grammar Explorer', titleVi: 'Khám phá ngữ pháp', description: 'Complete your first grammar lesson', icon: '📝', requirement: { type: 'grammar_lessons', count: 1 }, points: 30 },
  { id: 'grammar_enthusiast', title: 'Grammar Enthusiast', titleVi: 'Yêu ngữ pháp', description: 'Complete 5 grammar lessons', icon: '📖', requirement: { type: 'grammar_lessons', count: 5 }, points: 100 },
  { id: 'grammar_master', title: 'Grammar Master', titleVi: 'Bậc thầy ngữ pháp', description: 'Complete all grammar lessons', icon: '🎖️', requirement: { type: 'grammar_lessons', count: 15 }, points: 300 },
];

// Levels based on total points
export const levels = [
  { level: 1, title: 'Beginner', titleVi: 'Người mới', minPoints: 0, maxPoints: 99, color: 'bg-gray-400' },
  { level: 2, title: 'Novice', titleVi: 'Tập sự', minPoints: 100, maxPoints: 249, color: 'bg-green-400' },
  { level: 3, title: 'Apprentice', titleVi: 'Học việc', minPoints: 250, maxPoints: 499, color: 'bg-blue-400' },
  { level: 4, title: 'Intermediate', titleVi: 'Trung cấp', minPoints: 500, maxPoints: 999, color: 'bg-purple-400' },
  { level: 5, title: 'Advanced', titleVi: 'Nâng cao', minPoints: 1000, maxPoints: 1999, color: 'bg-orange-400' },
  { level: 6, title: 'Expert', titleVi: 'Chuyên gia', minPoints: 2000, maxPoints: 3499, color: 'bg-pink-400' },
  { level: 7, title: 'Master', titleVi: 'Bậc thầy', minPoints: 3500, maxPoints: 5499, color: 'bg-yellow-400' },
  { level: 8, title: 'Grandmaster', titleVi: 'Đại sư', minPoints: 5500, maxPoints: 7999, color: 'bg-red-400' },
  { level: 9, title: 'Legend', titleVi: 'Huyền thoại', minPoints: 8000, maxPoints: 11999, color: 'bg-indigo-400' },
  { level: 10, title: 'Norwegian Viking', titleVi: 'Viking Na Uy', minPoints: 12000, maxPoints: Infinity, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
];

// Motivational quotes
export const motivationalQuotes = [
  { quote: 'Øvelse gjør mester.', translation: 'Practice makes perfect.', vietnamese: 'Luyện tập tạo nên sự hoàn hảo.' },
  { quote: 'Alle kan lære norsk!', translation: 'Everyone can learn Norwegian!', vietnamese: 'Ai cũng có thể học tiếng Na Uy!' },
  { quote: 'Små skritt fører til store mål.', translation: 'Small steps lead to big goals.', vietnamese: 'Bước nhỏ dẫn đến mục tiêu lớn.' },
  { quote: 'Hver dag er en ny mulighet.', translation: 'Every day is a new opportunity.', vietnamese: 'Mỗi ngày là một cơ hội mới.' },
  { quote: 'Du er sterkere enn du tror.', translation: 'You are stronger than you think.', vietnamese: 'Bạn mạnh mẽ hơn bạn nghĩ.' },
  { quote: 'Ikke gi opp!', translation: 'Don\'t give up!', vietnamese: 'Đừng bỏ cuộc!' },
  { quote: 'Språk åpner dører.', translation: 'Language opens doors.', vietnamese: 'Ngôn ngữ mở ra những cánh cửa.' },
  { quote: 'Sakte, men sikkert.', translation: 'Slowly but surely.', vietnamese: 'Chậm mà chắc.' },
  { quote: 'Den som intet våger, intet vinner.', translation: 'Nothing ventured, nothing gained.', vietnamese: 'Không mạo hiểm thì không có gì.' },
  { quote: 'Læring er en reise, ikke en destinasjon.', translation: 'Learning is a journey, not a destination.', vietnamese: 'Học hỏi là một hành trình, không phải đích đến.' },
  { quote: 'Gjør ditt beste hver dag.', translation: 'Do your best every day.', vietnamese: 'Làm tốt nhất mỗi ngày.' },
  { quote: 'Tålmodighet er en dyd.', translation: 'Patience is a virtue.', vietnamese: 'Kiên nhẫn là một đức tính.' },
];

export const getRandomQuote = () => {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
};

export const getLevelFromPoints = (points) => {
  return levels.find(level => points >= level.minPoints && points <= level.maxPoints) || levels[0];
};

export const getProgressToNextLevel = (points) => {
  const currentLevel = getLevelFromPoints(points);
  const nextLevelIndex = levels.findIndex(l => l.level === currentLevel.level) + 1;

  if (nextLevelIndex >= levels.length) {
    return { progress: 100, pointsNeeded: 0 };
  }

  const nextLevel = levels[nextLevelIndex];
  const pointsInCurrentLevel = points - currentLevel.minPoints;
  const pointsNeededForNextLevel = nextLevel.minPoints - currentLevel.minPoints;
  const progress = Math.min(100, (pointsInCurrentLevel / pointsNeededForNextLevel) * 100);

  return {
    progress,
    pointsNeeded: nextLevel.minPoints - points,
    nextLevel
  };
};

export default achievements;
