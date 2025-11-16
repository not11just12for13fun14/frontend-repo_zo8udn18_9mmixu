export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/20 bg-white/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400" />
            <span className="text-sm font-semibold text-slate-800">NovaPay</span>
          </div>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} NovaPay Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
