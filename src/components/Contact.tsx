import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github, Download, CheckCircle2, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const contactInfo = [
  { Icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India' },
  { Icon: Mail, label: 'Email', value: 'sawaserohan125@gmail.com', href: 'mailto:sawaserohan125@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '+91 9604878587', href: 'tel:+919604878587' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const field = (name: keyof typeof form, label: string, type = 'text') => (
    <div>
      <label className="block text-xs font-medium text-muted mb-1.5">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="w-full px-4 py-3 rounded-xl glass glass-hover text-sm outline-none focus:border-[#3B82F6] transition-colors"
        placeholder={label}
      />
      {errors[name] && <p className="text-xs text-red-400 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-pad relative">
      <div className="blob w-80 h-80 bottom-0 right-0" style={{ background: '#8B5CF6' }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHeading eyebrow="Let's connect" title={<>Get In <span className="gradient-text">Touch</span></>} subtitle="Have a project or opportunity? I'd love to hear from you." icon={<Mail size={15} />} />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info + quick actions */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href || '#'} className="flex items-center gap-3 group">
                    <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <c.Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{c.label}</p>
                      <p className="text-sm font-medium">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/919604878587" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl glass glass-hover text-sm font-medium">
                  <MessageCircle size={16} className="text-green-400" /> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/rohan-sawase" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl glass glass-hover text-sm font-medium">
                  <Linkedin size={16} className="text-blue-400" /> LinkedIn
                </a>
                <a href="https://github.com/rohansawase" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl glass glass-hover text-sm font-medium">
                  <Github size={16} /> GitHub
                </a>
                <a href="/resume.html" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl gradient-primary text-white text-sm font-medium glow">
                  <Download size={16} /> Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <form onSubmit={submit} className="glass rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {field('name', 'Your Name')}
                {field('email', 'Your Email', 'email')}
              </div>
              {field('subject', 'Subject')}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass glass-hover text-sm outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl gradient-primary text-white font-medium glow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === 'loading' && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                {status === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
                {status === 'error' && <>Try Again</>}
                {status === 'idle' && <><Send size={18} /> Send Message</>}
              </button>

              {status === 'success' && <p className="text-center text-sm text-green-400">Thank you! I'll get back to you soon.</p>}
              {status === 'error' && <p className="text-center text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
