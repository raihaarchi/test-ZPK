import React, { FC } from 'react';
import styled from 'styled/styled';

type StyledTabletCardProps = {
  widthLeft?: number;
  isCursor: boolean;
};

const StyledTabletCard = styled.div<StyledTabletCardProps>`
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 20px;
  margin-bottom: 15px;
  ${({ isCursor }) => (isCursor ? 'cursor: pointer' : '')};

  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: ${({ widthLeft }) => `${widthLeft || 100}px`};
    padding: 17px 0;
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.colors['dark-grey']};

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

  .card-right {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    & > div:first-of-type {
      margin-left: 58px;
    }
  }
`;

type TabletCardProps = {
  leftContent: React.ReactElement;
  rightContent: React.ReactElement;
  widthLeft?: number;
  onClick?: () => void;
};

const TabletCard: FC<TabletCardProps> = ({
  leftContent,
  rightContent,
  widthLeft,
  onClick,
}) => (
  <StyledTabletCard
    onClick={onClick}
    widthLeft={widthLeft}
    isCursor={onClick ? true : false}>
    <div className="card-left">{leftContent}</div>
    <div className="card-right">{rightContent}</div>
  </StyledTabletCard>
);

export default TabletCard;
