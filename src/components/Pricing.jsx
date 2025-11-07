export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      tagline: 'For personal finance explorers',
      features: ['2 linked accounts', 'Monthly budgets', 'Basic AI chat (25 msgs/mo)'],
      cta: 'Get started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$12',
      tagline: 'Serious about your money',
      features: ['Unlimited accounts', 'Smart alerts & goals', 'Advanced AI insights', 'Paper trading'],
      cta: 'Start 14-day trial',
      highlight: true,
    },
    {
      name: 'Teams',
      price: '$29',
      tagline: 'Small teams and startups',
      features: ['Shared workspaces', 'Role-based access', 'Priority support'],
      cta: 'Contact sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Choose a plan that scales with you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-6 backdrop-blur shadow-sm ${
              p.highlight
                ? 'border-blue-300/70 bg-gradient-to-b from-blue-50/70 to-white dark:from-indigo-950/40 dark:to-slate-900/60 ring-1 ring-blue-200/40'
                : 'border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/60'
            }`}>
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Most Popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.tagline}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{p.price}</span>
                {p.price !== 'Free' && <span className="text-slate-500 dark:text-slate-400">/mo</span>}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 text-blue-600">
                      <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.28a.75.75 0 00-1.06-1.06L10.5 13.38l-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 font-medium ${
                p.highlight
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-md'
                  : 'ring-1 ring-slate-300 dark:ring-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
