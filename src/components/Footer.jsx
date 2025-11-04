export default function Footer() {
  return (
    <footer className="bg-[#070815] border-t border-white/10 text-white py-10" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready to rise as the hero?</h3>
            <p className="text-white/70">Join the early access and claim your founder rewards.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">
            Get Early Access
          </a>
        </div>
        <p className="text-center text-white/50 text-sm mt-8">© {new Date().getFullYear()} Super Shield — A cinematic action game experience.</p>
      </div>
    </footer>
  );
}
