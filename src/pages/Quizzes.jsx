import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  quizCategories,
  multipleChoiceNoVi,
  multipleChoiceViNo,
  fillInTheBlanks,
  sentenceConstruction,
  imageMatching,
  phraseCompletion,
  grammarQuestions,
} from '../data/quizzes';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';
import { Card, Button, Badge, ProgressBar, Modal } from '../components/UI';

const quizTypes = [
  { id: 'no-vi', name: 'Norwegian → Vietnamese', nameVi: 'Na Uy → Việt', icon: '🇳🇴➡️🇻🇳', description: 'Translate Norwegian to Vietnamese', questions: multipleChoiceNoVi },
  { id: 'vi-no', name: 'Vietnamese → Norwegian', nameVi: 'Việt → Na Uy', icon: '🇻🇳➡️🇳🇴', description: 'Translate Vietnamese to Norwegian', questions: multipleChoiceViNo },
  { id: 'fill', name: 'Fill in the Blanks', nameVi: 'Điền vào chỗ trống', icon: '✏️', description: 'Complete the sentence', questions: fillInTheBlanks },
  { id: 'construct', name: 'Sentence Construction', nameVi: 'Sắp xếp câu', icon: '🔧', description: 'Arrange words to form sentences', questions: sentenceConstruction },
  { id: 'image', name: 'Image Matching', nameVi: 'Ghép hình', icon: '🖼️', description: 'Match images with words', questions: imageMatching },
  { id: 'phrase', name: 'Phrase Completion', nameVi: 'Hoàn thành cụm từ', icon: '💬', description: 'Complete common phrases', questions: phraseCompletion },
  { id: 'grammar', name: 'Grammar Quiz', nameVi: 'Ngữ pháp', icon: '📝', description: 'Test your grammar knowledge', questions: grammarQuestions },
];

