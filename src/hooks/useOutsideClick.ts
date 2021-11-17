import React, { useEffect } from 'react';

export function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  closeWindow: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(<Node>event?.target)
      ) {
        closeWindow();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
}
