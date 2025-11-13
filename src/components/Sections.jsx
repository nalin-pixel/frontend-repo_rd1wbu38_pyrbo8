import { Code, Cpu, Shield, Rocket } from 'lucide-react'

export default function Sections() {
  const features = [
    {
      icon: <Cpu className="h-5 w-5" />, 
      title: 'AI & Automation',
      desc: 'Integrate intelligent agents and workflows to scale your operations.'
    },
    {
      icon: <Code className="h-5 w-5" />, 
      title: 'Web & Mobile',
      desc: 'Ship fast with clean, modern experiences across platforms.'
    },
    {
      icon: <Shield className="h-5 w-5" />, 
      title: 'Cloud & Security',
      desc: 'Hardened infrastructure, privacy-first design, and compliance.'
    },
    {
      icon: <Rocket className="h-5 w-5" />, 
      title: 'Launch & Growth',
      desc: 'From MVP to scale — we optimize every step of the journey.'
    },
  ]

  return (
    <section id="solutions" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">End-to-end capabilities to design, build, and scale modern products.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all bg-white">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 text-white grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
