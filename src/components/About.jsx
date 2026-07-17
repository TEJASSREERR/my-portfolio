import { motion } from 'framer-motion'
import PHOTO from '../assets/PHOTO.jpg'

export default function About() {
  return (
    <section id="about" className="section-shell">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center"
      >
        <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80">
          <img 
            src={PHOTO}
            alt="My Photo" 
            className="w-full h-full object-cover object-top scale-90 rounded-3xl border border-white/10"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
        </div>

        <div className="max-w-xl">
          <div className="section-kicker mb-6">About Me</div>
          <h2 className="section-heading">
            I build <span className="accent">clean, responsive web applications</span> that solve real problems.
          </h2>
          <p className="mt-6 text-gray-400 leading-8">
            I am a software developer specializing in frontend experience and backend APIs. I build maintainable interfaces with React and robust services with Django REST Framework and FastAPI.
          </p>
          <p className="mt-5 text-gray-400 leading-8">
            I deliver readable code, consistent design, and dependable deployments. My work is focused on turning ideas into reliable digital products that users can trust.
          </p>
          
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-xl font-semibold text-primary">Product Focused</h3>
              <p className="mt-1 text-sm text-gray-500">User-centered solutions</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-xl font-semibold text-primary">Modern Stack</h3>
              <p className="mt-1 text-sm text-gray-500">React, Django, FastAPI</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-xl font-semibold text-primary">Deploy Ready</h3>
              <p className="mt-1 text-sm text-gray-500">Production-ready apps</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Recent achievements</p>
            <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-7">
              <li>Delivered multiple responsive applications with secure authentication and backend APIs.</li>
              <li>Built data-driven dashboards and IoT prototypes with real-time monitoring features.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}