import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

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
        <h1 className="text-2xl font-bold text-primary">TEJASSREE R R</h1>
        
        <div className="hidden md:flex gap-8">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  )
}