import { CreditCard, ShieldCheck, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Card issuing',
    desc: 'Virtual and physical cards with granular controls, tokenization, and real-time spend limits.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, anomaly detection, and fraud prevention by default.',
  },
  {
    icon: Globe,
    title: 'Global payments',
    desc: 'Scale internationally with multi-currency support and localized payment methods.',
  },
  {
    icon: BarChart3,
    title: 'Treasury & analytics',
    desc: 'Cash management, reconciliation, and insights that power confident decisions.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-64 max-w-7xl bg-gradient-to-b from-cyan-200/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to build modern finance
          </h2>
          <p className="mt-3 text-slate-600">
            APIs that are fast to integrate, reliable at scale, and delightful to use.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur-md ring-1 ring-black/5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
