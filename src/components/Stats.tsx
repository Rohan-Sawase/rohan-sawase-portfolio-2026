import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, FolderGit2, Award, GraduationCap } from 'lucide-react';
import { useCountUp } from '../hooks/useTyping';

function Stat({ Icon, value, suffix, label, delay }: { Icon: any; value: number; suffix?: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(value, 1800, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass glass-hover rounded-2xl p-6 text-center"
    >
      <div className="h-12 w-12 mx-auto rounded-xl gradient-primary flex items-center justify-center text-white mb-3">
        <Icon size={22} />
      </div>
      <p className="font-display font-bold text-3xl sm:text-4xl gradient-text">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted mt-1">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat Icon={GraduationCap} value={2025} label="B.Tech Graduate" delay={0} />
          <Stat Icon={Briefcase} value={1} suffix="+" label="Internship" delay={0.1} />
          <Stat Icon={FolderGit2} value={4} suffix="+" label="Projects Built" delay={0.2} />
          <Stat Icon={Award} value={4} suffix="+" label="Certifications" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
