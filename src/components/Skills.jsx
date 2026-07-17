import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const skillGroups = [
  {
    key: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Crafting responsive, accessible, and modern user interfaces.',
    accent: 'from-cyan-400/15 to-primary/15',
    dot: 'bg-cyan-400'
  },
  {
    key: 'backend',
    title: 'Backend & Data',
    subtitle: 'Building reliable APIs, databases, and service-driven applications.',
    accent: 'from-emerald-400/15 to-cyan-400/15',
    dot: 'bg-emerald-400'
  },
  {
    key: 'hardware',
    title: 'Embedded & IoT',
    subtitle: 'Designing practical hardware solutions with sensors and real-time feedback.',
    accent: 'from-amber-400/15 to-orange-400/15',
    dot: 'bg-amber-400'
  },
  {
    key: 'other',
    title: 'Tools & Delivery',
    subtitle: 'Supporting projects with version control, deployment, and collaboration.',
    accent: 'from-violet-400/15 to-fuchsia-400/15',
    dot: 'bg-violet-400'
  }
]

function SkillItem({ skill, index, accentClass }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
    >
      <div>
        <h4 className="text-base font-semibold text-white">{skill.name}</h4>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Applied in projects with a strong focus on practical implementation and clean results.
        </p>
      </div>
    </motion.li>
  )
}

function SkillGroup({ group, skillsList, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${group.accent} p-6 md:p-8`}
    >
      <div className="mb-6 flex items-start gap-3">
        <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${group.dot}`} />
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
            {group.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{group.subtitle}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {skillsList.map((skill, skillIndex) => (
          <SkillItem
            key={`${group.key}-${skill.name}`}
            skill={skill}
            index={skillIndex}
            accentClass={group.accent}
          />
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <div className="section-kicker mx-auto">Core Strengths</div>
          <h2 className="section-heading mt-6">
            My <span className="accent">Skills</span>
          </h2>
          <p className="section-subheading">
            A focused mix of modern development, backend systems, and practical hardware experience.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.key}
              group={group}
              skillsList={skills[group.key]}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}