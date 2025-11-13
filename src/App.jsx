import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} NovaTech. All rights reserved.
      </footer>
    </div>
  )
}

export default App
