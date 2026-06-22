import { motion } from 'framer-motion';
import { Award, Smartphone, Brain, Database, Code } from 'lucide-react';
import SectionHeading from './SectionHeading';

const certs = [
  { Icon: Smartphone, title: 'Android Application Development', org: 'Certification Program', color: 'from-green-500 to-emerald-400' },
  { Icon: Brain, title: 'Generative AI Productivity Skills', org: 'AI Certification', color: 'from-purple-500 to-fuchsia-400' },
  { Icon: Database, title: 'SQL for Beginners', org: 'Database Certification', color: 'from-blue-500 to-cyan-400' },
  { Icon: Code, title: 'Python Programming', org: 'Programming Certification', color: 'from-amber-500 to-orange-400' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Continuous learning" title={<>Certifications & <span className="gradient-text">Achievements</span></>} icon={<Award size={15} />} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass glass-hover rounded-2xl p-6 text-center relative overflow-hidden group"
            >
              <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className={`h-14 w-14 mx-auto rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                <c.Icon size={26} />
              </div>
              <h3 className="font-display font-semibold text-sm leading-snug mb-1">{c.title}</h3>
              <p className="text-xs text-muted">{c.org}</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-xs text-amber-400">
                <Award size={12} /> Verified
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-display font-bold text-xl mb-5 text-center">Key Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'B.Tech Graduate',
              'Diploma with 76.06%',
              'CodSoft Internship',
              'Multiple Real-World Projects Completed',
              'Strong Foundation in Software Development',
              'Strong Foundation in Technical Support',
            ].map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 p-3 rounded-xl glass glass-hover"
              >
                <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                  <Award size={15} />
                </div>
                <span className="text-sm font-medium">{a}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
