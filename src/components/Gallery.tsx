import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import SectionHeading from './SectionHeading';

const photos = [
  { src: '/images/gallery-1.jpg', title: 'Code in Motion', span: 'row-span-2' },
  { src: '/images/gallery-2.jpg', title: 'Workspace Setup', span: '' },
  { src: '/images/gallery-3.jpg', title: 'Deep Focus', span: 'row-span-2' },
  { src: '/images/gallery-4.jpg', title: 'Team Collaboration', span: '' },
  { src: '/images/gallery-5.jpg', title: 'Data Center', span: 'row-span-2' },
  { src: '/images/gallery-6.jpg', title: 'Circuitry', span: '' },
  { src: '/images/hero-portrait.jpg', title: 'Developer Portrait', span: '' },
  { src: '/images/about-portrait.jpg', title: 'At Work', span: 'row-span-2' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((a) => (a === null ? a : (a + 1) % photos.length));
  const prev = () => setActive((a) => (a === null ? a : (a - 1 + photos.length) % photos.length));

  return (
    <section id="gallery" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="A visual journey" title={<>Photo <span className="gradient-text">Gallery</span></>} subtitle="Moments from my developer journey and tech workspace." icon={<Images size={15} />} />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(i)}
              className={`group relative rounded-2xl overflow-hidden glass ${p.span}`}
            >
              <img src={p.src} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-white font-semibold text-sm">{p.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[95] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button onClick={close} className="absolute top-5 right-5 h-11 w-11 rounded-full glass flex items-center justify-center text-white hover:scale-110 transition-transform">
              <X size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 sm:left-8 h-12 w-12 rounded-full glass flex items-center justify-center text-white hover:scale-110 transition-transform">
              <ChevronLeft size={22} />
            </button>
            <motion.img
              key={active}
              src={photos[active].src}
              alt={photos[active].title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[88vw] max-h-[82vh] rounded-2xl object-contain glow-purple"
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 sm:right-8 h-12 w-12 rounded-full glass flex items-center justify-center text-white hover:scale-110 transition-transform">
              <ChevronRight size={22} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium glass px-4 py-2 rounded-full">
              {photos[active].title} — {active + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
