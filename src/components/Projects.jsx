import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink, FiCpu } from 'react-icons/fi'

// Import all images
import PortfolioImg from '../assets/portfolio.jpg'           // ✅ Changed to your photo
import DashboardImg from '../assets/DASHBOARD.png'
import GpsHardwareImg from '../assets/livegps.png'
import GpsOutputImg from '../assets/gps-op.jpg'
import AirQualityHardwareImg from '../assets/airquality.png'
import AirQualityOutputImg from '../assets/air-op.jpeg'

// Main images array (order must match projects 1,2,3,4)
const projectImages = [
  PortfolioImg,           // Project 1: Portfolio (now shows your photo)
  DashboardImg,           // Project 2: Dashboard
  GpsHardwareImg,         // Project 3: GPS
  AirQualityHardwareImg   // Project 4: Air Quality
]

// Output images for hardware projects
const projectOutputImages = {
  3: [GpsOutputImg],
  4: [AirQualityOutputImg]
}
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Projects I've built to practice and improve my development skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Main Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={projectImages[index]} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                    <FiGithub className="w-6 h-6" />
                  </a>
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                  )}
                  {project.type === 'hardware' && (
                    <div className="p-2 bg-white/20 rounded-full">
                      <FiCpu className="w-6 h-6 text-yellow-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Output Images (only for hardware projects) */}
              {project.type === 'hardware' && projectOutputImages[project.id] && (
                <div className="px-6 pt-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Output Result</p>
                  <div className="grid grid-cols-1 gap-2">
                    {projectOutputImages[project.id].map((img, i) => (
                      <img 
                        key={i}
                        src={img} 
                        alt={`${project.title} output ${i + 1}`}
                        className="w-full h-40 object-cover rounded-lg border border-gray-700"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.type === 'hardware' && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                      Hardware
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}