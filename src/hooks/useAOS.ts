import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-out',
        disableMutationObserver: false,
        anchorPlacement: 'top-bottom',
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);
};

export default useAOS;
