import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let mx = rx, my = ry;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role=button], input, textarea, .cursor-grow')) {
        ringRef.current?.style.setProperty('width', '56px');
        ringRef.current?.style.setProperty('height', '56px');
        ringRef.current?.style.setProperty('border-color', 'rgba(59,130,246,0.9)');
      }
    };
    const out = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role=button], input, textarea, .cursor-grow')) {
        ringRef.current?.style.setProperty('width', '38px');
        ringRef.current?.style.setProperty('height', '38px');
        ringRef.current?.style.setProperty('border-color', 'rgba(139,92,246,0.8)');
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;
  return (<><div ref={dotRef} className="cursor-dot" /><div ref={ringRef} className="cursor-ring" /></>);
}
