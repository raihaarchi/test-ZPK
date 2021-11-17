import { FC } from 'react';
import styled from 'styled/styled';
import BagIcon from 'components/icons/bagIcon';
import Link from 'next/link';
import { RootState } from 'store';
import { CartState } from 'reducers/cartSlice';
import { useSelector } from 'react-redux';

const StyledLink = styled.a`
  cursor: pointer;
  position: relative;
  display: flex;

  &:hover {
    .header-cart__icon {
      fill: ${({ theme }) => theme.colors.white};
    }

    .header-cart__hint {
      transition-delay: 1s;
      opacity: 1;
      visibility: visible;
    }
  }

  .header-cart__hint {
    ${({ theme }) => theme.typography.text10x12};
    position: absolute;
    right: 50%;
    transform: translate(50%);
    bottom: -18px;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  .header-cart__count {
    ${({ theme }) => theme.typography.text10x15};
    position: absolute;
    top: -10px;
    right: -11px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 100%;
    width: 22px;
    height: 22px;
    padding: 4px 0 3px;
  }
`;

const HeaderCart: FC<{ className?: string }> = ({ className }) => {
  const { cart } = useSelector<RootState, CartState>((s) => s.cart);

  return (
    <Link href="/cart">
      <StyledLink className={className}>
        {!!cart.itemsCount && (
          <p className="header-cart__count">
            <span>{cart.itemsCount}</span>
          </p>
        )}
        <BagIcon className="header-cart__icon" />
        <p className="header-cart__hint">Корзина</p>
      </StyledLink>
    </Link>
  );
};

export default HeaderCart;
