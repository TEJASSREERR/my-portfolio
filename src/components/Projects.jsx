import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink, FiCpu, FiX } from 'react-icons/fi'

import PortfolioImg from '../assets/portfolio.png'
import SaasAdminImg from '../assets/SaasAdmin.png'
import TaskManagerImg from '../assets/TaskManager.png'
import TravellerexplorerImg from '../assets/TRAVELLEREXPLORER.png'
import UserproductorderImg from '../assets/USERPRODUCTORDER.png'
import DashboardImg from '../assets/DASHBOARD.png'
import GpsHardwareImg from '../assets/livegps.png'
import LiveGpsJpg from '../assets/live-gps.jpg'
import GpsOutputImg from '../assets/gps-op.jpg'
import AirQualityHardwareImg from '../assets/airquality.png'
import AirQualityHardwarePng from '../assets/airquality-output.png'
import AirQualityOutputImg from '../assets/air-op.jpeg'

const projectImages = [
  PortfolioImg,
  SaasAdminImg,
  TaskManagerImg,
  TravellerexplorerImg,
  UserproductorderImg,
  DashboardImg,
  GpsHardwareImg,
  AirQualityHardwareImg
]

const projectImageMap = {
  1: PortfolioImg,
  2: SaasAdminImg,
  3: TaskManagerImg,
  4: TravellerexplorerImg,
  5: UserproductorderImg,
  6: DashboardImg,
  7: GpsHardwareImg,
  8: AirQualityHardwareImg
}

const projectOutputImages = {
  7: GpsOutputImg,
  8: AirQualityOutputImg
}

const projectHardwareImages = {
  7: LiveGpsJpg,
  8: AirQualityHardwarePng
}

export default function Projects() {
  const [activeOutput, setActiveOutput] = useState(null)

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
          {projects.map((project, index) => {
            const hasOutput = project.type === 'hardware' && projectOutputImages[project.id]

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                  <div
                  className={`relative overflow-hidden h-56 ${hasOutput ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    console.log('card click', project.id, projectOutputImages[project.id])
                    hasOutput && setActiveOutput(projectOutputImages[project.id])
                  }}
                >
                  <img
                    src={projectImageMap[project.id] || projectImages[index]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>

                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </a>
                    )}

                    {projectHardwareImages[project.id] && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          console.log('overlay CPU click', project.id, projectHardwareImages[project.id])
                          setActiveOutput(projectHardwareImages[project.id])
                        }}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <FiCpu className="w-6 h-6 text-yellow-400" />
                      </button>
                    )}
                  </div>

                  {hasOutput && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Tap to view output
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.type === 'hardware' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          console.log('badge click', project.id, projectOutputImages[project.id])
                          setActiveOutput(projectOutputImages[project.id])
                        }}
                        className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full cursor-pointer hover:bg-yellow-500/30 transition-colors"
                        aria-label={`View ${project.title} output`}
                      >
                        Hardware
                      </button>
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
            )
          })}
        </div>
      </motion.div>

      {activeOutput && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveOutput(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setActiveOutput(null)}
          >
            <FiX />
          </button>
          <img
            src={activeOutput}
            alt="Project output"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Debug: show activeOutput value when present (remove when fixed) */}
      {activeOutput && (
        <div className="fixed bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-2 rounded-md z-60">
          Debug activeOutput: {String(activeOutput)}
        </div>
      )}
    </section>
  )
}