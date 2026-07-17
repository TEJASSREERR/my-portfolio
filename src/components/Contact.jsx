import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    
    // For now, just show a success message
    setTimeout(() => {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <div className="section-kicker mx-auto">Let&apos;s connect</div>
          <h2 className="section-heading mt-6">
            Get In <span className="accent">Touch</span>
          </h2>
          <p className="section-subheading">
            I’m open to collaborations, freelance work, internships, and full-stack opportunities.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="section-card space-y-6 p-6 md:p-8">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <h3 className="mb-3 font-semibold text-white">Let&apos;s talk</h3>
              <p className="text-sm leading-7 text-gray-400">
                I enjoy building practical solutions, learning new technologies, and contributing to meaningful projects.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <FiMail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Email</h3>
                <a href="mailto:tejassreerr@gmail.com" className="text-gray-400 transition-colors hover:text-primary">tejassreerr@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <FiPhone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Phone</h3>
                <a href="tel:+916383477825" className="text-gray-400 transition-colors hover:text-primary">+91 6383477825</a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <FiMapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Location</h3>
                <p className="text-gray-400">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/TEJASSREERR" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-primary hover:text-primary">
                <FiGithub className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/tejassree-r-r-37a78b2a0/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-primary hover:text-primary">
                <FiLinkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="section-card space-y-6 p-6 md:p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-700 bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-700 bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-gray-700 bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-medium text-white transition-colors hover:bg-primary/80 disabled:opacity-50"
            >
              <FiSend className="w-5 h-5" />
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>

            {status && status !== 'Sending...' && (
              <p className="text-center text-green-400">{status}</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}