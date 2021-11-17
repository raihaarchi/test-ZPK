import { FC } from 'react';
import useHover from 'react-use/lib/useHover';

import styled from 'styled/styled';

const StyledStatusProduct = styled.div`
  cursor: pointer;
  padding: 4px 0;
  color: ${({ theme }) => theme.colors.blue};
`;

const StyledModal = styled.div`
  position: absolute;
  top: 30px;
  left: 50px;
  z-index: 1;
  padding: 22px 25px;
  border-radius: 8px;
  display: flex;
  min-width: 200px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 30px 0px ${({ theme }) => theme.colors['dark-grey']};

  .quantity-product {
    color: ${({ theme }) => theme.colors['dark-grey']};
  }
`;

const StyledText = styled.span`
  margin-top: 6px;
  ${({ theme }) => theme.typography.text14x18Bold};

  .quantity {
    margin-left: 6px;
    ${({ theme }) => theme.typography.text14x18};
  }
`;

interface StatusProductProps {
  prevQuantity: number;
  quantity: number;
}

const StatusProduct: FC<StatusProductProps> = ({ prevQuantity, quantity }) => {
  const modal =
    quantity !== prevQuantity && prevQuantity !== 0 ? (
      <StyledStatusProduct>
        <p>Изменилось количество</p>
      </StyledStatusProduct>
    ) : (
      <div />
    );
  const [hoverable, hovered] = useHover(modal);
  return (
    <div>
      {hoverable}
      <div>
        {hovered && (
          <StyledModal>
            <span className="quantity-product">Количество товара</span>
            <StyledText>
              Было: <span className="quantity"> {prevQuantity} штук</span>
            </StyledText>
            <StyledText>
              Стало: <span className="quantity"> {quantity} штук</span>
            </StyledText>
          </StyledModal>
        )}
      </div>
    </div>
  );
};

export default StatusProduct;
