import { FC } from 'react';
import styled from 'styled/styled';
import { Title, Subtitle } from 'types/requestShipmentHeader';
import Link from 'next/link';

const StyledHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  .header-content__title {
    white-space: nowrap;
    margin: -5px 15px 10px 15px;
    ${({ theme }) => theme.typography.text42x54}
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin: 0 0 5px 0;
      ${({ theme }) => theme.typography.text30x30}
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin: 0 0 10px 0;
      ${({ theme }) => theme.typography.text24x30}
    }
  }
  .header-content__subtitle {
    ${({ theme }) => theme.typography.text14x20}
    color: ${({ theme }) => theme.colors['blue']};
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
    }
  }
`;

interface HeaderTitleProps {
  title: Title;
  subtitle: Subtitle;
}

export const HeaderTitle: FC<HeaderTitleProps> = ({ title, subtitle }) => {
  return (
    <StyledHeaderTitle className="header-content">
      <p className="header-content__title">
        {title.text} <br /> {title.serial}
      </p>
      <Link href={subtitle.link}>
        <a className="header-content__subtitle">{subtitle.text}</a>
      </Link>
    </StyledHeaderTitle>
  );
};

export default HeaderTitle;
