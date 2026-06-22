import { motion } from 'framer-motion';
import { GraduationCap, Code2, Wrench, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';

const highlights = [
  { Icon: GraduationCap, title: 'B.Tech Graduate', desc: 'Electronics & Telecommunication Engineering' },
  { Icon: Code2, title: 'Full-Stack Skills', desc: 'Java, JavaScript, ReactJS, SQL, MongoDB' },
  { Icon: Wrench, title: 'Technical Support', desc: 'Networking, Windows Admin, Troubleshooting' },
  { Icon: Heart, title: 'Continuous Learner', desc: 'Always exploring new technologies' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get to know me" title={<>About <span className="gradient-text">Me</span></>} icon={<Code2 size={15} />} />

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl gradient-primary opacity-25 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden gradient-border">
                <img src="/images/new2.jpeg" alt="Rohan Sawase working" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                  <p className="font-display font-semibold">Rohan Sawase</p>
                  <p className="text-sm text-muted">Software & Frontend Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 text-muted leading-relaxed text-base sm:text-lg">
              <p>
                I am a <span className="text-[var(--text)] font-semibold">B.Tech graduate in Electronics and Telecommunication Engineering</span> with a strong passion for Software Development, Frontend Development, Java Programming, and Technical Support.
              </p>
              <p>
                I have practical experience in <span className="text-[var(--text)] font-semibold">Java, JavaScript, ReactJS, HTML5, CSS3, SQL, MongoDB</span>, Networking Fundamentals, Windows Administration, Troubleshooting, and Customer Support.
              </p>
              <p>
                I enjoy building real-world applications, solving technical challenges, and continuously learning new technologies.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass glass-hover rounded-2xl p-4 flex items-start gap-3"
                >
                  <div className="h-10 w-10 shrink-0 rounded-xl gradient-primary flex items-center justify-center text-white">
                    <h.Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{h.title}</p>
                    <p className="text-xs text-muted mt-0.5">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
