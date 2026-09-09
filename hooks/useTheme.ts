import { useCallback, useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    setIsDark(stored !== 'light');
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return { isDark, toggle };
}
