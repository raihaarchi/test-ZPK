import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledCard = styled.div`
  width: 33.3333%;
  :not(:last-child) {
    margin-right: 120px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-right: 75px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-right: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    margin-top: 30px;
  }

  .card__description {
    margin-bottom: 15px;
    ${({ theme }) => theme.typography.text18x25};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text12x15};
    }
  }

  .card__title {
    ${({ theme }) => theme.typography.text30x30};
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text18x20};
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20};
    }
  }

  .card__title:not(:last-child) {
    margin-bottom: 5px;
  }
`;

interface CardProps {
  titles: string[];
  description: string;
}

const Card: FC<CardProps> = ({ titles, description }) => {
  return (
    <StyledCard>
      <p className="card__description">{description}</p>
      {titles.map((title, index) => (
        <p className="card__title" key={index}>
          {title}
        </p>
      ))}
    </StyledCard>
  );
};

export default Card;
