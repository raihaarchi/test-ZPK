import { FC } from 'react';
import { useAppDispatch } from 'store';
import { changeProduct } from 'reducers/orderSlice';

import PlusIcon from 'components/icons/plusIcon';
import MinusIcon from 'components/icons/minusIcon';
import useScreen from 'hooks/useScreen';

import styled from 'styled/styled';

const StyledCounterProducts = styled.div`
  margin-right: 25px;
  width: 100%;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  ${({ theme }) => theme.typography.text14x18}

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 119px;
  }
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 204px;
    height: 40px;
  }

  .icon {
    width: 18px;
    color: ${({ theme }) => theme.colors.blue};

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 30px;
    }
  }
  .button {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

interface CounterProductsProps {
  quantity: number;
  id: number;
  minQuantity: number;
  pickingQuantum: number;
}

const CounterProducts: FC<CounterProductsProps> = ({
  quantity,
  id,
  minQuantity,
  pickingQuantum,
}) => {
  const { isMobile } = useScreen();
  const dispatch = useAppDispatch();

  const increaseCounter = () => {
    const newQuantity = quantity + (pickingQuantum || 1);
    dispatch(changeProduct({ id, quantity: newQuantity }));
  };

  const decreaseCounter = () => {
    const newQuantity = quantity - (pickingQuantum || 1);
    if (newQuantity >= (minQuantity || 1)) {
      dispatch(changeProduct({ id, quantity: newQuantity }));
    }
  };

  return (
    <StyledCounterProducts>
      <button className="button" onClick={decreaseCounter}>
        <MinusIcon className="icon" />
      </button>
      {isMobile ? `${quantity} шт` : quantity}
      <button className="button" onClick={increaseCounter}>
        <PlusIcon className="icon" />
      </button>
    </StyledCounterProducts>
  );
};

export default CounterProducts;
