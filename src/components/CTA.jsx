export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-6 py-16 shadow-2xl ring-1 ring-white/20 sm:px-16">
          <div className="absolute inset-0 -z-0 opacity-40" aria-hidden>
            <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Sync your finances with confidence</h2>
            <p className="mt-3 text-blue-50">Join thousands taking control with AI-driven clarity. Cancel anytime.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-blue-700 font-medium shadow hover:shadow-md transition">
                Create your account
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-white ring-1 ring-white/40 hover:bg-white/20">
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
