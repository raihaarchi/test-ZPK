import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledDeliveryContent = styled.div`
  .delivery-price {
    &__text {
      ${({ theme }) => theme.typography.text18x25};
      margin-bottom: 55px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text16x20};
        margin-bottom: 35px;
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-bottom: 30px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .delivery-info__list {
    margin-top: 20px;
  }

  .delivery-info-item {
    display: flex;
    padding-top: 15px;
    border-top: 1px solid ${({ theme }) => theme.colors['middle-grey']};
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 10px;
      flex-direction: column;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &__title {
      ${({ theme }) => theme.typography.text18x26Bold};
      width: 140px;
      margin-right: 40px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text16x20Bold};
        margin-bottom: 10px;
        width: 100%;
      }
    }
    &__description {
      ${({ theme }) => theme.typography.text18x25};
      max-width: 323px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text16x20};
        max-width: unset;
      }
    }
  }
`;

interface DeliveryContentProps {
  deliveryContent?: string;
  deliveryInfo?: {
    title?: string;
    description?: string;
  }[];
}

const DeliveryContent: FC<DeliveryContentProps> = ({
  deliveryContent,
  deliveryInfo,
}) => (
  <StyledDeliveryContent>
    <div className="delivery-price">{deliveryContent}</div>
    <div className="delivery-info__list">
      {deliveryInfo?.map(({ title, description }) => (
        <div className="delivery-info__item delivery-info-item" key={title}>
          <h3 className="delivery-info-item__title">{title}</h3>
          <span className="delivery-info-item__description">{description}</span>
        </div>
      ))}
    </div>
  </StyledDeliveryContent>
);

export default DeliveryContent;
