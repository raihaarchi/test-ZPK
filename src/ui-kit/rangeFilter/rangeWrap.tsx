import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled/styled';
import RangeFilter from './rangeFIlter';
import RangeInput from './rangeInput';

const StyledFilter = styled.form`
  .range-wrap__title {
    ${({ theme }) => theme.typography.text14x18Bold};
    margin-bottom: 14px;
  }

  .range-wrap__inputs {
    display: flex;
    align-items: center;
    margin-bottom: 19px;
  }

  .range-wrap__separator {
    background: ${({ theme }) => theme.colors.black};
    max-width: 28px;
    width: 100%;
    height: 1px;
    margin: 0 8px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 13px;
      margin: 0 4px;
    }
  }
`;

interface RangeFilterProps {
  className?: string;
  title?: string;
  min: number;
  max: number;
  step: number;
  handlePriceChange: (priceFrom: number, priceTo: number) => void;
  forcePrice: { priceFrom: number; priceTo: number };
}

const RangeWrap: FC<RangeFilterProps> = ({
  className,
  title,
  min,
  max,
  step,
  handlePriceChange,
  forcePrice,
}) => {
  const [minInput, setMinInput] = useState(min);
  const [maxInput, setMaxInput] = useState(max);
  const [minRangeInput, setMinRangeInput] = useState(min);
  const [maxRangeInput, setMaxRangeInput] = useState(max);

  const handleStateChange = (priceFrom: number, priceTo: number) => {
    setMinRangeInput(priceFrom);
    setMaxRangeInput(priceTo);
    setMinInput(priceFrom);
    setMaxInput(priceTo);
  };

  const handleChange = ({
    priceFrom,
    priceTo,
  }: {
    priceFrom: number;
    priceTo: number;
  }) => {
    handleStateChange(priceFrom, priceTo);

    handlePriceChange(priceFrom, priceTo);
  };

  const handleChangeMinRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    const newMin = value < maxRangeInput ? value : maxRangeInput - step;
    setMinRangeInput(newMin);
    setMinInput(newMin);
  };

  const handleChangeMaxRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    const newMax = value > minRangeInput ? value : +minRangeInput + step;
    setMaxRangeInput(newMax);
    setMaxInput(newMax);
  };

  const onBlurMin = (value: number) => {
    const newMin = value < maxInput ? value : maxInput - step;
    handleChange({
      priceFrom: newMin < min ? min : newMin,
      priceTo: maxInput || max,
    });
  };

  const onBlurMax = (value: number) => {
    const newMax = value > minInput ? value : minInput + step;
    handleChange({
      priceFrom: minInput || min,
      priceTo: newMax > max ? max : newMax,
    });
  };

  const router = useRouter();
  const { price_from: priceFrom, price_to: priceTo } = router.query;

  useEffect(() => {
    handleStateChange(min, max);
  }, [min, max]);

  useEffect(() => {
    priceFrom &&
      typeof priceFrom === 'string' &&
      priceTo &&
      typeof priceTo === 'string' &&
      handleChange({ priceFrom: +priceFrom, priceTo: +priceTo });
  }, []);

  useEffect(() => {
    if (
      forcePrice.priceFrom &&
      forcePrice.priceTo &&
      forcePrice.priceFrom !== forcePrice.priceTo
    ) {
      handleStateChange(forcePrice.priceFrom, forcePrice.priceTo);
    }
  }, [forcePrice]);

  return (
    <StyledFilter className={className}>
      {title && <p className="range-wrap__title">{title}</p>}
      <div className="range-wrap__inputs">
        <RangeInput
          value={minInput}
          onChange={(e) => setMinInput(+e.target.value)}
          onBlur={(e) => onBlurMin(+e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' ? onBlurMin(+e.currentTarget.value) : null
          }
        />
        <span className="range-wrap__separator" />
        <RangeInput
          value={maxInput}
          onChange={(e) => setMaxInput(+e.target.value)}
          onBlur={(e) => onBlurMax(+e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' ? onBlurMax(+e.currentTarget.value) : null
          }
        />
      </div>
      <RangeFilter
        min={min}
        max={max}
        step={step}
        minValue={minRangeInput}
        maxValue={maxRangeInput}
        onChangeMin={handleChangeMinRange}
        onChangeMax={handleChangeMaxRange}
        onBlurMin={(e) => onBlurMin(+e.currentTarget.value)}
        onBlurMax={(e) => onBlurMax(+e.currentTarget.value)}
      />
    </StyledFilter>
  );
};

export default RangeWrap;
