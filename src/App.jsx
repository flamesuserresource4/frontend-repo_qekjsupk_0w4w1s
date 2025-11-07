import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-slate-200/70 dark:border-slate-800/70 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="font-semibold text-slate-900 dark:text-white">FinSync</span>
            <span className="opacity-70">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
