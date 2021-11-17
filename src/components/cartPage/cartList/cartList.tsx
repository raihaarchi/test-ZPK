import React, { FC, useState } from 'react';
import styled from 'styled/styled';
import { GoodInCart } from 'types/goodInCart';
import Checkbox from 'ui-kit/checkbox/checkbox';
import CartItem from 'components/cartPage/cartItem/cartItem';
import { useAppDispatch } from 'store';
import { purgeCart } from 'reducers/cartSlice';

const StyledContainer = styled.div`
  .cart-list__select-all-wrapper {
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    display: flex;
    align-items: center;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding: 0 15px 20px 15px;
      margin: 0 -15px;
      justify-content: space-between;
    }

    .cart-list__delete-all-button {
      color: ${({ theme }) => theme.colors.blue};
      ${({ theme }) => theme.typography.text14x18};
      margin-left: 58px;
      cursor: pointer;
      outline: none;
      display: flex;
      align-items: center;

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-left: 10px;
      }

      .cart-list__close-icon {
        margin-left: 5px;
      }
    }
  }
`;

interface CartListProps {
  goods: GoodInCart[];
  className?: string;
}

const CartList: FC<CartListProps> = ({ goods, className }) => {
  const dispatch = useAppDispatch();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleAllItems = () => {
    if (selectedItems.length !== goods.length) {
      setSelectedItems(goods.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const isAllItemsChecked = selectedItems.length === goods.length;

  const isCartItemCheckboxChecked = (id: number) => selectedItems.includes(id);

  const handleItemCheckboxClick = (id: number) => {
    if (isCartItemCheckboxChecked(id)) {
      setSelectedItems(selectedItems.filter((el) => el !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeleteChecked = () => {
    dispatch(purgeCart({ ids: selectedItems }));
    setSelectedItems([]);
  };

  return (
    <StyledContainer className={className}>
      <div className="cart-list__select-all-wrapper">
        <Checkbox
          checked={isAllItemsChecked}
          onChange={toggleAllItems}
          label="Выбрать все"
        />
        {!!selectedItems.length && (
          <button
            className="cart-list__delete-all-button"
            onClick={handleDeleteChecked}>
            Удалить выбранные
            <img
              className="cart-list__close-icon"
              src="/images/close-small.svg"
              alt="close"
            />
          </button>
        )}
      </div>
      {goods.map((item) => (
        <CartItem
          key={item.id}
          goodInCart={item}
          isSelected={isCartItemCheckboxChecked(item.id)}
          handleCheckboxClick={handleItemCheckboxClick}
        />
      ))}
    </StyledContainer>
  );
};

export default CartList;
