import { Gamepad2, Zap, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Rotating Shield Mechanics',
    desc: 'Curve throws, ricochet impacts, and momentum-based returns for high-skill plays.'
  },
  {
    icon: Gamepad2,
    title: 'Cinematic Combat',
    desc: 'Slow-mo finishers, environmental takedowns, and controller rumble support.'
  },
  {
    icon: Zap,
    title: 'Arcade Pace',
    desc: 'Pick-up-and-play depth with escalating challenges and boss arenas.'
  },
  {
    icon: Users,
    title: 'Co-op & Versus',
    desc: 'Team up to defend districts or duel in fast, competitive matches.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-[#0a0c1d] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Power-Packed Features</h2>
          <p className="text-white/70 mt-3">Built for entertainment, tuned for gamers, and fueled by superhero energy.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-lg shadow-black/10">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
