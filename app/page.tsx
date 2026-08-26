import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Navbar */}
      <header className="border-b border-slate-800/80 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
            SaaS<span className="text-indigo-400">Launch</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:inline-block">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:inline-block">Pricing</a>
            <Link href="/login" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl relative z-10">
          <span className="inline-block bg-indigo-950 border border-indigo-800/60 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
            Launch Your Startup in Hours, Not Weeks
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The ultimate full-stack SaaS boilerplate.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            Pre-configured with authentication, PostgreSQL database schemas, Stripe billing, and a modern dashboard so you can focus on building your product.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20 text-base">
              Buy Boilerplate — $79
            </a>
            <a href="#features" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold px-8 py-3.5 rounded-xl transition-all text-base">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t border-slate-900 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Everything You Need to Scale</h2>
            <p className="text-slate-400 text-lg">Skip the tedious boilerplate setup and ship your app today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-950 border border-indigo-800 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-lg mb-6">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Authentication Ready</h3>
              <p className="text-slate-400 leading-relaxed">Secure user signups, logins, and session handling fully integrated out of the box.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-950 border border-indigo-800 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-lg mb-6">💳</div>
              <h3 className="text-xl font-bold text-white mb-3">Stripe Billing</h3>
              <p className="text-slate-400 leading-relaxed">Pre-built checkout sessions and webhook listeners to automate subscription management.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-950 border border-indigo-800 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-lg mb-6">🗄️</div>
              <h3 className="text-xl font-bold text-white mb-3">PostgreSQL & Prisma</h3>
              <p className="text-slate-400 leading-relaxed">Clean database ORM configuration ready to connect seamlessly with Supabase or Neon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Simple, One-Time Investment</h2>
            <p className="text-slate-400 text-lg">Get lifelong access to the repository and all future updates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Community</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4">Starter Docs</h3>
                <div className="text-4xl font-extrabold text-white mb-6">$0</div>
                <p className="text-slate-400 text-sm mb-6">Access public setup guides and basic community tutorials.</p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">✓ Public documentation</li>
                  <li className="flex items-center gap-2">✓ Community support</li>
                </ul>
              </div>
              <Link href="/login" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 rounded-xl text-center transition-colors">
                Read Docs
              </Link>
            </div>
            {/* Pro Boilerplate Tier */}
            <div className="bg-slate-900 border-2 border-indigo-600 p-8 rounded-3xl flex flex-col justify-between relative shadow-xl shadow-indigo-950/50">
              <div className="absolute -top-3.5 right-8 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Lifetime Access
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Full Package</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4">SaaS Boilerplate</h3>
                <div className="text-4xl font-extrabold text-white mb-6">$79<span className="text-slate-400 text-lg font-normal">/lifetime</span></div>
                <p className="text-slate-400 text-sm mb-6">Complete source code access to accelerate your next software venture.</p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">✓ Full Next.js source code</li>
                  <li className="flex items-center gap-2">✓ Stripe checkout & webhook wiring</li>
                  <li className="flex items-center gap-2">✓ Prisma database schema setup</li>
                  <li className="flex items-center gap-2">✓ Free updates for life</li>
                </ul>
              </div>
              <Link href="/api/create-checkout-session" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl text-center transition-colors shadow-sm">
                Get Instant Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; 2026 SaaSLaunch. All rights reserved.</p>
          <p>Built for indie hackers and developers.</p>
        </div>
      </footer>

    </div>
  );
}