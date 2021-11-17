/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { SelectOption } from 'types/selectOption';
import { typeFiltering } from 'types/filtering';
import Select from 'ui-kit/select/select';

interface SenderSelectProps {
  className: string;
  filtering: typeFiltering;
  setFilter: (val: typeFiltering) => void;
  departmentsSelect: SelectOption[];
}

const SenderSelect: FC<SenderSelectProps> = ({
  className,
  setFilter,
  filtering,
  departmentsSelect,
}) => {
  const selectSenderValue =
    departmentsSelect.find(({ value }) => value === filtering?.senderId) ||
    departmentsSelect[0];

  const filterSelectSender = ({ value }: SelectOption) => {
    const prevState = { ...filtering };
    if (Boolean(value)) {
      setFilter({ ...filtering, senderId: Number(value) });
    } else {
      delete prevState.senderId;
      setFilter({ ...prevState });
    }
  };

  return (
    <Select
      name="sender"
      selectTheme="stroke"
      className={className}
      value={selectSenderValue}
      // @ts-ignore
      onChange={filterSelectSender}
      options={departmentsSelect}
    />
  );
};

export default SenderSelect;
