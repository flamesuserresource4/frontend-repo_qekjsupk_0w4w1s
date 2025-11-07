import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-slate-950/50 border-b border-slate-200/60 dark:border-slate-800/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 shadow ring-1 ring-white/20" />
            <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">FinSync</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Pricing</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Sign in</button>
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-md transition">Get Started</button>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.75A.75.75 0 014.5 5h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6A.75.75 0 014.5 11h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6A.75.75 0 014.5 17h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-slate-700 dark:text-slate-200">Features</a>
            <a href="#pricing" className="block text-slate-700 dark:text-slate-200">Pricing</a>
            <a href="#faq" className="block text-slate-700 dark:text-slate-200">FAQ</a>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white">Get Started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
