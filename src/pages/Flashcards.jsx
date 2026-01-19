import { useState, useMemo, useCallback } from "react";
import { vocabulary, vocabularyCategories } from "../data/vocabulary";
import { useProgress } from "../context/ProgressContext";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../context/ToastContext";
import { Card, Button, Badge, ProgressBar, Modal } from "../components/UI";

// Predefined decks
const predefinedDecks = [
  {
    id: "basic",
    name: "Basic Words",
    nameVi: "Từ cơ bản",
    icon: "🌱",
    description: "Essential beginner vocabulary",
    filter: (w) => w.difficulty === "beginner",
  },
  {
    id: "greetings",
    name: "Greetings",
    nameVi: "Chào hỏi",
    icon: "👋",
    description: "Hello, goodbye, and more",
    filter: (w) => w.category === "greetings",
  },
  {
    id: "numbers",
    name: "Numbers",
    nameVi: "Số đếm",
    icon: "🔢",
    description: "Count from 1 to 1000",
    filter: (w) => w.category === "numbers",
  },
  {
    id: "food",
    name: "Food & Drinks",
    nameVi: "Đồ ăn",
    icon: "🍽️",
    description: "Culinary vocabulary",
    filter: (w) => w.category === "food",
  },
  {
    id: "travel",
    name: "Travel",
    nameVi: "Du lịch",
    icon: "✈️",
    description: "For your Norwegian trip",
    filter: (w) => w.category === "travel",
  },
  {
    id: "family",
    name: "Family",
    nameVi: "Gia đình",
    icon: "👨‍👩‍👧‍👦",
    description: "Family members",
    filter: (w) => w.category === "family",
  },
  {
    id: "daily",
    name: "Daily Life",
    nameVi: "Hàng ngày",
    icon: "🏠",
    description: "Everyday objects and activities",
    filter: (w) => w.category === "daily",
  },
  {
    id: "favorites",
    name: "Favorites",
    nameVi: "Yêu thích",
    icon: "❤️",
    description: "Your favorite words",
    filter: null,
    special: "favorites",
  },
  {
    id: "review",
    name: "Need Review",
    nameVi: "Cần ôn tập",
    icon: "🔄",
    description: "Words you need to practice",
    filter: null,
    special: "review",
  },
];

export default function Flashcards() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [showCreateDeck, setShowCreateDeck] = useState(false);

  const {
    progress,
    recordFlashcardReview,
    createCustomDeck,
    deleteCustomDeck,
  } = useProgress();
  const { t } = useLanguage();
  const { success, error } = useToast();

  // Get cards for a deck
  const getDeckCards = useCallback(
    (deck) => {
      if (deck.special === "favorites") {
        return vocabulary.filter((w) => progress.wordsFavorited.includes(w.id));
      }
      if (deck.special === "review") {
        // Words marked as "don't know" more often
        const deckProgress = progress.flashcardDecks || {};
        const reviewWords = [];
        Object.entries(deckProgress).forEach(([, data]) => {
          if (data.unknown && data.unknown.length > 0) {
            data.unknown.forEach((id) => {
              if (!reviewWords.includes(id)) {
                reviewWords.push(id);
              }
            });
          }
        });
        return vocabulary.filter((w) => reviewWords.includes(w.id));
      }
      if (deck.filter) {
        return vocabulary.filter(deck.filter);
      }
      if (deck.wordIds) {
        return vocabulary.filter((w) => deck.wordIds.includes(w.id));
      }
      return [];
    },
    [progress.wordsFavorited, progress.flashcardDecks],
  );

  const handleCreateDeck = (newDeck) => {
    createCustomDeck(newDeck);
    success("Custom deck created!");
    setShowCreateDeck(false);
  };

  const handleDeleteDeck = (deckId) => {
    deleteCustomDeck(deckId);
    success("Deck deleted");
  };

  // Combine predefined and custom decks
  const allDecks = [
    ...predefinedDecks,
    ...progress.customDecks.map((d) => ({
      ...d,
      custom: true,
      filter: null,
      wordIds: d.wordIds,
    })),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t("flashcards.title")} 🃏
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t("flashcards.subtitle")}
        </p>
      </div>

      {/* Stats */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cards Reviewed
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {progress.flashcardsReviewed}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Custom Decks
              </p>
              <p className="text-xl font-bold text-purple-600">
                {progress.customDecks.length}
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={() => setShowCreateDeck(true)}
            icon="+"
          >
            Create Deck
          </Button>
        </div>
      </Card>

      {!selectedDeck ? (
        // Deck Selection
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Choose a Deck
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allDecks.map((deck) => {
              const cards = getDeckCards(deck);
              return (
                <DeckCard
                  key={deck.id}
                  deck={deck}
                  cardCount={cards.length}
                  onSelect={() => setSelectedDeck(deck)}
                  onDelete={
                    deck.custom ? () => handleDeleteDeck(deck.id) : null
                  }
                />
              );
            })}
          </div>
        </div>
      ) : (
        // Flashcard Study Mode
        <FlashcardStudy
          deck={selectedDeck}
          cards={getDeckCards(selectedDeck)}
          onBack={() => setSelectedDeck(null)}
          onReview={recordFlashcardReview}
        />
      )}

      {/* Create Deck Modal */}
      <Modal
        isOpen={showCreateDeck}
        onClose={() => setShowCreateDeck(false)}
        title="Create Custom Deck"
        size="lg"
      >
        <CreateDeckForm
          onSubmit={handleCreateDeck}
          onCancel={() => setShowCreateDeck(false)}
        />
      </Modal>
    </div>
  );
}

