import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left side - Image placeholder */}
      {/* Left side - Your Photo */}
{/* Left side - Your Photo */}
{/* Left side - Your Photo */}
<div className="relative w-80 h-80 mx-auto">
  <img 
    src="/src/assets/PHOTO.jpg" 
    alt="My Photo" 
    className="w-full h-full object-cover object-top scale-90 rounded-2xl"
  />
  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
</div>

        {/* Right side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Hi! I'm a beginner developer passionate about learning web development. 
            I'm currently building projects with React, JavaScript, and modern CSS frameworks to improve my skills.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm eager to learn new technologies, work on real-world projects, and grow as a developer. 
            Every day is a new opportunity to code, learn, and get better!
          </p>
          
          <div className="flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary">Beginner</h3>
              <p className="text-gray-500">Learning Stage</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">5+</h3>
              <p className="text-gray-500">Projects Built</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">100%</h3>
              <p className="text-gray-500">Passion & Commitment</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}