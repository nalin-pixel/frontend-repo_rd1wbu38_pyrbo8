import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[radial-gradient(60%_60%_at_70%_-10%,rgba(56,189,248,0.25),rgba(99,102,241,0.15)_40%,transparent_70%)] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-black/5">
                Futuristic. Minimal. Powerful.
              </span>
              <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
                Build the future with a tech partner that moves fast
              </h1>
              <p className="text-slate-600 text-lg max-w-xl">
                We design and ship modern digital products — web, mobile, and AI — with an obsessive focus on performance and simplicity.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition-colors">
                  Start a project
                </a>
                <a href="#solutions" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur text-slate-900 ring-1 ring-black/10 px-5 py-3 font-medium hover:bg-white">
                  Explore solutions
                </a>
              </div>
            </motion.div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"></div>
    </section>
  )
}