export default function Quizzes() {
  const [selectedQuizType, setSelectedQuizType] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    questionCount: 10,
    timer: false,
    timerMinutes: 5,
  });

  const { progress, recordQuizResult } = useProgress();
  const { success } = useToast();

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (score, total) => {
    recordQuizResult(score, total);
    const percentage = Math.round((score / total) * 100);
    if (percentage === 100) {
      success('Perfect score! 🎉 +30 points');
    } else if (percentage >= 80) {
      success(`Great job! ${percentage}% correct`);
    } else {
      success(`Quiz complete! ${percentage}% correct`);
    }
  };

  const handleBack = () => {
    setQuizStarted(false);
    setSelectedQuizType(null);
  };

  // Calculate stats
  const totalQuizzes = progress.quizzesCompleted;
  const averageScore = progress.quizScores.length > 0
    ? Math.round(progress.quizScores.reduce((acc, q) => acc + q.percentage, 0) / progress.quizScores.length)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Quizzes / Bài kiểm tra 🎯
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test your Norwegian knowledge with various quiz types
        </p>
      </div>

      {/* Stats */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quizzes Completed</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{totalQuizzes}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Average Score</p>
            <p className="text-xl font-bold text-blue-600">{averageScore}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Perfect Scores</p>
            <p className="text-xl font-bold text-green-600">{progress.perfectQuizzes}</p>
          </div>
        </div>
      </Card>

      {!selectedQuizType ? (
        // Quiz Type Selection
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Choose Quiz Type
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {quizTypes.map((quiz) => (
              <QuizTypeCard
                key={quiz.id}
                quiz={quiz}
                onSelect={() => setSelectedQuizType(quiz)}
              />
            ))}
          </div>
        </div>
      ) : !quizStarted ? (
        // Quiz Settings
        <QuizSettings
          quizType={selectedQuizType}
          settings={quizSettings}
          onSettingsChange={setQuizSettings}
          onStart={handleStartQuiz}
          onBack={() => setSelectedQuizType(null)}
        />
      ) : (
        // Active Quiz
        <QuizSession
          quizType={selectedQuizType}
          settings={quizSettings}
          onComplete={handleQuizComplete}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

function QuizTypeCard({ quiz, onSelect }) {
  return (
    <Card className="p-4 cursor-pointer" onClick={onSelect}>
      <div className="text-4xl mb-3">{quiz.icon}</div>
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {quiz.name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{quiz.nameVi}</p>
      <p className="text-xs text-gray-400 mt-2">{quiz.description}</p>
      <Badge variant="primary" className="mt-3">
        {quiz.questions.length} questions
      </Badge>
    </Card>
  );
}

function QuizSettings({ quizType, settings, onSettingsChange, onStart, onBack }) {
  const maxQuestions = Math.min(quizType.questions.length, 20);

  return (
    <div className="max-w-xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        ← Back
      </Button>

      <Card className="p-6">
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{quizType.icon}</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {quizType.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{quizType.nameVi}</p>
        </div>

        <div className="space-y-6">
          {/* Question count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Questions: {settings.questionCount}
            </label>
            <input
              type="range"
              min="5"
              max={maxQuestions}
              value={settings.questionCount}
              onChange={(e) => onSettingsChange({ ...settings, questionCount: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5</span>
              <span>{maxQuestions}</span>
            </div>
          </div>

          {/* Timer toggle */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Timer</p>
              <p className="text-sm text-gray-500">Add time pressure</p>
            </div>
            <button
              onClick={() => onSettingsChange({ ...settings, timer: !settings.timer })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.timer ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.timer ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {settings.timer && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Limit: {settings.timerMinutes} minutes
              </label>
              <input
                type="range"
                min="2"
                max="15"
                value={settings.timerMinutes}
                onChange={(e) => onSettingsChange({ ...settings, timerMinutes: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>
          )}
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          className="mt-8"
          onClick={onStart}
        >
          Start Quiz 🚀
        </Button>
      </Card>
    </div>
  );
}

function QuizSession({ quizType, settings, onComplete, onBack }) {
  // Shuffle and select questions
  const questions = useMemo(() => {
    const shuffled = [...quizType.questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, settings.questionCount);
  }, [quizType, settings.questionCount]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.timer ? settings.timerMinutes * 60 : null);
  const [quizEnded, setQuizEnded] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!settings.timer || quizEnded || timeLeft === null) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [settings.timer, quizEnded, timeLeft]);

  const currentQuestion = questions[currentIndex];
  const score = answers.filter((a, i) => a === getCorrectAnswer(questions[i])).length;

  function getCorrectAnswer(question) {
    if (question.correct !== undefined) return question.correct;
    if (question.answer !== undefined) return question.answer;
    return null;
  }

  const handleAnswer = (answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    setAnswers([...answers, answer]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      handleQuizEnd();
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleQuizEnd = () => {
    setQuizEnded(true);
    setShowResult(true);
    onComplete(score + (isAnswered && selectedAnswer === getCorrectAnswer(currentQuestion) ? 1 : 0), questions.length);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const finalScore = answers.filter((a, i) => a === getCorrectAnswer(questions[i])).length;
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (
      <div className="max-w-xl mx-auto">
        <Card className="p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage === 100 ? '🏆' : percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz Complete!
          </h2>

          <div className="text-5xl font-bold text-blue-600 mb-4">
            {percentage}%
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You got {finalScore} out of {questions.length} questions correct
          </p>

          {/* Results breakdown */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Results Breakdown</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {questions.map((q, i) => {
                const userAnswer = answers[i];
                const correctAnswer = getCorrectAnswer(q);
                const isCorrect = userAnswer === correctAnswer;

                return (
                  <div
                    key={i}
                    className={`p-2 rounded ${
                      isCorrect
                        ? 'bg-green-100 dark:bg-green-900/30'
                        : 'bg-red-100 dark:bg-red-900/30'
                    }`}
                  >
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {i + 1}. {q.question || q.sentence || q.words?.join(' ')}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {isCorrect ? '✓ Correct' : `✕ Your answer: ${q.options ? q.options[userAnswer] : userAnswer}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={onBack}>
              Back to Quizzes
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setCurrentIndex(0);
                setAnswers([]);
                setShowResult(false);
                setSelectedAnswer(null);
                setIsAnswered(false);
                setQuizEnded(false);
                if (settings.timer) setTimeLeft(settings.timerMinutes * 60);
              }}
            >
              Try Again
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={onBack}>
          ✕ Quit
        </Button>
        <div className="text-center">
          <p className="text-sm text-gray-500">Question {currentIndex + 1} of {questions.length}</p>
        </div>
        {settings.timer && (
          <div className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>
            ⏱ {formatTime(timeLeft)}
          </div>
        )}
      </div>

      <ProgressBar
        value={currentIndex + 1}
        max={questions.length}
        size="md"
        color="gradient"
        className="mb-6"
      />

      {/* Question Card */}
      <Card className="p-6 mb-6">
        <QuestionRenderer
          question={currentQuestion}
          quizType={quizType.id}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswer={handleAnswer}
        />
      </Card>

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-center animate-fadeIn">
          <Button variant="primary" size="lg" onClick={handleNext}>
            {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Question →'}
          </Button>
        </div>
      )}
    </div>
  );
}

function QuestionRenderer({ question, quizType, selectedAnswer, isAnswered, onAnswer }) {
  const correctAnswer = question.correct !== undefined ? question.correct : question.answer;

  // Multiple choice (no-vi, vi-no, phrase, grammar, image)
  if (question.options) {
    return (
      <div>
        {/* Question */}
        <div className="text-center mb-6">
          {quizType === 'image' && (
            <div className="text-6xl mb-4">{question.description}</div>
          )}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {question.question || question.sentence || 'What is this?'}
          </h3>
          {question.translation && (
            <p className="text-sm text-gray-500 mt-2">{question.translation}</p>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === correctAnswer;
            let buttonClass = 'p-4 text-left border-2 rounded-lg transition-all ';

            if (!isAnswered) {
              buttonClass += 'border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20';
            } else if (isCorrect) {
              buttonClass += 'border-green-500 bg-green-50 dark:bg-green-900/20';
            } else if (isSelected && !isCorrect) {
              buttonClass += 'border-red-500 bg-red-50 dark:bg-red-900/20';
            } else {
              buttonClass += 'border-gray-200 dark:border-gray-700 opacity-50';
            }

            return (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {option}
                </span>
                {isAnswered && isCorrect && <span className="ml-2">✓</span>}
                {isAnswered && isSelected && !isCorrect && <span className="ml-2">✕</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && question.explanation && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              💡 {question.explanation}
            </p>
          </div>
        )}
      </div>
    );
  }

  // Sentence construction
  if (question.words) {
    return (
      <SentenceConstructionQuestion
        question={question}
        isAnswered={isAnswered}
        onAnswer={onAnswer}
      />
    );
  }

  return null;
}

function SentenceConstructionQuestion({ question, isAnswered, onAnswer }) {
  const [arrangedWords, setArrangedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState(() =>
    [...question.words].sort(() => Math.random() - 0.5)
  );

  const handleWordClick = (word, fromArranged) => {
    if (isAnswered) return;

    if (fromArranged) {
      const index = arrangedWords.indexOf(word);
      setArrangedWords(arrangedWords.filter((_, i) => i !== index));
      setAvailableWords([...availableWords, word]);
    } else {
      const index = availableWords.indexOf(word);
      setAvailableWords(availableWords.filter((_, i) => i !== index));
      setArrangedWords([...arrangedWords, word]);
    }
  };

  const handleSubmit = () => {
    const userAnswer = arrangedWords.join(' ');
    onAnswer(userAnswer);
  };

  const isCorrect = arrangedWords.join(' ').toLowerCase() === question.correct.toLowerCase();

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
        Arrange the words to form a sentence
      </h3>
      <p className="text-sm text-gray-500 text-center mb-6">{question.translation}</p>

      {/* Arranged words area */}
      <div className="min-h-[60px] p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg mb-4 flex flex-wrap gap-2">
        {arrangedWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word, true)}
            disabled={isAnswered}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              isAnswered
                ? isCorrect
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {word}
          </button>
        ))}
        {arrangedWords.length === 0 && (
          <span className="text-gray-400 text-sm">Click words below to arrange</span>
        )}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {availableWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word, false)}
            disabled={isAnswered}
            className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all disabled:opacity-50"
          >
            {word}
          </button>
        ))}
      </div>

      {!isAnswered && arrangedWords.length === question.words.length && (
        <div className="flex justify-center">
          <Button variant="primary" onClick={handleSubmit}>
            Check Answer
          </Button>
        </div>
      )}

      {isAnswered && !isCorrect && (
        <div className="text-center">
          <p className="text-sm text-gray-500">Correct answer:</p>
          <p className="text-green-600 font-medium">{question.correct}</p>
        </div>
      )}
    </div>
  );
}
