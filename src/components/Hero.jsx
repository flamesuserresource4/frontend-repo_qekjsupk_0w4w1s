import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-28 lg:pt-24 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              AI-powered • Finance Manager
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Master your money with FinSync
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
              Track expenses, set budgets, analyze stocks, and paper trade — all in one
              intelligent, beautifully simple workspace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow hover:shadow-md transition">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-slate-800 dark:text-slate-100 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=1" alt="user" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=2" alt="user" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=3" alt="user" />
              </div>
              <span>Trusted by 10k+ finance-savvy users</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 bg-white/40 dark:bg-slate-900/40">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-cyan-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
