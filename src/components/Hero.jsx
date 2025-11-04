import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#070815] text-white">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-[40rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
              New • Superhero Movie Game
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Wield the Legendary Shield
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400">Defend the City. Become the Hero.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Dive into a cinematic action experience. Master the rotating shield, chain dazzling combos, and protect your world in an interactive, modern adventure.
            </p>
            <div className="flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">
                Play Free Demo
              </a>
              <a href="#trailer" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition">
                Watch Trailer
              </a>
            </div>
          </div>

          {/* Spline 3D Scene */}
          <div className="relative h-[380px] sm:h-[520px] md:h-[600px] lg:h-[680px] w-full rounded-xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient edges to blend scene; won't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070815] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
