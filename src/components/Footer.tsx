import { Linkedin, Github, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white font-bold font-display">RS</span>
              <span className="font-display font-semibold">Rohan Sawase</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Software Developer & Frontend Engineer building modern web applications and solving real-world technical problems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <button key={l.href} onClick={() => go(l.href)} className="text-sm text-muted hover:text-[var(--text)] transition-colors text-left w-fit">{l.label}</button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-sawase' },
                { Icon: Github, href: 'https://github.com/rohansawase' },
                { Icon: Mail, href: 'mailto:sawaserohan125@gmail.com' },
                { Icon: Phone, href: 'tel:+919604878587' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl glass glass-hover flex items-center justify-center text-muted hover:text-[var(--text)] transition-colors">
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted">Pune, Maharashtra, India</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs text-muted flex items-center gap-1.5">
            © {new Date().getFullYear()} Rohan Sawase. Made with <Heart size={12} className="text-red-400 fill-red-400" /> and React.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1.5 text-xs text-muted hover:text-[var(--text)] transition-colors">
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
