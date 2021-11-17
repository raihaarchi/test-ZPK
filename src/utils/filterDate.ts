import sub from 'date-fns/sub';
import type { Duration } from 'date-fns';
import formatISO from 'date-fns/formatISO';
import { dateFilter, dateSelectsValue } from 'types/filtering';

export const filterDate = (
  select: dateFilter['select'],
  params?: [Date | null, Date | null],
): dateFilter => {
  const today = new Date();
  const todayISO = formatISO(today);
  const yesterday = formatISO(sub(today, { days: 1 }));
  const getDate = (param: Duration) => formatISO(sub(today, param));
  const getSingleDate = (val?: Date | null | string): string =>
    val ? formatISO(val instanceof Date ? val : new Date(val)) : '';
  console.log({ select });
  switch (select) {
    case dateSelectsValue.period: {
      return {
        select: dateSelectsValue.period,
        fromDate: getSingleDate(params?.[0]),
        toDate: getSingleDate(params?.[1] || params?.[0]),
      };
    }
    case dateSelectsValue.month: {
      return {
        select: dateSelectsValue.month,
        fromDate: getDate({ weeks: 2 }),
        toDate: todayISO,
      };
    }
    case dateSelectsValue.twoWeeks: {
      return {
        select: dateSelectsValue.twoWeeks,
        fromDate: getDate({ weeks: 2 }),
        toDate: todayISO,
      };
    }
    case dateSelectsValue.week: {
      return {
        select: dateSelectsValue.week,
        fromDate: getDate({ weeks: 1 }),
        toDate: todayISO,
      };
    }
    case dateSelectsValue.yesterday: {
      return {
        select: dateSelectsValue.yesterday,
        fromDate: yesterday,
        toDate: yesterday,
      };
    }
    case dateSelectsValue.today: {
      return {
        select: dateSelectsValue.today,
        fromDate: todayISO,
        toDate: todayISO,
      };
    }
    case dateSelectsValue.selectDay: {
      const fromDate = getSingleDate(params?.[0]);
      return {
        select: dateSelectsValue.selectDay,
        fromDate: fromDate,
        toDate: fromDate,
      };
    }
    default: {
      return { select: dateSelectsValue.allTime };
    }
  }
};
