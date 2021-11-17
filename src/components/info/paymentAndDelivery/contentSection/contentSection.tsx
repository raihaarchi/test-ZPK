import styled from 'styled/styled';
import React, { FC } from 'react';

const StyledContentSection = styled.section`
  display: flex;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  padding-bottom: 105px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-bottom: 70px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-wrap: wrap;
    padding-bottom: 50px;
  }

  .content-section__left,
  .content-section__right {
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
      align-items: unset;
    }
  }

  .content-section__right {
    margin-top: 50px;
    margin-left: 50px;
    max-width: 500px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-left: 10px;
      margin-top: 30px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: unset;
      width: 100%;
      margin-left: 0;
    }
  }

  .content-section__title {
    ${({ theme }) => theme.typography.text55x60}
    margin-top: 35px;
    align-self: flex-start;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30}
      margin-top: 30px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold}
    }
  }
`;

interface ContentSectionProps {
  title: string;
  leftChildren?: React.ReactNode;
  rightChildren: React.ReactNode;
}

const ContentSection: FC<ContentSectionProps> = ({
  title,
  leftChildren,
  rightChildren,
}) => {
  return (
    <StyledContentSection>
      <div className="content-section__left">
        <h3 className="content-section__title">{title}</h3>
        {leftChildren}
      </div>
      <div className="content-section__right">{rightChildren}</div>
    </StyledContentSection>
  );
};

export default ContentSection;
