# Language Feature Documentation

## Overview

The app now supports three languages:

- 🇬🇧 English (en)
- 🇳🇴 Norwegian (no)
- 🇻🇳 Vietnamese (vi)

## How to Use Translations in Components

### 1. Import the useLanguage hook

```jsx
import { useLanguage } from "../context/LanguageContext";
```

### 2. Use the translation function in your component

```jsx
function MyComponent() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t("nav.home")}</h1>
      <p>{t("dashboard.welcome")}</p>
    </div>
  );
}
```

### 3. Available translation keys

#### Navigation (nav.\*)

- `nav.home` - Home
- `nav.vocabulary` - Vocabulary
- `nav.phrases` - Phrases
- `nav.flashcards` - Flashcards
- `nav.quizzes` - Quizzes
- `nav.grammar` - Grammar
- `nav.progress` - Progress
- `nav.streak` - streak
- `nav.level` - Level

#### Dashboard (dashboard.\*)

- `dashboard.welcome` - Welcome to NorskLærer
- `dashboard.subtitle` - Your Norwegian Learning Companion
- `dashboard.dailyGoal` - Daily Goal
- `dashboard.wordsLearned` - Words Learned
- `dashboard.phrasesLearned` - Phrases Learned
- `dashboard.avgQuizScore` - Avg Quiz Score
- `dashboard.quickAccess` - Quick Access
- `dashboard.stats` - Your Learning Stats
- `dashboard.recentActivity` - Recent Activity
- `dashboard.achievements` - Achievements
- `dashboard.streak` - Day Streak
- `dashboard.totalXP` - Total XP
- `dashboard.studyStreak` - Study Streak

#### Dashboard Descriptions (dashboard.description.\*)

- `dashboard.description.vocabulary` - Learn Norwegian words
- `dashboard.description.phrases` - Common expressions
- `dashboard.description.flashcards` - Practice with cards
- `dashboard.description.quizzes` - Test your knowledge
- `dashboard.description.grammar` - Learn grammar rules
- `dashboard.description.progress` - Track your learning

#### Common (common.\*)

- `common.start` - Start
- `common.continue` - Continue
- `common.viewAll` - View All
- `common.back` - Back
- `common.next` - Next
- `common.submit` - Submit
- `common.cancel` - Cancel
- `common.close` - Close
- `common.save` - Save
- `common.edit` - Edit
- `common.delete` - Delete
- `common.search` - Search
- `common.filter` - Filter
- `common.loading` - Loading...
- `common.error` - Error
- `common.success` - Success

## Adding New Translations

To add new translations, edit `src/data/translations.js`:

```js
export const translations = {
  en: {
    mySection: {
      myKey: "My English text",
    },
  },
  no: {
    mySection: {
      myKey: "Min norske tekst",
    },
  },
  vi: {
    mySection: {
      myKey: "Văn bản tiếng Việt của tôi",
    },
  },
};
```

Then use it in your component:

```jsx
const { t } = useLanguage();
<div>{t("mySection.myKey")}</div>;
```

## Language Selector

The language selector is located in the Navbar (top-right corner on desktop, next to theme toggle on mobile).
Click on the flag icon to see available languages and select one.

The selected language is saved to localStorage and persists across sessions.

## Example Usage in a Component

```jsx
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/UI";

function MyPage() {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t("dashboard.welcome")}</h1>
      <p>{t("dashboard.subtitle")}</p>

      <Button>{t("common.start")}</Button>

      <div>
        <h2>{t("dashboard.stats")}</h2>
        <p>{t("dashboard.wordsLearned")}: 50</p>
        <p>{t("dashboard.phrasesLearned")}: 20</p>
      </div>
    </div>
  );
}
```

## Accessing Current Language

```jsx
const { language } = useLanguage();

// language will be 'en', 'no', or 'vi'
if (language === "vi") {
  // Do something specific for Vietnamese
}
```

## Programmatically Changing Language

```jsx
const { setLanguage } = useLanguage();

// Change to Norwegian
setLanguage("no");

// Change to Vietnamese
setLanguage("vi");

// Change to English
setLanguage("en");
```
