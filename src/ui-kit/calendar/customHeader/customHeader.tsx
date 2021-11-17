import { FC } from 'react';
import ArrowLeftIcon from 'components/icons/arrowLeftSmall';
import getYear from 'date-fns/getYear';
import { default as getMonthFNS } from 'date-fns/getMonth';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  /*styled header*/
  .react-datepicker__custom-header {
    display: flex;
    background: ${({ theme }) => theme.colors.white};
    padding: 12px 15px 14px 24px;
    justify-content: space-between;
    align-items: center;
  }
  .react-datepicker__current-month {
    ${({ theme }) => theme.typography.text14x18};
  }
  .react-datepicker__arrows {
    display: flex;
  }
  .react-datepicker__arrows--arrow-left {
    width: 8px;
    height: 13px;
    cursor: pointer;
  }
  .react-datepicker__arrows--arrow-right {
    width: 8px;
    height: 13px;
    margin-left: 13px;
    transform: rotate(-180deg);
    cursor: pointer;
  }
`;

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const getMonth: (date: Date) => string = (date) => months[getMonthFNS(date)];

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

const CustomHeader: FC<CustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
}) => {
  return (
    <StyledContainer>
      <div className="react-datepicker__custom-header">
        <div className="react-datepicker__current-month">
          {getMonth(date)}, {getYear(date)}
        </div>
        <div className="react-datepicker__arrows">
          <button onClick={decreaseMonth}>
            <ArrowLeftIcon className="react-datepicker__arrows--arrow-left" />
          </button>
          <button onClick={increaseMonth}>
            <ArrowLeftIcon className="react-datepicker__arrows--arrow-right" />
          </button>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CustomHeader;
