import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 300, mass: 0.4 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 300, mass: 0.4 });
  const labelRef = useRef('');

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shouldEnable = isFine && !isReducedMotion;
    setEnabled(shouldEnable);
    if (!shouldEnable) return;

    function handleMove(e: MouseEvent) {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      if (target) {
        const next = target.getAttribute('data-cursor') || '';
        if (labelRef.current !== next) {
          labelRef.current = next;
          setLabel(next);
        }
        setActive(true);
      } else {
        if (labelRef.current !== '') {
          labelRef.current = '';
          setLabel('');
        }
        setActive(false);
      }
    }

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const size = active ? (label ? 76 : 44) : 8;

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          width: size,
          height: size,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        animate={{ opacity: 1 }}
      >
        {label && <span>{label}</span>}
      </motion.div>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, opacity: active ? 0 : 1 }}
      />
    </>
  );
}
