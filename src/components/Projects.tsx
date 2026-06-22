import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Job Portal Web Application',
    image: '/images/project-jobportal.jpg',
    desc: 'A full-featured job portal connecting recruiters and job seekers with secure authentication and role-based dashboards.',
    tech: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'MongoDB'],
    features: ['Job Search', 'Recruiter Dashboard', 'User Authentication', 'Role-Based Access', 'Responsive Design'],
    github: 'https://github.com/rohansawase',
    live: '#',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Gym Management System',
    image: '/images/project-gym.jpg',
    desc: 'A complete gym management solution handling members, attendance, payments, and class scheduling with an admin dashboard.',
    tech: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Member Management', 'Attendance Tracking', 'Payment Management', 'Class Scheduling', 'Admin Dashboard'],
    github: 'https://github.com/rohansawase',
    live: '#',
    accent: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Personal Assistant Web Application',
    image: '/images/project-assistant.jpg',
    desc: 'A productivity-focused personal assistant that manages tasks, reminders, and daily planning in one clean interface.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    features: ['Task Management', 'Reminder System', 'Daily Planner', 'Productivity Tools'],
    github: 'https://github.com/rohansawase',
    live: '#',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Technical Support & Network Troubleshooting Lab',
    image: '/images/project-techsupport.jpg',
    desc: 'A hands-on IT support lab covering Windows installation, driver setup, and network troubleshooting with help desk simulation.',
    tech: ['Windows OS', 'DNS', 'DHCP', 'TCP/IP'],
    features: ['Windows Installation', 'Driver Installation', 'Network Troubleshooting', 'Help Desk Ticket Simulation', 'System Configuration'],
    github: 'https://github.com/rohansawase',
    live: '#',
    accent: 'from-amber-500 to-orange-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="blob w-80 h-80 top-40 -left-20" style={{ background: '#3B82F6' }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHeading eyebrow="Things I've built" title={<>Featured <span className="gradient-text">Projects</span></>} subtitle="Real-world applications showcasing my development and problem-solving skills." icon={<FolderGit2 size={15} />} />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group glass glass-hover rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-30 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-semibold">
                  Project {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg glass border border-white/10 text-muted">{t}</span>
                  ))}
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Key Features</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs">
                        <CheckCircle2 size={13} className="text-[#3B82F6] shrink-0" />
                        <span className="text-muted">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl glass glass-hover text-sm font-medium flex-1 justify-center">
                    <Github size={16} /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white text-sm font-medium flex-1 justify-center glow">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
