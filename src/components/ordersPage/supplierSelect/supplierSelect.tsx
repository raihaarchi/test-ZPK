/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { SelectOption } from 'types/selectOption';
import { typeFiltering } from 'types/filtering';
import Select from 'ui-kit/select/select';

interface SupplierSelectProps {
  className: string;
  filtering: typeFiltering;
  setFilter: (val: typeFiltering) => void;
  contragentsSelect: SelectOption[];
}

const SupplierSelect: FC<SupplierSelectProps> = ({
  className,
  setFilter,
  filtering,
  contragentsSelect,
}) => {
  const selectSupplierValue =
    contragentsSelect.find(({ value }) => value === filtering?.supplierId) ||
    contragentsSelect[0];

  const filterSelectSupplier = ({ value }: SelectOption) => {
    const prevState = { ...filtering };
    if (Boolean(value)) {
      setFilter({ ...prevState, supplierId: Number(value) });
    } else {
      delete prevState.supplierId;
      setFilter({ ...prevState });
    }
  };

  return (
    <Select
      name="supplier"
      selectTheme="stroke"
      className={className}
      value={selectSupplierValue}
      // @ts-ignore
      onChange={filterSelectSupplier}
      options={contragentsSelect}
    />
  );
};

export default SupplierSelect;
