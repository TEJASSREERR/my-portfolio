import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internship/>
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App