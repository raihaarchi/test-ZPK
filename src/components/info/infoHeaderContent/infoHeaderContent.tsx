import cn from 'classnames';
import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  padding-top: 200px;
  position: relative;
  z-index: 9;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 96px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 60px;
  }

  .info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 420px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 262px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding-top: 26px;
      padding-bottom: 20px;
      height: unset;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

interface HeaderContentProps {
  children: React.ReactNode;
  img: React.ReactNode;
  className?: string;
  contentClassName?: string;
  isWrapper?: boolean;
}

const InfoHeaderContent: FC<HeaderContentProps> = ({
  children,
  img,
  className,
  contentClassName,
  isWrapper,
}) => {
  return (
    <StyledContainer
      className={cn(className, { wrapper: isWrapper })}
      data-aos="fade-in"
      data-aos-once="true">
      <div className={cn('info-header', contentClassName)}>
        {children}
        {img}
      </div>
    </StyledContainer>
  );
};

export default InfoHeaderContent;
