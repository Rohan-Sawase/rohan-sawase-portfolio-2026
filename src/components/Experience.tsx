import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'CodSoft',
    duration: 'April 2024 – May 2024',
    responsibilities: [
      'Developed web development projects',
      'Worked on responsive UI design',
      'Improved frontend development skills',
      'Learned practical software development workflow',
      'Collaborated on project implementation',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'QSpiders',
    duration: 'June 2024 – August 2024',
    responsibilities: [
      'Built responsive React.js applications',
      'Implemented reusable UI components',
      'Integrated REST APIs into frontend applications',
      'Optimized website performance and loading speed',
      'Enhanced user experience with modern design principles',
    ],
  },
  {
  role: 'Android Application Developer',
  company: 'MountReach Solution PVT.LTD',
  duration: 'January 2025 – Present',
  responsibilities: [
    'Built Android applications using Java, XML, and Android SDK',
    'Developed secure login and registration systems with input validation',
    'Integrated APIs and local storage solutions for efficient data management',
    'Applied Material Design principles to create modern mobile user interfaces',
    'Performed testing, debugging, and performance optimization across multiple Android devices',
  ],
},
  {
    role: 'Software Developer Intern',
    company: 'Qs[iders',
    duration: 'December 2024 – Present',
    responsibilities: [
      'Developed full-stack applications using MERN stack',
      'Designed and managed MongoDB databases',
      'Implemented authentication and authorization features',
      'Created RESTful APIs with Node.js and Express.js',
      'Participated in project planning and testing',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Where I've worked"
          title={<>Experience</>}
          icon={<Briefcase size={15} />}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="relative glass rounded-3xl p-6 sm:p-10 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full gradient-primary opacity-20 blur-3xl" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                <div className="h-16 w-16 shrink-0 rounded-2xl gradient-primary flex items-center justify-center text-white glow">
                  <Briefcase size={28} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl">
                      {exp.role}
                    </h3>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full gradient-primary text-white">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-muted text-sm mt-1">
                    {exp.duration}
                  </p>
                </div>
              </div>

              <div className="relative grid sm:grid-cols-2 gap-3">
                {exp.responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.1,
                    }}
                    className="flex items-start gap-3 p-3 rounded-xl glass glass-hover"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#3B82F6] shrink-0 mt-0.5"
                    />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}