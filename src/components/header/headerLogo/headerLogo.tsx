import { FC } from 'react';
import Logo from 'components/icons/logo';
import styled from 'styled/styled';
import Link from 'next/link';

const StyledHeaderLogo = styled.div`
  display: flex;
  flex-direction: column;

  .header-logo__link {
    color: ${({ theme }) => theme.colors.white};
    max-width: 255px;
    max-height: 58px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      max-width: 215px;
      max-height: 49px;
      margin-bottom: 27px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 115px;
      max-height: 26px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .header-logo__text {
    max-width: 165px;
    ${({ theme }) => theme.typography.text12x15};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      display: none;
    }
  }
`;

const HeaderLogo: FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledHeaderLogo className={className}>
      <Link href="/">
        <a className="header-logo__link">
          <Logo />
        </a>
      </Link>
      <p className="header-logo__text">
        Cервис онлайн-платформы ВТБ Бизнес Коннект
      </p>
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
