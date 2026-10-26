import { useEffect, type MutableRefObject } from 'react';

const smooth = (x: number) => x * x * (3 - 2 * x);
const clamp = (x: number) => Math.min(1, Math.max(0, x));

/**
 * Menghitung posisi kamera "kontinu" (0..n-1) dari scroll.
 * Hasilnya ditulis ke ref supaya useFrame bisa membacanya tanpa re-render React.
 * Hanya index section aktif (dibulatkan) yang dikirim ke state, itu pun saat berubah.
 */
export function useSectionProgress(
  ids: string[],
  progress: MutableRefObject<number>,
  onActive: (index: number) => void,
) {
  useEffect(() => {
    let raf = 0;
    let last = -1;
    const els = ids.map((id) => document.getElementById(id));

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const mobile = window.innerWidth < 768;
      // Di mobile kanvas menempel di atas (42svh); anchor diletakkan tepat di bawahnya.
      const anchor = mobile ? vh * 0.42 + 48 : vh * 0.5;
      const rects = els.map((el) => el?.getBoundingClientRect());
      let i = 0;
      rects.forEach((r, k) => {
        if (r && r.top <= anchor) i = k;
      });
      const r = rects[i];
      let idx = i;
      if (r && i < ids.length - 1) {
        const win = Math.min(r.height * 0.5, vh * 0.6);
        idx = i + smooth(clamp((anchor - (r.bottom - win)) / win));
      }
      progress.current = idx;
      const rounded = Math.round(idx);
      if (rounded !== last) {
        last = rounded;
        onActive(rounded);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // tinggi section berubah saat gambar/font dimuat
    const ro = new ResizeObserver(schedule);
    els.forEach((el) => el && ro.observe(el));
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
