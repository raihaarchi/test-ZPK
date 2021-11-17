import React, { FC } from 'react';
import Card from './Card/Card';
import Container from '../Container/Container';
import { SuppliersCard } from 'types/suppliers';
import styled from 'styled/styled';

interface StyleSuppliersCards {
  className: string;
}

const StyledSuppliersCards = styled.div<StyleSuppliersCards>`
  margin-top: 70px;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: 40px;
    flex-wrap: wrap;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    margin-top: 30px;
    flex-direction: column;
  }

  .suppliers-card {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 10px;
    }
  }
`;

interface SuppliersCards {
  data: SuppliersCard[];
  containerTitle: string;
}

const SuppliersCards: FC<SuppliersCards> = ({ data, containerTitle }) => (
  <Container title={containerTitle} className="wrapper">
    <StyledSuppliersCards
      className="suppliers-cards"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500">
      {data.map(
        ({ order, title, color, marginTop, marginTopTablet }, index) => {
          return (
            <Card
              className="suppliers-card"
              order={order}
              color={color}
              title={title}
              marginTopTablet={marginTopTablet}
              marginTop={marginTop}
              key={index}
            />
          );
        },
      )}
    </StyledSuppliersCards>
  </Container>
);

export default SuppliersCards;
