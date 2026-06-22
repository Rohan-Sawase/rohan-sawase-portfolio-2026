import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layout, Database, Wrench, Coffee, Network, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface SkillGroup {
  Icon: any;
  title: string;
  skills: { name: string; level: number }[];
}

const groups: SkillGroup[] = [
  {
    Icon: Code2, title: 'Programming Languages',
    skills: [{ name: 'Java', level: 85 }, { name: 'JavaScript', level: 82 }, { name: 'HTML5', level: 90 }, { name: 'CSS3', level: 88 }],
  },
  {
    Icon: Layout, title: 'Frontend',
    skills: [{ name: 'ReactJS', level: 84 }, { name: 'Bootstrap', level: 80 }, { name: 'Tailwind CSS', level: 78 }],
  },
  {
    Icon: Database, title: 'Database',
    skills: [{ name: 'SQL', level: 80 }, { name: 'MongoDB', level: 76 }],
  },
  {
    Icon: Wrench, title: 'Developer Tools',
    skills: [{ name: 'Git', level: 82 }, { name: 'GitHub', level: 84 }, { name: 'VS Code', level: 90 }, { name: 'Android Studio', level: 72 }, { name: 'PyCharm', level: 70 }],
  },
  {
    Icon: Coffee, title: 'Core Java',
    skills: [{ name: 'OOP', level: 86 }, { name: 'Inheritance', level: 84 }, { name: 'Polymorphism', level: 82 }, { name: 'Abstraction', level: 80 }, { name: 'Encapsulation', level: 84 }, { name: 'Exception Handling', level: 78 }, { name: 'Collections Framework', level: 80 }, { name: 'Multithreading', level: 72 }],
  },
  {
    Icon: Network, title: 'Networking',
    skills: [{ name: 'TCP/IP', level: 82 }, { name: 'DNS', level: 80 }, { name: 'DHCP', level: 78 }, { name: 'OSI Model', level: 84 }, { name: 'LAN/WAN', level: 80 }, { name: 'Traceroute', level: 76 }, { name: 'Ping', level: 88 }, { name: 'NSLookup', level: 74 }],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium">{name}</span>
        <span className="text-muted text-xs">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full skill-fill rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="blob w-72 h-72 top-20 right-0" style={{ background: '#8B5CF6' }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHeading eyebrow="What I work with" title={<>My <span className="gradient-text">Skills</span></>} subtitle="A blend of software development, frontend engineering, and IT support expertise." icon={<Cpu size={15} />} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-white">
                  <g.Icon size={18} />
                </div>
                <h3 className="font-display font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-3.5">
                {g.skills.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
