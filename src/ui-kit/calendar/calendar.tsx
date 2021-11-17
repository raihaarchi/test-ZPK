import { FC } from 'react';
import { ru } from 'date-fns/locale';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import CustomHeader from './customHeader/customHeader';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  .react-datepicker {
    user-select: none;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 50px;
  }
  .react-datepicker__header,
  .react-datepicker__header--custom {
    padding: 0;
    border: none;
  }
  .react-datepicker__day-names {
    background: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.typography.text14x18Bold};
    border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  }
  .react-datepicker__day-name {
    width: 30px;
    height: 30px;
    margin: 0 6px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 28px;
      height: 28px;
    }
  }
  .react-datepicker__month-container {
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  .react-datepicker__month {
    margin: 0px 13px 30px 13px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin: 0px 6px 20px 6px;
    }
  }
  .react-datepicker__week {
    display: flex;
  }
  .react-datepicker__day--keyboard-selected {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  .react-datepicker__day {
    width: 30px;
    height: 30px;
    border-radius: 0;
    outline: none;
    margin: 0 6px;
    position: relative;
    ${({ theme }) => theme.typography.text14x18};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 28px;
      height: 28px;
    }
    &--outside-month {
      color: rgba(0, 0, 0, 0.3);
    }
    &--selected {
      background: ${({ theme }) => theme.colors.blue};
    }
    &--in-range,
    &--in-selecting-range {
      background: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.black};
      &:last-child {
        &:after {
          background: none;
        }
      }
      &:after {
        position: absolute;
        right: -12px;
        top: 0;
        content: '';
        display: block;
        width: 12px;
        height: 30px;
        background: ${({ theme }) => theme.colors.grey};
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          height: 28px;
        }
      }
    }
    &--in-selecting-range {
      &:hover {
        &:after {
          background: none;
        }
      }
    }
    &--range-start,
    &--selecting-range-start {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }
    &--range-end {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      &:after {
        background: none;
      }
    }
  }
`;

export interface CalendarProps extends ReactDatePickerProps {
  startDate: Date | null;
}

const Calendar: FC<CalendarProps> = ({ startDate, ...otherProps }) => {
  return (
    <StyledContainer>
      <DatePicker
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <CustomHeader
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
          />
        )}
        className="react-datepicker-wrapper"
        selected={startDate}
        locale={ru}
        startDate={startDate}
        inline
        {...otherProps}
      />
    </StyledContainer>
  );
};

export default Calendar;
