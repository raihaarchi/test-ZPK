import useScreen from './useScreen';
import { useEffect } from 'react';

type useScroll = (setState: (state: boolean | null) => void) => void;

const useScroll: useScroll = (setState) => {
  const { isTablet, isMobile } = useScreen();

  const getSize = (isTablet: boolean, isMobile: boolean): boolean | null => {
    if (!isTablet && !isMobile) {
      return window.pageYOffset > 912;
    }
    if (isTablet && !isMobile) {
      return window.pageYOffset >= 617;
    }
    if (isMobile) {
      return window.pageYOffset > 760;
    }
    return null;
  };

  const handleScroll = () => setState(getSize(isTablet, isMobile));

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScroll;
