import { SelectOption } from 'types/selectOption';
import { dateSelectsValue } from 'types/filtering';

export const dateSelects: SelectOption[] = [
  { value: dateSelectsValue.allTime, label: 'За все время' },
  { value: dateSelectsValue.period, label: 'Период...' },
  { value: dateSelectsValue.month, label: 'За месяц' },
  { value: dateSelectsValue.twoWeeks, label: 'За 2 недели' },
  { value: dateSelectsValue.week, label: 'За неделю' },
  { value: dateSelectsValue.yesterday, label: 'За вчера' },
  { value: dateSelectsValue.today, label: 'За сегодня' },
  { value: dateSelectsValue.selectDay, label: 'Выбрать день' },
];
