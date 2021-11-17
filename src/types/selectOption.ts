import { OptionTypeBase, ValueType } from 'react-select';

export type SelectOption = { label: string; value: number | string };

export type selectValue = {
  status?: SelectOption;
  date?: SelectOption;
  supplier?: SelectOption;
  sender?: SelectOption;
};

export type SelectOptionType = ValueType<OptionTypeBase>;
