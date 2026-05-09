import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

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
    // Later you can connect EmailJS for real email sending
    setTimeout(() => {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FiMail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-400">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FiPhone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FiMapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-400">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
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