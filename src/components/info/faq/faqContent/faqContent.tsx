import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledFaqContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-wrap: wrap;
  }

  &:not(:last-child) {
    margin-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 30px;
    }
  }

  &:last-child {
    margin-bottom: 175px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 120px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-bottom: 80px;
      ${({ theme }) => theme.typography.text12x15}
    }
  }

  .info-content__subtitle {
    margin-top: 31px;
    ${({ theme }) => theme.typography.text18x20}

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 7px;
      width: 100%;
      ${({ theme }) => theme.typography.text14x18}
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-bottom: 11px;
    }
  }

  .info-content__accordions {
    width: 100%;
    max-width: 845px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      max-width: 730px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: unset;
    }
  }
`;

interface FaqContentProps {
  className?: string;
  children: React.ReactNode;
  text: string;
}

const FaqContent: FC<FaqContentProps> = ({ className, children, text }) => {
  return (
    <StyledFaqContent
      className={className}
      data-aos="fade-in"
      data-aos-once="true">
      <span className="info-content__subtitle">{text}</span>
      <div className="info-content__accordions">{children}</div>
    </StyledFaqContent>
  );
};

export default FaqContent;
