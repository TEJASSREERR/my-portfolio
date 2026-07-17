import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide text-primary">TEJASSREE R R</h1>
        
        <div className="hidden md:flex gap-8">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Skills</Link>
          <Link to="internship" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Internship</Link>
          <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Certifications</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/TEJASSREERR" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-slate-200 transition-colors hover:border-primary hover:text-primary">
            <FiGithub className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/tejassree-r-r-37a78b2a0/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-slate-200 transition-colors hover:border-primary hover:text-primary">
            <FiLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}