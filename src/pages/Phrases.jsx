import { useState, useMemo } from 'react';
import { phrases, phraseCategories, dialogues } from '../data/phrases';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';
import { Card, Button, Badge, FormalityBadge, SearchBar, Modal, AudioButton } from '../components/UI';

export default function Phrases() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [showDialogues, setShowDialogues] = useState(false);
  const [selectedDialogue, setSelectedDialogue] = useState(null);

  const { progress, markPhraseLearned } = useProgress();
  const { success } = useToast();

  // Filter phrases
  const filteredPhrases = useMemo(() => {
    return phrases.filter(phrase => {
      const matchesCategory = !selectedCategory || phrase.category === selectedCategory;
      const matchesSearch = !searchQuery ||
        phrase.norwegian.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phrase.vietnamese.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Filter dialogues
  const filteredDialogues = useMemo(() => {
    if (!selectedCategory) return dialogues;
    return dialogues.filter(d => d.category === selectedCategory);
  }, [selectedCategory]);

  const handleMarkLearned = (phraseId) => {
    markPhraseLearned(phraseId);
    success('Phrase marked as learned! +5 points');
  };

  const getCategoryCount = (categoryId) => {
    return phrases.filter(p => p.category === categoryId).length;
  };

  const getLearnedCount = (categoryId) => {
    return phrases.filter(p =>
      p.category === categoryId && progress.phrasesLearned.includes(p.id)
    ).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Phrases / Cụm từ 💬
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn common Norwegian phrases and expressions
        </p>
      </div>

      {/* Stats Bar */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Phrases</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{phrases.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Learned</p>
              <p className="text-xl font-bold text-green-600">{progress.phrasesLearned.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Dialogues</p>
              <p className="text-xl font-bold text-purple-600">{dialogues.length}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={!showDialogues ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setShowDialogues(false)}
            >
              Phrases
            </Button>
            <Button
              variant={showDialogues ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setShowDialogues(true)}
            >
              Dialogues
            </Button>
          </div>
        </div>
      </Card>

      {/* Search */}
      <div className="mb-6">
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Search phrases..."
          className="max-w-md"
        />
      </div>

      {/* Category Grid */}
      {!selectedCategory && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Situations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {phraseCategories.map((category) => (
              <Card
                key={category.id}
                className="p-4 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-2xl mb-2`}>
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back
            </Button>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {phraseCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <Badge variant="primary">
              {showDialogues ? filteredDialogues.length + ' dialogues' : filteredPhrases.length + ' phrases'}
            </Badge>
          </div>
        </div>
      )}

      {/* Content */}
      {!showDialogues ? (
        // Phrases Grid
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhrases.map((phrase) => (
            <PhraseCard
              key={phrase.id}
              phrase={phrase}
              isLearned={progress.phrasesLearned.includes(phrase.id)}
              onMarkLearned={() => handleMarkLearned(phrase.id)}
              onClick={() => setSelectedPhrase(phrase)}
            />
          ))}
        </div>
      ) : (
        // Dialogues
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDialogues.map((dialogue) => (
            <DialogueCard
              key={dialogue.id}
              dialogue={dialogue}
              onClick={() => setSelectedDialogue(dialogue)}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {((!showDialogues && filteredPhrases.length === 0) || (showDialogues && filteredDialogues.length === 0)) && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No results found.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Phrase Detail Modal */}
      <Modal
        isOpen={!!selectedPhrase}
        onClose={() => setSelectedPhrase(null)}
        title="Phrase Details"
        size="lg"
      >
        {selectedPhrase && (
          <PhraseDetail
            phrase={selectedPhrase}
            isLearned={progress.phrasesLearned.includes(selectedPhrase.id)}
            onMarkLearned={() => handleMarkLearned(selectedPhrase.id)}
          />
        )}
      </Modal>

      {/* Dialogue Modal */}
      <Modal
        isOpen={!!selectedDialogue}
        onClose={() => setSelectedDialogue(null)}
        title={selectedDialogue?.title}
        size="xl"
      >
        {selectedDialogue && (
          <DialogueDetail dialogue={selectedDialogue} />
        )}
      </Modal>
    </div>
  );
}

function PhraseCard({ phrase, isLearned, onMarkLearned, onClick }) {
  return (
    <Card
      className={`p-4 ${isLearned ? 'ring-2 ring-green-500' : ''}`}
      onClick={onClick}
    >
      {/* Norwegian phrase */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {phrase.norwegian}
      </h3>

      {/* Vietnamese */}
      <p className="text-blue-600 dark:text-blue-400 mb-3">
        {phrase.vietnamese}
      </p>

      {/* Context */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        📍 {phrase.context}
      </p>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3">
        <FormalityBadge formality={phrase.formality} />
        {isLearned && (
          <Badge variant="success" icon="✓">Learned</Badge>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
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

function PhraseDetail({ phrase, isLearned, onMarkLearned }) {
  const category = phraseCategories.find(c => c.id === phrase.category);

  return (
    <div className="space-y-6">
      {/* Main info */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {phrase.norwegian}
          </h2>
          <AudioButton size="lg" />
        </div>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
          {phrase.vietnamese}
        </p>
      </div>

      {/* Badges */}
      <div className="flex items-center justify-center gap-3">
        <Badge variant="info">{category?.name}</Badge>
        <FormalityBadge formality={phrase.formality} />
      </div>

      {/* Context */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Context</h4>
        <p className="text-gray-600 dark:text-gray-400">{phrase.context}</p>
      </div>

      {/* Cultural Note */}
      {phrase.culturalNote && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-400">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
            💡 Cultural Note
          </h4>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            {phrase.culturalNote}
          </p>
        </div>
      )}

      {/* Action */}
      <div className="flex justify-center">
        {!isLearned ? (
          <Button variant="success" onClick={onMarkLearned} icon="✓">
            Mark as Learned
          </Button>
        ) : (
          <Badge variant="success" size="lg" icon="✓">Already Learned</Badge>
        )}
      </div>
    </div>
  );
}

function DialogueCard({ dialogue, onClick }) {
  const category = phraseCategories.find(c => c.id === dialogue.category);

  return (
    <Card className="p-5 cursor-pointer" onClick={onClick}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {dialogue.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{dialogue.titleVi}</p>
        </div>
        <Badge variant="info">{category?.name}</Badge>
      </div>

      {/* Preview of first exchange */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span className="font-medium">{dialogue.exchanges[0].speaker}:</span>
        </p>
        <p className="text-gray-900 dark:text-white text-sm">
          {dialogue.exchanges[0].norwegian}
        </p>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        {dialogue.exchanges.length} exchanges • Click to view full dialogue
      </p>
    </Card>
  );
}

function DialogueDetail({ dialogue }) {
  return (
    <div className="space-y-4">
      <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
        {dialogue.titleVi}
      </p>

      <div className="space-y-4">
        {dialogue.exchanges.map((exchange, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                index % 2 === 0
                  ? 'bg-gray-100 dark:bg-gray-700 rounded-tl-none'
                  : 'bg-blue-100 dark:bg-blue-900/50 rounded-tr-none'
              }`}
            >
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                {exchange.speaker}
              </p>
              <p className="text-gray-900 dark:text-white font-medium">
                {exchange.norwegian}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {exchange.vietnamese}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <AudioButton size="lg" />
      </div>
    </div>
  );
}
