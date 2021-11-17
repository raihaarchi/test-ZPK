import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledPaymentList = styled.ul`
  .payment-list {
    &__item {
      padding-left: 60px;
      position: relative;
      max-width: 500px;
      margin-bottom: 30px;
      ${({ theme }) => theme.typography.text18x25};

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        padding-left: 40px;
        ${({ theme }) => theme.typography.text16x20};
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        padding-left: 28px;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 5px;
        display: flex;
        width: 8px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 100%;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

type PaymentListProps = {
  data: string[];
};

const PaymentList: FC<PaymentListProps> = ({ data }) => (
  <StyledPaymentList className="payment-list">
    {data.map((el, i) => (
      <li className="payment-list__item" key={i}>
        {el}
      </li>
    ))}
  </StyledPaymentList>
);

export default PaymentList;
