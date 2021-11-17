/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { SelectOption } from 'types/selectOption';
import { typeFiltering } from 'types/filtering';
import Select from 'ui-kit/select/select';

interface StatusSelectProps {
  className: string;
  filtering: typeFiltering;
  setFilter: (val: typeFiltering) => void;
  statusSelect: SelectOption[];
}

const StatusSelect: FC<StatusSelectProps> = ({
  className,
  setFilter,
  filtering,
  statusSelect,
}) => {
  const selectStatusValue =
    statusSelect.find(({ value }) => value === filtering?.statusId) ||
    statusSelect[0];

  const filterSelectStatus = ({ value }: SelectOption) => {
    const prevState = { ...filtering };
    if (Boolean(value)) {
      setFilter({ ...filtering, statusId: Number(value) });
    } else {
      delete prevState.statusId;
      setFilter({ ...prevState });
    }
  };

  return (
    <Select
      name="status"
      selectTheme="stroke"
      className={className}
      value={selectStatusValue}
      // @ts-ignore
      onChange={filterSelectStatus}
      options={statusSelect}
    />
  );
};
export default StatusSelect;
