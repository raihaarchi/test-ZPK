import { useEffect, useState } from 'react';

export function useLockBodyScroll(locked: boolean) {
  const [actualLocked, setActualLocked] = useState(locked);

  useEffect(() => {
    requestAnimationFrame(() => setActualLocked(locked));
  }, [locked]);

  useEffect(() => {
    if (actualLocked) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'visible';
      };
    }
  }, [actualLocked]);
}
