import React, { FC } from 'react';
import styled from 'styled/styled';

type StyledMobileCardProps = {
  isCursor: boolean;
};

const StyledMobileCard = styled.div<StyledMobileCardProps>`
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  box-sizing: border-box;
  border-radius: 8px;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 10px;
  ${({ isCursor }) => (isCursor ? 'cursor: pointer' : '')};

  &:last-of-type {
    margin-bottom: 0;
  }

  .card-header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    &-cell {
      margin-bottom: 5px;

      &:last-of-type {
        margin-bottom: 0;
      }

      &__title {
        ${({ theme }) => theme.typography.text14x18}
      }
    }
  }

  .card-cell {
    display: flex;
    flex-direction: column;

    &__title {
      ${({ theme }) => theme.typography.text12x15}
      margin-bottom: 5px;
    }

    &__text {
      ${({ theme }) => theme.typography.text16x20Bold}
    }
  }

  .card-footer {
    display: flex;
    width: 100%;
    margin-top: 15px;

    & > div:last-of-type {
      margin-left: 74px;
    }
  }
`;

type MobileCardProps = {
  children: React.ReactElement | null;
  headerContent: React.ReactElement;
  footerContent: React.ReactElement;
  onClick?: () => void;
};

const MobileCard: FC<MobileCardProps> = ({
  children,
  headerContent,
  footerContent,
  onClick,
}) => (
  <StyledMobileCard onClick={onClick} isCursor={onClick ? true : false}>
    <div className="card-header">{headerContent}</div>
    {children}
    <div className="card-footer">{footerContent}</div>
  </StyledMobileCard>
);

export default MobileCard;
