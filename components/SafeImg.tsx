import { useEffect, useRef, useState } from 'react';

export default function SafeImg({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(!src);
  const [imgSrc, setImgSrc] = useState(src);
  const [attemptAlt, setAttemptAlt] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!src || src.trim() === '') {
      setFailed(true);
      setImgSrc('');
    } else {
      setFailed(false);
      setAttemptAlt(false);
      setImgSrc(src);
    }
  }, [src]);

  const handleError = () => {
    // If lh3.googleusercontent.com fails, try drive.google.com/thumbnail
    if (!attemptAlt && imgSrc && imgSrc.includes('lh3.googleusercontent.com/d/')) {
      const id = imgSrc.split('/d/')[1]?.split('?')[0];
      if (id) {
        setAttemptAlt(true);
        setImgSrc(`https://drive.google.com/thumbnail?id=${id}&sz=w1000`);
        return;
      }
    }
    setFailed(true);
  };

  if (failed || !imgSrc) {
    return (
      <div
        aria-hidden
        className={`${className} flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f8f1e5] to-[#eadac3] dark:from-[#1b2238] dark:to-[#121727] text-ink-soft select-none`}
      >
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#ff7a45_1px,transparent_1px)] [background-size:12px_12px]" />
        <div className="relative z-10 flex flex-col items-center gap-1.5 p-3 text-center">
          <svg className="w-8 h-8 opacity-60 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
          <span className="text-[0.7rem] font-bold tracking-wider uppercase opacity-75">Dokumentasi Proyek</span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={imgSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      loading={eager ? 'eager' : 'lazy'}
      className={className}
      onError={handleError}
    />
  );
}
