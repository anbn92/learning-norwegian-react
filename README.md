# NorskLærer - Learn Norwegian for Vietnamese Speakers

A comprehensive web application for learning Norwegian from Vietnamese, built with React and Tailwind CSS.

## Features

### 📚 Vocabulary Learning
- 115+ Norwegian words with Vietnamese translations
- Organized into 12 categories (Greetings, Numbers, Food, Travel, etc.)
- Pronunciation guides for each word
- Example sentences in both languages
- Mark words as learned or favorite
- Study mode for focused learning

### 💬 Phrase Learning
- 80+ common phrases for various situations
- 10 situational categories (Restaurant, Shopping, Emergency, etc.)
- Formality indicators (formal/informal/neutral)
- Cultural notes for better understanding
- 5 interactive dialogue scenarios

### 🃏 Flashcard System
- Multiple pre-made decks (Basic Words, Greetings, Numbers, etc.)
- Create custom decks with your selected words
- Interactive flip cards with animations
- Track known vs. unknown cards
- Spaced repetition concept

### 🎯 Quiz Section
- 7 different quiz types:
  - Norwegian → Vietnamese translation
  - Vietnamese → Norwegian translation
  - Fill in the blanks
  - Sentence construction
  - Image matching
  - Phrase completion
  - Grammar quiz
- 110+ quiz questions
- Configurable question count
- Optional timer
- Detailed results breakdown

### 📝 Grammar Lessons
- 13 comprehensive grammar topics
- Vietnamese explanations
- Visual tables and charts
- Interactive exercises
- Topics include: Articles, Pronouns, Verbs, Word Order, and more

### 📊 Progress Tracking
- Level system with 10 levels
- Achievement badges (25+ achievements)
- Daily streak tracking
- Study calendar visualization
- Detailed statistics
- Points system

## Tech Stack

- **React 18** with Hooks (useState, useEffect, useContext, useMemo, useCallback)
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Vite** for fast development and building
- **LocalStorage** for data persistence

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd learning-norwegian-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── UI/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       ├── Modal.jsx
│       ├── ProgressBar.jsx
│       ├── SearchBar.jsx
│       ├── AudioButton.jsx
│       ├── Toast.jsx
│       └── AchievementPopup.jsx
├── context/
│   ├── ProgressContext.jsx
│   ├── ThemeContext.jsx
│   └── ToastContext.jsx
├── data/
│   ├── vocabulary.js
│   ├── phrases.js
│   ├── quizzes.js
│   ├── grammar.js
│   └── achievements.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Vocabulary.jsx
│   ├── Phrases.jsx
│   ├── Flashcards.jsx
│   ├── Quizzes.jsx
│   ├── Grammar.jsx
│   └── Progress.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Features in Detail

### Dark Mode
Toggle between light and dark themes with automatic system preference detection.

### Responsive Design
Mobile-first approach with breakpoints for tablet and desktop.

### Gamification
- Points for learning words, completing quizzes, and maintaining streaks
- Achievement badges for milestones
- Level progression system

### Data Persistence
All progress is saved to localStorage, including:
- Learned words and phrases
- Quiz scores
- Flashcard progress
- Streak data
- Custom decks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Norwegian vocabulary and grammar content curated for Vietnamese learners
- Icons using emojis for cross-platform compatibility
- Inspired by popular language learning applications
