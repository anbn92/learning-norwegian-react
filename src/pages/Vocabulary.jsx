import { useState, useMemo } from "react";
import { vocabulary, vocabularyCategories } from "../data/vocabulary";
import { useProgress } from "../context/ProgressContext";
import { useToast } from "../context/ToastContext";
import {
  Card,
  Button,
  Badge,
  DifficultyBadge,
  SearchBar,
  Modal,
  AudioButton,
} from "../components/UI";

export default function Vocabulary() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [viewMode, setViewMode] = useState("browse"); // 'browse' or 'study'

  const { progress, markWordLearned, toggleWordFavorite } = useProgress();
  const { success } = useToast();

  // Filter vocabulary based on search, category, and difficulty
  const filteredVocabulary = useMemo(() => {
    return vocabulary.filter((word) => {
      const matchesCategory = !selectedCategory || word.category === selectedCategory;
      const matchesDifficulty = !selectedDifficulty || word.difficulty === selectedDifficulty;
      const matchesSearch =
        !searchQuery ||
        word.norwegian.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.vietnamese.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const handleMarkLearned = (wordId) => {
    markWordLearned(wordId);
    success("Word marked as learned! +5 points");
  };

  const handleToggleFavorite = (wordId) => {
    toggleWordFavorite(wordId);
  };

  const getCategoryCount = (categoryId) => {
    return vocabulary.filter((w) => w.category === categoryId).length;
  };

  const getLearnedCount = (categoryId) => {
    return vocabulary.filter(
      (w) => w.category === categoryId && progress.wordsLearned.includes(w.id),
    ).length;
  };

  return (
    <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Vocabulary / Từ vựng 📚
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn Norwegian words with Vietnamese translations
        </p>
      </div>

      {/* Stats Bar */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Words</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{vocabulary.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Learned</p>
              <p className="text-xl font-bold text-green-600">{progress.wordsLearned.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Favorites</p>
              <p className="text-xl font-bold text-pink-600">{progress.wordsFavorited.length}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "browse" ? "primary" : "outline"}
              size="sm"
              onClick={() => setViewMode("browse")}
            >
              Browse
            </Button>
            <Button
              variant={viewMode === "study" ? "primary" : "outline"}
              size="sm"
              onClick={() => setViewMode("study")}
            >
              Study Mode
            </Button>
          </div>
        </div>
      </Card>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Search words in Norwegian or Vietnamese..."
          className="flex-1"
        />
        <select
          value={selectedDifficulty || ""}
          onChange={(e) => setSelectedDifficulty(e.target.value || null)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Category Grid */}
      {!selectedCategory && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {vocabularyCategories.map((category) => (
              <Card
                key={category.id}
                className="p-4 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-2xl mb-2`}
                >
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{category.nameVi}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {getLearnedCount(category.id)}/{getCategoryCount(category.id)} learned
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Selected Category Header */}
      {selectedCategory && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => setSelectedCategory(null)}>
              ← Back
            </Button>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {vocabularyCategories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <Badge variant="primary">{filteredVocabulary.length} words</Badge>
          </div>
        </div>
      )}

      {/* Word Cards */}
      {viewMode === "browse" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredVocabulary.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              isLearned={progress.wordsLearned.includes(word.id)}
              isFavorite={progress.wordsFavorited.includes(word.id)}
              onMarkLearned={() => handleMarkLearned(word.id)}
              onToggleFavorite={() => handleToggleFavorite(word.id)}
              onClick={() => setSelectedWord(word)}
            />
          ))}
        </div>
      ) : (
        <StudyMode
          words={filteredVocabulary}
          onMarkLearned={handleMarkLearned}
          progress={progress}
        />
      )}

      {/* Empty state */}
      {filteredVocabulary.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No words found matching your criteria.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
              setSelectedDifficulty(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Word Detail Modal */}
      <Modal
        isOpen={!!selectedWord}
        onClose={() => setSelectedWord(null)}
        title="Word Details"
        size="lg"
      >
        {selectedWord && (
          <WordDetail
            word={selectedWord}
            isLearned={progress.wordsLearned.includes(selectedWord.id)}
            isFavorite={progress.wordsFavorited.includes(selectedWord.id)}
            onMarkLearned={() => handleMarkLearned(selectedWord.id)}
            onToggleFavorite={() => handleToggleFavorite(selectedWord.id)}
          />
        )}
      </Modal>
    </div>
  );
}

function WordCard({ word, isLearned, isFavorite, onMarkLearned, onToggleFavorite, onClick }) {
  return (
    <Card className={`p-4 relative ${isLearned ? "ring-2 ring-green-500" : ""}`} onClick={onClick}>
      {/* Favorite button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute top-3 right-3 text-xl hover:scale-110 transition-transform"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Norwegian word */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 pr-8">
        {word.norwegian}
      </h3>

      {/* Pronunciation */}
      <p className="text-sm text-gray-400 italic mb-2">/{word.pronunciation}/</p>

      {/* Vietnamese */}
      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{word.vietnamese}</p>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-3">
        <DifficultyBadge difficulty={word.difficulty} />
        {isLearned && (
          <Badge variant="success" icon="✓">
            Learned
          </Badge>
        )}
      </div>

      {/* Audio and Learn buttons */}
      <div className="flex items-center justify-between mt-4">
        <AudioButton size="sm" />
        {!isLearned && (
          <Button
            variant="success"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onMarkLearned();
            }}
          >
            Mark Learned
          </Button>
        )}
      </div>
    </Card>
  );
}

function WordDetail({ word, isLearned, isFavorite, onMarkLearned, onToggleFavorite }) {
  const category = vocabularyCategories.find((c) => c.id === word.category);

  return (
    <div className="space-y-6">
      {/* Main info */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{word.norwegian}</h2>
          <AudioButton size="lg" />
        </div>
        <p className="text-lg text-gray-400 italic mb-3">/{word.pronunciation}/</p>
        <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold">{word.vietnamese}</p>
      </div>

      {/* Badges */}
      <div className="flex items-center justify-center gap-3">
        <Badge variant="info">{category?.name}</Badge>
        <DifficultyBadge difficulty={word.difficulty} />
      </div>

      {/* Example sentences */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Example Sentences</h4>
        <div className="space-y-3">
          <div>
            <p className="text-gray-900 dark:text-white font-medium">{word.exampleNo}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{word.exampleVi}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-3">
        <Button
          variant={isFavorite ? "danger" : "outline"}
          onClick={onToggleFavorite}
          icon={isFavorite ? "❤️" : "🤍"}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
        {!isLearned && (
          <Button variant="success" onClick={onMarkLearned} icon="✓">
            Mark as Learned
          </Button>
        )}
        {isLearned && (
          <Badge variant="success" size="lg" icon="✓">
            Already Learned
          </Badge>
        )}
      </div>
    </div>
  );
}

function StudyMode({ words, onMarkLearned, progress }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Filter out already learned words
  const unlearnedWords = words.filter((w) => !progress.wordsLearned.includes(w.id));

  if (unlearnedWords.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          All words learned!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          You've learned all the words in this category. Great job!
        </p>
      </div>
    );
  }

  const currentWord = unlearnedWords[currentIndex % unlearnedWords.length];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % unlearnedWords.length);
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + unlearnedWords.length) % unlearnedWords.length);
  };

  const handleKnow = () => {
    onMarkLearned(currentWord.id);
    handleNext();
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} of {unlearnedWords.length} words to learn
        </p>
      </div>

      <Card className="p-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {currentWord.norwegian}
        </h3>
        <p className="text-lg text-gray-400 italic mb-4">/{currentWord.pronunciation}/</p>

        {showAnswer ? (
          <>
            <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              {currentWord.vietnamese}
            </p>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
              <p className="text-gray-900 dark:text-white">{currentWord.exampleNo}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {currentWord.exampleVi}
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={handleNext}>
                Don't Know
              </Button>
              <Button variant="success" onClick={handleKnow}>
                I Know This!
              </Button>
            </div>
          </>
        ) : (
          <Button variant="primary" size="lg" onClick={() => setShowAnswer(true)}>
            Show Answer
          </Button>
        )}
      </Card>

      <div className="flex justify-center gap-4 mt-6">
        <Button variant="ghost" onClick={handlePrevious}>
          ← Previous
        </Button>
        <Button variant="ghost" onClick={handleNext}>
          Next →
        </Button>
      </div>
    </div>
  );
}
