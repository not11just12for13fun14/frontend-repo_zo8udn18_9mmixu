import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-100/30 via-blue-100/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1 py-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 px-3 py-1 text-xs font-medium text-cyan-700 shadow-sm backdrop-blur-md">
              <Zap size={14} /> Next-gen fintech infrastructure
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Move money with elegance and speed
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              NovaPay is the modern payments stack for ambitious teams. Issue cards, accept payments, and manage treasury with bank-grade security.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white font-semibold shadow-sm hover:bg-slate-800">
                Start for free
                <ArrowRight size={18} />
              </button>
              <button className="rounded-xl px-5 py-3 font-semibold text-slate-900 bg-white/70 backdrop-blur-md border border-slate-200 hover:bg-white">
                View pricing
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-600" /> PCI-DSS Level 1
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-600" /> SOC 2 Type II
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-600" /> 3D Secure
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-600" /> Tokenization
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/20 bg-white/40 backdrop-blur-xl ring-1 ring-black/5 shadow-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
