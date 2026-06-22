import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  {
    Icon: GraduationCap,
    title: 'B.Tech in Electronics and Telecommunication Engineering',
    place: 'Sanjay Bhokare Group of Institutes, Miraj',
    score: 'CGPA: 6.26',
    period: '2022 – 2025',
  },
  {
    Icon: School,
    title: 'Diploma in Computer Engineering',
    place: 'Government Polytechnic, Jalna',
    score: '76.06%',
    period: '2019 – 2022',
  },
  {
    Icon: BookOpen,
    title: 'SSC (Secondary School Certificate)',
    place: 'Maharashtra State Board',
    score: '81.20%',
    period: '2019',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="My academic journey" title={<>Education</>} icon={<GraduationCap size={15} />} />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* node */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white glow ring-4 ring-[var(--bg)]">
                    <item.Icon size={18} />
                  </div>
                </div>

                {/* card */}
                <div className={`ml-16 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
                  <div className="glass glass-hover rounded-2xl p-5">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full gradient-primary text-white mb-2">{item.period}</span>
                    <h3 className="font-display font-semibold text-base sm:text-lg leading-snug">{item.title}</h3>
                    <p className="text-sm text-muted mt-1">{item.place}</p>
                    <p className="text-sm font-semibold gradient-text mt-2">{item.score}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
