import { FC } from 'react';
import styled from 'styled/styled';

const StyledFilter = styled.div<{ right: number; left: number }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 16px;

  .range-filter__input {
    position: absolute;
    top: 7px;

    width: 100%;
    height: 2px;

    outline: none;
    background: ${({ theme }) => theme.colors['dark-grey']};

    -webkit-appearance: none;

    &::-webkit-slider-thumb {
      position: relative;
      z-index: 1;

      width: 16px;
      height: 16px;

      cursor: pointer;

      border-radius: 100%;
      background: ${({ theme }) => theme.colors.blue};

      -webkit-appearance: none;
      appearance: none;
    }

    &::-moz-range-thumb {
      position: relative;
      z-index: 1;

      width: 16px;
      height: 16px;

      cursor: pointer;

      border-radius: 100%;
      background: green;
    }
  }

  .range-filter__input--active {
    position: absolute;
    top: 45%;
    left: ${(props) => props.left}%;
    right: ${(props) => props.right}%;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
  }
`;

interface RangeFilterProps {
  className?: string;
  min: number;
  max: number;
  step: number;
  minValue: number;
  maxValue: number;
  onChangeMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurMin: (
    e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>,
  ) => void;
  onBlurMax: (
    e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>,
  ) => void;
}

const RangeFilter: FC<RangeFilterProps> = ({
  className,
  min,
  max,
  step,
  minValue,
  maxValue,
  onChangeMax,
  onChangeMin,
  onBlurMin,
  onBlurMax,
}) => {
  const left = (100 * (minValue - min)) / (max - min) || 0;
  const right = 100 - (100 * (maxValue - min)) / (max - min) || 0;

  return (
    <StyledFilter className={className} right={right} left={left}>
      <input
        className="range-filter__input"
        type="range"
        multiple
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={onChangeMin}
        onTouchEnd={onBlurMin}
        onMouseUp={onBlurMin}
      />
      <input
        className="range-filter__input"
        type="range"
        multiple
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={onChangeMax}
        onTouchEnd={onBlurMax}
        onMouseUp={onBlurMax}
      />
      <div className="range-filter__input--active" />
    </StyledFilter>
  );
};

export default RangeFilter;
