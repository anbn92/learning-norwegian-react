import { useState } from 'react';
import { grammarTopics } from '../data/grammar';
import { useProgress } from '../context/ProgressContext';
import { useToast } from '../context/ToastContext';
import { Card, Button, Badge, DifficultyBadge, Modal, ProgressBar } from '../components/UI';

export default function Grammar() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const { progress, markGrammarCompleted } = useProgress();
  const { success } = useToast();

  const handleMarkCompleted = (topicId) => {
    markGrammarCompleted(topicId);
    success('Grammar lesson completed! +15 points');
  };

  const completedCount = progress.grammarCompleted.length;
  const totalTopics = grammarTopics.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Grammar / Ngữ pháp 📝
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn Norwegian grammar rules and patterns
        </p>
      </div>

      {/* Stats */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Topics Completed</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{completedCount}/{totalTopics}</p>
            </div>
            <div className="flex-1 max-w-xs">
              <ProgressBar
                value={completedCount}
                max={totalTopics}
                size="md"
                color="gradient"
                showLabel
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Topics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grammarTopics.map((topic) => (
          <GrammarTopicCard
            key={topic.id}
            topic={topic}
            isCompleted={progress.grammarCompleted.includes(topic.id)}
            onClick={() => setSelectedTopic(topic)}
          />
        ))}
      </div>

      {/* Topic Modal */}
      <Modal
        isOpen={!!selectedTopic}
        onClose={() => setSelectedTopic(null)}
        title={selectedTopic?.title}
        size="2xl"
      >
        {selectedTopic && (
          <GrammarLesson
            topic={selectedTopic}
            isCompleted={progress.grammarCompleted.includes(selectedTopic.id)}
            onMarkCompleted={() => handleMarkCompleted(selectedTopic.id)}
          />
        )}
      </Modal>
    </div>
  );
}

function GrammarTopicCard({ topic, isCompleted, onClick }) {
  return (
    <Card
      className={`p-4 cursor-pointer ${isCompleted ? 'ring-2 ring-green-500' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl">{topic.icon}</div>
        {isCompleted && (
          <Badge variant="success" icon="✓">Completed</Badge>
        )}
      </div>

      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
        {topic.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {topic.titleVi}
      </p>

      <DifficultyBadge difficulty={topic.difficulty} />
    </Card>
  );
}

function GrammarLesson({ topic, isCompleted, onMarkCompleted }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [showExercises, setShowExercises] = useState(false);

  const { content } = topic;
  const sections = content.sections;

  return (
    <div className="space-y-6">
      {/* Navigation tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-3">
        <button
          onClick={() => { setCurrentSection(-1); setShowExercises(false); }}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            currentSection === -1 && !showExercises
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Introduction
        </button>
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => { setCurrentSection(index); setShowExercises(false); }}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              currentSection === index && !showExercises
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {section.title}
          </button>
        ))}
        <button
          onClick={() => setShowExercises(true)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            showExercises
              ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          Exercises
        </button>
      </div>

      {/* Content */}
      {showExercises ? (
        <GrammarExercises
          exercises={content.exercises}
          onComplete={onMarkCompleted}
          isCompleted={isCompleted}
        />
      ) : currentSection === -1 ? (
        // Introduction
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {content.introduction}
          </p>

          {/* Tips */}
          {content.tips && content.tips.length > 0 && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
                💡 Tips
              </h4>
              <ul className="list-disc list-inside space-y-1">
                {content.tips.map((tip, index) => (
                  <li key={index} className="text-yellow-700 dark:text-yellow-300 text-sm">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples */}
          {content.examples && content.examples.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Examples</h4>
              <div className="space-y-2">
                {content.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {example.norwegian}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {example.vietnamese}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // Section content
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {sections[currentSection].content}
          </p>

          {/* Table */}
          {sections[currentSection].table && (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    {sections[currentSection].table.headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {sections[currentSection].table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white dark:bg-gray-900">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Navigation and completion */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          {currentSection > -1 && !showExercises && (
            <Button
              variant="ghost"
              onClick={() => setCurrentSection(currentSection - 1)}
            >
              ← Previous
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isCompleted && !showExercises && (
            <Button variant="success" onClick={onMarkCompleted}>
              Mark as Completed ✓
            </Button>
          )}
          {isCompleted && (
            <Badge variant="success" size="lg" icon="✓">Completed</Badge>
          )}
          {currentSection < sections.length - 1 && !showExercises && (
            <Button
              variant="primary"
              onClick={() => setCurrentSection(currentSection + 1)}
            >
              Next →
            </Button>
          )}
          {currentSection === sections.length - 1 && !showExercises && (
            <Button
              variant="primary"
              onClick={() => setShowExercises(true)}
            >
              Practice →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function GrammarExercises({ exercises, onComplete, isCompleted }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setUserAnswers({ ...userAnswers, [currentExercise]: answer });
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowResults(false);
    }
  };

  const exercise = exercises[currentExercise];
  const userAnswer = userAnswers[currentExercise] || '';
  const isCorrect = userAnswer.toLowerCase().trim() === exercise.answer.toLowerCase().trim();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          Exercise {currentExercise + 1} of {exercises.length}
        </h4>
        <ProgressBar
          value={currentExercise + 1}
          max={exercises.length}
          size="sm"
          color="green"
          className="w-32"
        />
      </div>

      <Card className="p-6">
        <p className="text-lg text-gray-900 dark:text-white mb-4">
          {exercise.question}
        </p>

        <input
          type="text"
          value={userAnswer}
          onChange={(e) => handleAnswer(e.target.value)}
          disabled={showResults}
          placeholder="Your answer..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {showResults && (
          <div className={`mt-4 p-3 rounded-lg ${
            isCorrect
              ? 'bg-green-100 dark:bg-green-900/30'
              : 'bg-red-100 dark:bg-red-900/30'
          }`}>
            {isCorrect ? (
              <p className="text-green-700 dark:text-green-400">✓ Correct!</p>
            ) : (
              <div>
                <p className="text-red-700 dark:text-red-400">✕ Not quite right</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Correct answer: <span className="font-medium">{exercise.answer}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        {!showResults ? (
          <Button
            variant="primary"
            onClick={handleCheck}
            disabled={!userAnswer.trim()}
          >
            Check Answer
          </Button>
        ) : currentExercise < exercises.length - 1 ? (
          <Button variant="primary" onClick={handleNext}>
            Next Exercise →
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-green-600">Exercises complete!</span>
            {!isCompleted && (
              <Button variant="success" onClick={onComplete}>
                Mark Lesson Complete
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
