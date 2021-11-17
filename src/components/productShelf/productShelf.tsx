import styled from 'styled/styled';
import useScroll from '../../hooks/useScroll';
import React, { FC, useEffect, useState } from 'react';
import productShelfType from 'types/productShelfDataType';
import ProductShelfPanel from './productShelfPanel/productShelfPanel';
import ProductShelfPreview from './productShelfPreview/productShelfPreview';
import ProductShelfComposition from './productShlefComposition/productShelfComposition';

const StyledProductShelf = styled.div`
  padding-top: 255px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 126px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-top: 85px;
  }

  .product-shelf__title {
    ${({ theme }) => theme.typography.text55x60};
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 20px;
    }
  }
`;

const MIN_VALUE = 1;

type ProductShelfProps = {
  data: productShelfType[];
};

const ProductShelf: FC<ProductShelfProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean | null>(false);
  const [shelvesQuantity, setShelvesQuantity] = useState<number>(1);

  useScroll(setIsPanelOpen);

  useEffect(() => {
    setShelvesQuantity(MIN_VALUE);
  }, [selectedTab]);

  const counterProps = {
    value: shelvesQuantity,
    min: MIN_VALUE,
    increase: () => setShelvesQuantity((val) => val + 1),
    decrease: () => setShelvesQuantity((val) => val - 1),
  };
  return (
    <StyledProductShelf>
      <div className="wrapper">
        <h2 className="product-shelf__title">Готовые полки</h2>
      </div>
      <ProductShelfPreview
        data={data}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        counterProps={counterProps}
      />
      {isPanelOpen && (
        <ProductShelfPanel
          data={data[selectedTab]}
          counterProps={counterProps}
        />
      )}
      <ProductShelfComposition goods={data[selectedTab].goods} />
    </StyledProductShelf>
  );
};

export default ProductShelf;
