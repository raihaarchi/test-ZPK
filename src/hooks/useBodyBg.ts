import { useRouter } from 'next/router';
import theme from 'styled/theme';

const useBodyBg = (): string => {
  const { route } = useRouter();

  switch (route) {
    case '/about-service':
      return theme.colors.grey;
    case '/payment-and-delivery':
      return theme.colors.grey;
    case '/digest':
      return theme.colors.grey;
    case '/contacts':
      return theme.colors.grey;
    case '/faq':
      return theme.colors.grey;
    case '/suppliers':
      return theme.colors.grey;
    default:
      return theme.colors.white;
  }
};

export default useBodyBg;
