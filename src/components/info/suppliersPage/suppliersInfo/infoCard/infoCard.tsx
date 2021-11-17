import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledInfoCard = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.typography.text18x25};

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    &:last-child {
      margin-left: 40px;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    &:last-child {
      margin-left: 0;
    }
  }

  .suppliers-info__image {
    margin-bottom: 50px;
    height: 221px;
    width: auto;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 142px;
    }
  }

  .suppliers-info__text {
    margin-bottom: 34px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: flex;
    }
  }
  .suppliers-info__text:before {
    content: '•';
    color: ${({ theme }) => theme.colors.blue};
  }

  .suppliers-info__text span {
    padding-left: 30px;
    display: inline-block;
  }
`;

interface InfoCard {
  data: string[];
  src: string;
}

const InfoCard: FC<InfoCard> = ({ data, src }) => {
  return (
    <StyledInfoCard>
      <img className="suppliers-info__image" src={src} alt="информация" />
      <ul>
        {data.map((str, index) => (
          <li className="suppliers-info__text" key={index}>
            <span>{str}</span>
          </li>
        ))}
      </ul>
    </StyledInfoCard>
  );
};

export default InfoCard;
