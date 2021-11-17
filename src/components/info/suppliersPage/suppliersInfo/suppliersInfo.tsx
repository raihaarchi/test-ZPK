import React, { FC } from 'react';
import styled from 'styled/styled';
import InfoCard from './infoCard/infoCard';
import Container from '../Container/Container';

interface StyleSuppliersInfo {
  className: string;
}

const StyledSuppliersInfo = styled.div<StyleSuppliersInfo>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-direction: column;
  }
`;

interface SuppliersInfo {
  data: {
    receive: string[];
    provide: string[];
  };
  titleLeft: string;
  titleRight: string;
}

const SuppliersInfo: FC<SuppliersInfo> = ({ data, titleLeft, titleRight }) => {
  return (
    <StyledSuppliersInfo className="wrapper">
      <Container title={titleLeft}>
        <InfoCard data={data.receive} src="images/ladder.svg" />
      </Container>
      <Container title={titleRight}>
        <InfoCard data={data.provide} src="images/computer.svg" />
      </Container>
    </StyledSuppliersInfo>
  );
};

export default SuppliersInfo;
