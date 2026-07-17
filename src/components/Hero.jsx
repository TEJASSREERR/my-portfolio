import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="text-center z-10 px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-lg mb-4"
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          TEJASSREE R R
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto"
        >
          I build scalable web applications with React, modern JavaScript, and thoughtful user experiences.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Open to frontend, full-stack, and internship opportunities with a focus on quality, delivery, and clean code.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/80 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors">
            Contact Me
          </a>
          <a href="mailto:tejassreerr@gmail.com" className="bg-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}