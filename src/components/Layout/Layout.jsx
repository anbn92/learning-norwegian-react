import Navbar from './Navbar';
import Footer from './Footer';
import Toast from '../UI/Toast';
import AchievementPopup from '../UI/AchievementPopup';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toast />
      <AchievementPopup />
    </div>
  );
}
