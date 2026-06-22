import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Linkedin, Github, Phone, ArrowDown, Sparkles } from 'lucide-react';
import { useTyping } from '../hooks/useTyping';

const roles = ['Software Developer', 'Frontend Developer', 'Java Developer', 'IT Support Engineer','Full Stack Developer'];

export default function Hero() {
  const typed = useTyping(roles);
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="blob w-[500px] h-[500px] -top-32 -left-20" style={{ background: '#3B82F6' }} />
      <div className="blob w-[460px] h-[460px] top-40 -right-24" style={{ background: '#8B5CF6' }} />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="font-display font-extrabold tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
              <span className="block">ROHAN</span>
              <span className="block gradient-text">SAWASE</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-5 h-9 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-semibold font-display">
                {typed}<span className="type-caret h-6 sm:h-7 align-middle" />
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }} className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted leading-relaxed">
              Building modern web applications and solving real-world technical problems through clean code, creativity, and continuous learning.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="/resume.html" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-white font-medium glow hover:scale-105 transition-transform">
                <Download size={18} /> Download Resume
              </a>
              <button onClick={() => scrollTo('#projects')} className="flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-medium">
                <FolderGit2 size={18} /> View Projects
              </button>
              <button onClick={() => scrollTo('#contact')} className="flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-medium">
                <Mail size={18} /> Contact Me
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }} className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-sawase', label: 'LinkedIn' },
                { Icon: Github, href: 'https://github.com/rohansawase', label: 'GitHub' },
                { Icon: Mail, href: 'mailto:sawaserohan125@gmail.com', label: 'Gmail' },
                { Icon: Phone, href: 'tel:+919604878587', label: 'Phone' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="h-11 w-11 rounded-xl glass glass-hover flex items-center justify-center text-muted hover:text-[var(--text)] hover:-translate-y-1 transition-all">
                  <Icon size={19} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] gradient-primary opacity-30 blur-2xl animate-float" />
              <div className="relative w-64 sm:w-80 lg:w-[22rem] aspect-[3/4] rounded-[2rem] overflow-hidden gradient-border glow-purple">
                <img src="/images/new1.jpeg" alt="Rohan Sawase - Software Developer" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-6 top-12 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl">
                <Sparkles size={18} className="text-amber-400" />
                <div><p className="text-xs text-muted">B.Tech</p><p className="text-sm font-semibold">E&TC Engg</p></div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl">
                <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center text-white text-xs font-bold">JS</div>
                <div><p className="text-xs text-muted">Developer</p><p className="text-sm font-semibold">React + Java</p></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
