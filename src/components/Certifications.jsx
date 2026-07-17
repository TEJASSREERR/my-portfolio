import { motion } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'

const certifications = [
  'Master AI With Web Development — Simplilearn SkillUp (2026)',
  'Full Stack Development — NoviTech (2026)',
  'Advanced Python — Simplilearn SkillUp (2026)',
  'Full Stack Development — Wipro TalentNext (2025)',
  'Web Development — CodeTech IT Solutions (2025)',
  'IBM SkillsBuild AI Fundamentals (2025)',
  'Artificial Intelligence & Data Analytics — NoviTech (2024)',
  'Networking Basics — Cisco Networking Academy (Jul 2024)',
  'The Open University — Information Security (2024)',
  'C Programming — Pentasoftware (2023)',
  'JavaScript — Mindluster (2023)',
  'Employability Skill Training Program — Mahindra Pride Classroom & Naandi Foundation (2024–2025)'
]

const participation = [
  {
    title: 'Paper Presentation',
    subtitle: 'Future AI Developments',
    institution: 'Sri Shanmugha College of Engineering',
    detail: 'Explored generative AI, LLMs, and applied AI systems with a focus on emerging intelligent technologies.'
  },
  {
    title: 'Technical Paper',
    subtitle: 'Fingerprint Sensor Technology',
    institution: 'Karpagam College of Engineering',
    detail: 'Presented research on biometric authentication, fingerprint sensing, and secure identification systems.'
  },
  {
    title: 'Workshop',
    subtitle: 'Web Development',
    institution: 'Karpagam College of Engineering',
    detail: 'Built practical knowledge in frontend and backend development through hands-on technical sessions.'
  },
  {
    title: 'Workshop',
    subtitle: 'IoT, Network Essentials & Cybersecurity',
    institution: 'Adhiyamaan College of Engineering',
    detail: 'Participated in a multi-track workshop (Apr & Oct 2024) covering IoT applications, network essentials, and cybersecurity practices.'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <div className="section-kicker mx-auto">Learning & Achievements</div>
          <h2 className="section-heading mt-6">
            Certifications <span className="accent">& Participation</span>
          </h2>
          <p className="section-subheading">
            Verified professional certifications and technical workshops that strengthen my development skills.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <FiAward className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
                <p className="text-sm text-slate-400">Professional and technical credentials earned.</p>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <FiBookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Participation</h3>
                <p className="text-sm text-slate-400">Paper presentations and workshops completed.</p>
              </div>
            </div>

            <div className="space-y-4">
              {participation.map((item) => (
                <div key={item.subtitle} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{item.title}</p>
                  <p className="mt-1 text-base font-medium text-white">{item.subtitle}</p>
                  <p className="mt-2 text-sm font-medium text-slate-200">{item.institution}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
