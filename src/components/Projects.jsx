import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink, FiCpu } from 'react-icons/fi'

// Import all images
import PortfolioImg from '../assets/portfolio.png'
import SaasAdminImg from '../assets/SaasAdmin.png'
import TaskManagerImg from '../assets/TaskManager.png'
import TravellerexplorerImg from '../assets/TRAVELLEREXPLORER.png'
import UserproductorderImg from '../assets/USERPRODUCTORDER.png'
import DashboardImg from '../assets/DASHBOARD.png'
import GpsHardwareImg from '../assets/livegps.png'
import GpsOutputImg from '../assets/gps-op.jpg'
import LiveGpsOutputImg from '../assets/live-gps.jpg'
import AirQualityHardwareImg from '../assets/airquality.png'
import AirQualityOutputImg from '../assets/air-op.jpeg'
import AirQualityOutputPng from '../assets/airquality-output.png'

// Main images array (order must match projects 1,2,3,4)
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

// Output images for hardware projects
const projectOutputImages = {
  7: [GpsOutputImg, LiveGpsOutputImg],
  8: [AirQualityOutputImg, AirQualityOutputPng]
}

export default function Projects() {
  const openOutputPreview = (projectId) => {
    const outputImages = projectOutputImages[projectId]
    if (!outputImages || outputImages.length === 0) return

    const previewWindow = window.open('', '_blank', 'width=1000,height=800')
    if (!previewWindow) return

    const imageMarkup = outputImages
      .map(
        (img) => `
          <div style="margin-bottom: 16px; border-radius: 16px; overflow: hidden; border: 1px solid #2b2f47; background: #0f172a;">
            <img src="${img}" alt="Project output" style="display: block; width: 100%; height: auto; max-height: 420px; object-fit: contain;" />
          </div>
        `
      )
      .join('')

    previewWindow.document.write(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Project Output Preview</title>
          <style>
            body { margin: 0; font-family: Arial, sans-serif; background: #020617; color: #f8fafc; padding: 24px; }
            h1 { font-size: 24px; margin-bottom: 12px; }
            p { color: #cbd5e1; margin-bottom: 20px; }
            .container { max-width: 900px; margin: 0 auto; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hardware Output Preview</h1>
            <p>These images show the live output from the selected hardware project.</p>
            ${imageMarkup}
          </div>
        </body>
      </html>`)

    previewWindow.document.close()
  }

  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
            <div className="section-kicker mx-auto">Featured Work</div>
            <h2 className="section-heading mt-6">
              My <span className="accent">Projects</span>
            </h2>
            <p className="section-subheading">
              Selected projects demonstrating frontend, backend, and IoT solutions delivered with care.
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/20 p-2.5 transition-colors hover:bg-white/40">
                      <FiGithub className="h-6 w-6" />
                    </a>
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/20 p-2.5 transition-colors hover:bg-white/40">
                        <FiExternalLink className="h-6 w-6" />
                      </a>
                    )}
                    {project.type === 'hardware' && (
                      <button
                        type="button"
                        onClick={() => openOutputPreview(project.id)}
                        className="rounded-full bg-white/20 p-2.5 text-yellow-400 transition-colors hover:bg-white/40"
                        aria-label={`Show output preview for ${project.title}`}
                      >
                        <FiCpu className="h-6 w-6" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {project.type === 'hardware' && (
                      <span className="rounded-full bg-yellow-500/20 px-2.5 py-1 text-xs font-medium text-yellow-400">
                        Hardware
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-sm leading-7 text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
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
    </section>
  )
}