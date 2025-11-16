import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 p-3 backdrop-blur-md shadow-sm ring-1 ring-black/5 dark:bg-white/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-inner" />
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              NovaPay
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700/90 dark:text-slate-200/90">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
            <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition">Security</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-slate-900 dark:hover:text-white transition">Docs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">Sign in</button>
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Get started</button>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/60 backdrop-blur-md" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-3 backdrop-blur-md shadow-sm ring-1 ring-black/5">
            <div className="grid gap-2 text-sm">
              <a href="#features" className="rounded-xl px-3 py-2 hover:bg-black/5">Features</a>
              <a href="#security" className="rounded-xl px-3 py-2 hover:bg-black/5">Security</a>
              <a href="#pricing" className="rounded-xl px-3 py-2 hover:bg-black/5">Pricing</a>
              <a href="#docs" className="rounded-xl px-3 py-2 hover:bg-black/5">Docs</a>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
              <button className="flex-1 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
