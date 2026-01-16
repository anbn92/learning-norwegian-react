import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import Vocabulary from './pages/Vocabulary'
import Phrases from './pages/Phrases'
import Flashcards from './pages/Flashcards'
import Quizzes from './pages/Quizzes'
import Grammar from './pages/Grammar'
import Progress from './pages/Progress'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Layout>
  )
}

export default App
