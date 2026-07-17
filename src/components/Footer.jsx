import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary">TEJASSREE R R</h3>
            <p className="text-gray-400 text-sm mt-1">Frontend & Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/TEJASSREERR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-dark rounded-full hover:bg-primary/20 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tejassree-r-r-37a78b2a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-dark rounded-full hover:bg-primary/20 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Tejassree R R. Designed and developed with <FiHeart className="w-4 h-4 text-red-500" /> React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}