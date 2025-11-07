export default function Features() {
  const features = [
    {
      title: 'Finance Tracking',
      desc: 'Connect accounts and categorize transactions automatically with smart rules.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12zm10.5-4.5a.75.75 0 00-1.5 0v3h-3a.75.75 0 000 1.5h3v3a.75.75 0 001.5 0v-3h3a.75.75 0 000-1.5h-3v-3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Budgets & Goals',
      desc: 'Create flexible budgets and get proactive alerts to stay on track.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path d="M12 6.75a.75.75 0 01.75.75v5.69l3.22 1.86a.75.75 0 11-.74 1.3l-3.5-2.02a.75.75 0 01-.38-.65V7.5a.75.75 0 01.75-.75z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 1.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Stock Analysis',
      desc: 'AI insights on tickers, fundamentals, and technicals with watchlists.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path fillRule="evenodd" d="M3 3.75A.75.75 0 013.75 3h16.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V3.75zM5.25 6A.75.75 0 016 5.25h2.25A.75.75 0 019 6v12a.75.75 0 01-1.5 0V6.75H6A.75.75 0 015.25 6zm6 3A.75.75 0 0112 8.25h2.25A.75.75 0 0115 9v9a.75.75 0 01-1.5 0V9.75H12A.75.75 0 0111.25 9zm6 3A.75.75 0 0118 11.25h2.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-5.25H18A.75.75 0 0117.25 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Paper Trading',
      desc: 'Practice strategies risk-free with real-time market data.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v2a1 1 0 01-1 1h-2.382a2 2 0 00-1.447.618l-1.171 1.264a2 2 0 01-1.447.618H9.447a2 2 0 01-1.447-.618L6.829 9.618A2 2 0 005.382 9H3a1 1 0 01-1-1V6z" />
          <path d="M3 10.5h3.382a2 2 0 011.447.618l1.171 1.264a2 2 0 001.447.618h5.106a2 2 0 001.447-.618l1.171-1.264a2 2 0 011.447-.618H21" />
          <path d="M3 15h2.382a2 2 0 011.447.618l1.171 1.264a2 2 0 001.447.618h6.106a2 2 0 001.447-.618l1.171-1.264A2 2 0 0118.618 15H21" />
        </svg>
      ),
    },
    {
      title: 'AI Chatbot',
      desc: 'Ask anything about your money and markets; get tailored answers instantly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path fillRule="evenodd" d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v6a2.25 2.25 0 01-2.25 2.25H13.5L9 19.5v-4.5H6.75A2.25 2.25 0 014.5 12.75v-6z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Everything you need to stay in control</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Powerful workflows wrapped in a delightful, minimalist interface.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/60 p-6 backdrop-blur shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 ring-1 ring-blue-200/60 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