function DeckCard({ deck, cardCount, onSelect, onDelete }) {
  return (
    <Card className="p-4 relative">
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
        >
          ✕
        </button>
      )}

      <div
        className="cursor-pointer"
        onClick={cardCount > 0 ? onSelect : undefined}
      >
        <div className="text-4xl mb-3">{deck.icon}</div>
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {deck.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {deck.nameVi}
        </p>
        <p className="text-xs text-gray-400 mt-2">{deck.description}</p>

        <div className="flex items-center justify-between mt-4">
          <Badge variant={cardCount > 0 ? "primary" : "neutral"}>
            {cardCount} cards
          </Badge>
          {deck.custom && <Badge variant="secondary">Custom</Badge>}
        </div>

        {cardCount === 0 && (
          <p className="text-xs text-orange-500 mt-2">
            No cards in this deck yet
          </p>
        )}
      </div>
    </Card>
  );
}

function FlashcardStudy({ deck, cards, onBack, onReview }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [unknownCards, setUnknownCards] = useState([]);
  const [sessionComplete, setSessionComplete] = useState(false);

  // Shuffle cards for study session
  const shuffledCards = useMemo(() => {
    return [...cards].sort(() => Math.random() - 0.5);
  }, [cards]);

  const currentCard = shuffledCards[currentIndex];
  const progress =
    ((knownCards.length + unknownCards.length) / shuffledCards.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (known) => {
    if (known) {
      setKnownCards([...knownCards, currentCard.id]);
    } else {
      setUnknownCards([...unknownCards, currentCard.id]);
    }

    onReview(deck.id, known);

    if (currentIndex + 1 >= shuffledCards.length) {
      setSessionComplete(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards([]);
    setUnknownCards([]);
    setSessionComplete(false);
  };

  const handlePracticeUnknown = () => {
    // Would filter to unknown cards - simplified for now
    handleRestart();
  };

  if (cards.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
          This deck has no cards.
        </p>
        <Button variant="outline" onClick={onBack}>
          ← Back to Decks
        </Button>
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="max-w-xl mx-auto">
        <Card className="p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Session Complete!
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-3xl font-bold text-green-600">
                {knownCards.length}
              </p>
              <p className="text-sm text-green-600">Known</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-3xl font-bold text-red-600">
                {unknownCards.length}
              </p>
              <p className="text-sm text-red-600">Need Review</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={onBack}>
              ← Back to Decks
            </Button>
            <Button variant="primary" onClick={handleRestart}>
              Study Again
            </Button>
            {unknownCards.length > 0 && (
              <Button variant="warning" onClick={handlePracticeUnknown}>
                Practice Unknown
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={onBack}>
          ← Back
        </Button>
        <div className="text-center">
          <h2 className="font-semibold text-gray-900 dark:text-white">
            {deck.name}
          </h2>
          <p className="text-sm text-gray-500">
            {currentIndex + 1} / {shuffledCards.length}
          </p>
        </div>
        <div className="w-16" /> {/* Spacer */}
      </div>

      {/* Progress bar */}
      <ProgressBar
        value={progress}
        max={100}
        size="md"
        color="gradient"
        className="mb-6"
      />

      {/* Flashcard */}
      <div className="flip-card h-80 mb-6" onClick={handleFlip}>
        <div
          className={`flip-card-inner w-full h-full ${isFlipped ? "flipped" : ""}`}
        >
          {/* Front */}
          <Card className="flip-card-front absolute w-full h-full p-8 flex flex-col items-center justify-center cursor-pointer">
            <p className="text-sm text-gray-400 mb-2">Norwegian</p>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {currentCard.norwegian}
            </h3>
            <p className="text-lg text-gray-400 italic">
              /{currentCard.pronunciation}/
            </p>
            <p className="text-sm text-gray-400 mt-6">Tap to reveal</p>
          </Card>

          {/* Back */}
          <Card className="flip-card-back absolute w-full h-full p-8 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <p className="text-sm text-gray-400 mb-2">Vietnamese</p>
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {currentCard.vietnamese}
            </h3>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 w-full">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {currentCard.exampleNo}
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Response buttons */}
      {isFlipped && (
        <div className="flex gap-4 justify-center animate-fadeIn">
          <Button
            variant="danger"
            size="lg"
            onClick={() => handleResponse(false)}
            icon="✕"
            className="flex-1 max-w-[200px]"
          >
            Don't Know
          </Button>
          <Button
            variant="success"
            size="lg"
            onClick={() => handleResponse(true)}
            icon="✓"
            className="flex-1 max-w-[200px]"
          >
            Know It!
          </Button>
        </div>
      )}

      {/* Stats */}
      <div className="flex justify-center gap-8 mt-6 text-sm">
        <div className="text-center">
          <p className="text-green-600 font-semibold">{knownCards.length}</p>
          <p className="text-gray-400">Known</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 font-semibold">{unknownCards.length}</p>
          <p className="text-gray-400">Review</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 font-semibold">
            {shuffledCards.length - knownCards.length - unknownCards.length}
          </p>
          <p className="text-gray-400">Remaining</p>
        </div>
      </div>
    </div>
  );
}

function CreateDeckForm({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [nameVi, setNameVi] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);

  const filteredWords = selectedCategory
    ? vocabulary.filter((w) => w.category === selectedCategory)
    : vocabulary;

  const handleWordToggle = (wordId) => {
    setSelectedWords((prev) =>
      prev.includes(wordId)
        ? prev.filter((id) => id !== wordId)
        : [...prev, wordId],
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || selectedWords.length === 0) return;

    onSubmit({
      name: name.trim(),
      nameVi: nameVi.trim() || name.trim(),
      description: description.trim(),
      icon: "📝",
      wordIds: selectedWords,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Deck Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="My Custom Deck"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Vietnamese Name (optional)
        </label>
        <input
          type="text"
          value={nameVi}
          onChange={(e) => setNameVi(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Bộ thẻ của tôi"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="A short description"
        />
      </div>

      {/* Category filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Filter by Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {vocabularyCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Word selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Select Words ({selectedWords.length} selected)
        </label>
        <div className="max-h-48 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-2 space-y-1">
          {filteredWords.map((word) => (
            <label
              key={word.id}
              className="flex items-center space-x-2 p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedWords.includes(word.id)}
                onChange={() => handleWordToggle(word.id)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-900 dark:text-white text-sm">
                {word.norwegian}
              </span>
              <span className="text-gray-500 text-sm">- {word.vietnamese}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={!name.trim() || selectedWords.length === 0}
        >
          Create Deck
        </Button>
      </div>
    </form>
  );
}
