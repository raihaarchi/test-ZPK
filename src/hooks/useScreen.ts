import theme from 'styled/theme';
import { useMedia } from 'react-use';

const useScreen = () => {
  const {
    screens: { desktop, mobile, tablet },
  } = theme;
  const isMobile = useMedia(`(max-width: ${mobile})`);
  const isTablet = useMedia(`(max-width: ${tablet})`);
  const isDesktop = useMedia(`(max-width: ${desktop})`);
  const isDesktop1440 = !useMedia(`(max-width: ${desktop})`);
  return { isMobile, isTablet, isDesktop, isDesktop1440 };
};

export default useScreen;
