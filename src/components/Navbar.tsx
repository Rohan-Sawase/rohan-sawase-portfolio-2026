import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : ''}`}>
          <button onClick={() => go('#home')} className="flex items-center gap-2 group">
            <span className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white font-bold font-display glow group-hover:scale-110 transition-transform">RS</span>
            <span className="font-display font-semibold tracking-tight hidden sm:block">Rohan<span className="gradient-text">.dev</span></span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="px-3 py-2 text-sm text-muted hover:text-[var(--text)] transition-colors rounded-lg hover:bg-white/5">{l.label}</button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggle} className="h-9 w-9 rounded-xl glass glass-hover flex items-center justify-center" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a href="/resume.html" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white text-sm font-medium glow hover:scale-105 transition-transform">
              <Download size={15} /> Resume
            </a>
            <button onClick={() => setOpen((o) => !o)} className="lg:hidden h-9 w-9 rounded-xl glass flex items-center justify-center" aria-label="Menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-2">
                {links.map((l) => (
                  <button key={l.href} onClick={() => go(l.href)} className="text-left px-4 py-3 rounded-xl text-muted hover:text-[var(--text)] hover:bg-white/5 transition-colors">{l.label}</button>
                ))}
                <a href="/resume.html" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl gradient-primary text-white font-medium mt-1">
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
