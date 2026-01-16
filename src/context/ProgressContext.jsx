import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { achievements, getLevelFromPoints, getProgressToNextLevel } from '../data/achievements';

const ProgressContext = createContext();

const STORAGE_KEY = 'norwegian_learning_progress';

const defaultProgress = {
  wordsLearned: [],
  wordsFavorited: [],
  phrasesLearned: [],
  flashcardsReviewed: 0,
  flashcardDecks: {},
  quizzesCompleted: 0,
  quizScores: [],
  perfectQuizzes: 0,
  grammarCompleted: [],
  totalPoints: 0,
  achievementsUnlocked: [],
  streak: 0,
  lastStudyDate: null,
  studyDates: [],
  totalStudyTime: 0,
  customDecks: [],
};

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultProgress, ...parsed };
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
    return defaultProgress;
  });

  const [newAchievement, setNewAchievement] = useState(null);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [progress]);

  // Check and update streak
  useEffect(() => {
    const today = new Date().toDateString();
    const lastStudy = progress.lastStudyDate;

    if (lastStudy) {
      const lastDate = new Date(lastStudy);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastDate.toDateString() !== today && lastDate.toDateString() !== yesterday.toDateString()) {
        // Streak broken
        setProgress(prev => ({ ...prev, streak: 0 }));
      }
    }
  }, []);

  // Check for new achievements
  const checkAchievements = useCallback((updatedProgress) => {
    const newlyUnlocked = [];

    achievements.forEach(achievement => {
      if (updatedProgress.achievementsUnlocked.includes(achievement.id)) return;

      let unlocked = false;

      switch (achievement.requirement.type) {
        case 'words_learned':
          unlocked = updatedProgress.wordsLearned.length >= achievement.requirement.count;
          break;
        case 'quizzes_completed':
          unlocked = updatedProgress.quizzesCompleted >= achievement.requirement.count;
          break;
        case 'perfect_quiz':
          unlocked = updatedProgress.perfectQuizzes >= achievement.requirement.count;
          break;
        case 'streak':
          unlocked = updatedProgress.streak >= achievement.requirement.count;
          break;
        case 'flashcards_reviewed':
          unlocked = updatedProgress.flashcardsReviewed >= achievement.requirement.count;
          break;
        case 'grammar_lessons':
          unlocked = updatedProgress.grammarCompleted.length >= achievement.requirement.count;
          break;
        default:
          break;
      }

      if (unlocked) {
        newlyUnlocked.push(achievement);
      }
    });

    return newlyUnlocked;
  }, []);

  const updateProgress = useCallback((updates) => {
    setProgress(prev => {
      const newProgress = { ...prev, ...updates };

      // Update study date and streak
      const today = new Date().toDateString();
      if (prev.lastStudyDate !== today) {
        const lastDate = prev.lastStudyDate ? new Date(prev.lastStudyDate) : null;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastDate && lastDate.toDateString() === yesterday.toDateString()) {
          newProgress.streak = prev.streak + 1;
        } else if (!lastDate || lastDate.toDateString() !== today) {
          newProgress.streak = 1;
        }

        newProgress.lastStudyDate = today;
        if (!newProgress.studyDates.includes(today)) {
          newProgress.studyDates = [...newProgress.studyDates, today];
        }
      }

      // Check for new achievements
      const newlyUnlocked = checkAchievements(newProgress);
      if (newlyUnlocked.length > 0) {
        newProgress.achievementsUnlocked = [
          ...newProgress.achievementsUnlocked,
          ...newlyUnlocked.map(a => a.id)
        ];
        newProgress.totalPoints += newlyUnlocked.reduce((sum, a) => sum + a.points, 0);
        setNewAchievement(newlyUnlocked[0]);
      }

      return newProgress;
    });
  }, [checkAchievements]);

  const markWordLearned = useCallback((wordId) => {
    if (!progress.wordsLearned.includes(wordId)) {
      updateProgress({
        wordsLearned: [...progress.wordsLearned, wordId],
        totalPoints: progress.totalPoints + 5,
      });
    }
  }, [progress.wordsLearned, progress.totalPoints, updateProgress]);

  const toggleWordFavorite = useCallback((wordId) => {
    const isFavorited = progress.wordsFavorited.includes(wordId);
    updateProgress({
      wordsFavorited: isFavorited
        ? progress.wordsFavorited.filter(id => id !== wordId)
        : [...progress.wordsFavorited, wordId],
    });
  }, [progress.wordsFavorited, updateProgress]);

  const markPhraseLearned = useCallback((phraseId) => {
    if (!progress.phrasesLearned.includes(phraseId)) {
      updateProgress({
        phrasesLearned: [...progress.phrasesLearned, phraseId],
        totalPoints: progress.totalPoints + 5,
      });
    }
  }, [progress.phrasesLearned, progress.totalPoints, updateProgress]);

  const recordFlashcardReview = useCallback((deckId, known) => {
    const deckProgress = progress.flashcardDecks[deckId] || { known: [], unknown: [] };
    updateProgress({
      flashcardsReviewed: progress.flashcardsReviewed + 1,
      flashcardDecks: {
        ...progress.flashcardDecks,
        [deckId]: deckProgress,
      },
      totalPoints: progress.totalPoints + (known ? 2 : 1),
    });
  }, [progress.flashcardsReviewed, progress.flashcardDecks, progress.totalPoints, updateProgress]);

  const recordQuizResult = useCallback((score, total) => {
    const percentage = (score / total) * 100;
    const isPerfect = percentage === 100;

    updateProgress({
      quizzesCompleted: progress.quizzesCompleted + 1,
      quizScores: [...progress.quizScores, { score, total, percentage, date: new Date().toISOString() }],
      perfectQuizzes: isPerfect ? progress.perfectQuizzes + 1 : progress.perfectQuizzes,
      totalPoints: progress.totalPoints + Math.round(percentage / 10) + (isPerfect ? 20 : 0),
    });
  }, [progress.quizzesCompleted, progress.quizScores, progress.perfectQuizzes, progress.totalPoints, updateProgress]);

  const markGrammarCompleted = useCallback((topicId) => {
    if (!progress.grammarCompleted.includes(topicId)) {
      updateProgress({
        grammarCompleted: [...progress.grammarCompleted, topicId],
        totalPoints: progress.totalPoints + 15,
      });
    }
  }, [progress.grammarCompleted, progress.totalPoints, updateProgress]);

  const createCustomDeck = useCallback((deck) => {
    updateProgress({
      customDecks: [...progress.customDecks, { ...deck, id: Date.now() }],
    });
  }, [progress.customDecks, updateProgress]);

  const deleteCustomDeck = useCallback((deckId) => {
    updateProgress({
      customDecks: progress.customDecks.filter(d => d.id !== deckId),
    });
  }, [progress.customDecks, updateProgress]);

  const clearNewAchievement = useCallback(() => {
    setNewAchievement(null);
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const level = getLevelFromPoints(progress.totalPoints);
  const levelProgress = getProgressToNextLevel(progress.totalPoints);

  const value = {
    progress,
    level,
    levelProgress,
    newAchievement,
    clearNewAchievement,
    markWordLearned,
    toggleWordFavorite,
    markPhraseLearned,
    recordFlashcardReview,
    recordQuizResult,
    markGrammarCompleted,
    createCustomDeck,
    deleteCustomDeck,
    resetProgress,
    updateProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

export default ProgressContext;
