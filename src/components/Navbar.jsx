import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold tracking-wide text-white text-sm sm:text-base">SUPER SHIELD</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#trailer" className="hover:text-white transition">Trailer</a>
          <a href="#cta" className="hover:text-white transition">
            Play Now
          </a>
        </nav>
      </div>
    </header>
  );
}
