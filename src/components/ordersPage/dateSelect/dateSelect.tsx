/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useState, useMemo } from 'react';
import { format } from 'date-fns';
import { dateFilter } from 'types/filtering';
import { filterDate } from 'utils/filterDate';
import { dateSelects } from 'data/dateSelects';
import { dateSelectsValue } from 'types/filtering';
import { SelectOption } from 'types/selectOption';
import Calendar, { CalendarProps } from 'ui-kit/calendar/calendar';
import Select from 'ui-kit/select/select';
import styled from 'styled/styled';

const StyledDateSelect = styled.div`
  width: calc(100% / 3);
  position: relative;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    width: 100%;
    :not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 40px;
  }
  .filters__select {
    width: 100%;
    height: 40px;
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
    }
  }
`;

interface DateSelectProps {
  setFilter: (val: dateFilter) => void;
  filtering: dateFilter | undefined;
}

type DateFormat = Date | null;

const formatDate = (date: Date): string => format(date, 'dd.MM.yyyy');

const changeDateType = (val?: DateFormat | string): DateFormat => {
  if (!val) return null;

  if (typeof val === 'string') {
    return new Date(val);
  }

  return val;
};

const DateSelect: FC<DateSelectProps> = ({ setFilter, filtering }) => {
  const [fromDateValue, toDateValue] = useMemo<[DateFormat, DateFormat]>(() => {
    if (!filtering) return [null, null];
    const { fromDate, toDate } = filtering;
    const isNullToDate = fromDate === toDate;
    return [
      changeDateType(fromDate),
      changeDateType(!isNullToDate ? toDate : null),
    ];
  }, [filtering]);

  const [isOpenSingle, setIsOpenSingle] = useState(false);
  const [isOpenRange, setIsOpenRange] = useState(false);

  const selectedFilteringId = filtering?.select;

  const value = useMemo(() => {
    if (
      (selectedFilteringId === dateSelectsValue.period ||
        selectedFilteringId === dateSelectsValue.selectDay) &&
      fromDateValue
    ) {
      return {
        value: selectedFilteringId,
        label: `${formatDate(fromDateValue)}${
          toDateValue ? ` - ${formatDate(toDateValue)}` : ''
        }`,
      };
    }
    return (
      dateSelects.find(({ value }) => value === selectedFilteringId) ||
      dateSelects[0]
    );
  }, [selectedFilteringId, fromDateValue, toDateValue]);

  const changeFilter = (dates: [DateFormat, DateFormat]) => {
    const id = dates[1] ? dateSelectsValue.period : dateSelectsValue.selectDay;
    setFilter(filterDate(id, dates));
  };

  const handleOnChange: CalendarProps['onChange'] = (dates) => {
    if (Array.isArray(dates)) {
      const [fromDate, toDate] = dates;
      changeFilter([fromDate, toDate]);
      return;
    }

    changeFilter([dates, null]);
  };

  const filterSelectDate = ({ value }: SelectOption) => {
    switch (value) {
      case dateSelectsValue.period: {
        setIsOpenRange(true);
        break;
      }
      case dateSelectsValue.selectDay: {
        setIsOpenSingle(true);
        break;
      }
      default: {
        setIsOpenSingle(false);
        setIsOpenRange(false);
        setFilter(filterDate(value as dateSelectsValue));
      }
    }
  };

  return (
    <StyledDateSelect>
      <Select
        name="date"
        selectTheme="stroke"
        className="filters__select"
        value={value}
        // @ts-ignore
        onChange={filterSelectDate}
        options={dateSelects}
      />
      {isOpenSingle && (
        <Calendar
          startDate={fromDateValue}
          onChange={handleOnChange}
          onClickOutside={() => {
            setIsOpenSingle(false);
          }}
        />
      )}
      {isOpenRange && (
        <Calendar
          startDate={fromDateValue}
          endDate={toDateValue}
          selectsRange
          onChange={handleOnChange}
          onClickOutside={() => {
            setIsOpenRange(false);
          }}
        />
      )}
    </StyledDateSelect>
  );
};
export default DateSelect;
