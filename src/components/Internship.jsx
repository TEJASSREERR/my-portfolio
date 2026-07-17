import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { internships } from '../data/internships';

const Internship = () => {
  return (
    <section id="internship" className="section-shell px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <div className="section-kicker mx-auto border-[#6C63FF]/20 bg-[#6C63FF]/10 text-[#6C63FF]">Professional Journey</div>
          <h2 className="section-heading mt-6 text-white">
            Internship <span className="accent text-[#6C63FF]">Experience</span>
          </h2>
          <p className="section-subheading">
            A concise view of internships and practical engineering experience that shaped my skillset.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 space-y-8">
        {internships.map((intern, index) => (
          <motion.div
            key={intern.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="rounded-3xl border border-white/10 bg-[#1a1a2e] p-6 md:p-8 transition-all duration-300 hover:border-[#6C63FF]/40"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#6C63FF]/20 flex items-center justify-center">
                    <FaBriefcase className="text-[#6C63FF] text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {intern.role}
                    </h3>
                    <p className="text-[#6C63FF] font-medium">{intern.company}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-[#6C63FF]" />
                  {intern.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[#6C63FF]" />
                  {intern.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] text-xs font-medium border border-[#6C63FF]/20">
                  {intern.type}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {intern.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6C63FF] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {intern.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-white/5 text-gray-300 text-xs font-medium border border-white/10 hover:border-[#6C63FF]/30 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {intern.certificates && intern.certificates.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#6C63FF]/20 bg-[#6C63FF]/10 p-4">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8b85ff]">
                  Certificates
                </p>
                <div className="flex flex-wrap gap-2">
                  {intern.certificates.map((certificate) => (
                    <span key={certificate} className="rounded-full border border-[#6C63FF]/30 bg-slate-950/60 px-3 py-1.5 text-sm text-slate-200">
                      {certificate}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;