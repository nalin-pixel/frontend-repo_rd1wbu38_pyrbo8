export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Have a bold idea?</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Tell us about your goals and timeline. We’ll assemble the right team and get to work.
        </p>

        <form className="mt-10 grid sm:grid-cols-3 gap-3">
          <input required name="name" placeholder="Your name" className="col-span-1 sm:col-span-1 rounded-md bg-white/10 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <input required name="email" placeholder="Email" type="email" className="col-span-1 sm:col-span-1 rounded-md bg-white/10 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
          <button type="submit" className="col-span-1 rounded-md bg-white text-slate-900 font-medium px-4 py-3 hover:bg-slate-100 transition-colors">Request consult</button>
        </form>
        <p className="mt-3 text-xs text-slate-400">We’ll get back within 24 hours.</p>
      </div>
    </section>
  )
}
