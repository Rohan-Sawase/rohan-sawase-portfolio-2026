import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow, title, subtitle, icon,
}: { eyebrow: string; title: ReactNode; subtitle?: string; icon?: ReactNode; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted mb-4">
        {icon}{eyebrow}
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted text-base sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
