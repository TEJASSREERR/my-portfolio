import { motion } from 'framer-motion'
import { skills } from '../data/skills'

function SkillBar({ skill, index }) {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-primary">{skill.level}%</span>
      </div>
      <div className="w-full bg-card rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-primary h-3 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies I'm currently learning and improving every day.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="flex items-center gap-3 text-base font-semibold mb-4 text-primary">
              <span className="w-0.5 h-5 bg-primary rounded-sm inline-block" />
              Frontend
            </h3>
            {skills.frontend.map((s, i) => (
              <SkillBar skill={s} index={i} key={`fe-${s.name}`} />
            ))}

            <h3 className="flex items-center gap-3 text-base font-semibold mt-6 mb-4 text-primary">
              <span className="w-0.5 h-5 bg-primary rounded-sm inline-block" />
              Other / Tools
            </h3>
            {skills.other.map((s, i) => (
              <SkillBar skill={s} index={i} key={`ot-${s.name}`} />
            ))}
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-base font-semibold mb-4 text-primary">
              <span className="w-0.5 h-5 bg-primary rounded-sm inline-block" />
              Backend / Databases
            </h3>
            {skills.backend.map((s, i) => (
              <SkillBar skill={s} index={i} key={`be-${s.name}`} />
            ))}

            <h3 className="flex items-center gap-3 text-base font-semibold mt-6 mb-4 text-primary">
              <span className="w-0.5 h-5 bg-primary rounded-sm inline-block" />
              Hardware / IoT
            </h3>
            {skills.hardware.map((s, i) => (
              <SkillBar skill={s} index={i} key={`hw-${s.name}`} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}