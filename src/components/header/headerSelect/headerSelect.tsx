import { FC } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  components,
  IndicatorProps,
  OptionProps,
} from 'react-select';
import styled from 'styled/styled';
import ArrowDown from 'components/icons/arrowDown';
import CheckMarkIcon from 'components/icons/checkmarkIcon';
import customSelectStyles from './headerSelectStyles';

const { DropdownIndicator, Option } = components;

const CustomDropdownIndicator: FC<IndicatorProps<OptionTypeBase>> = ({
  ...props
}) => {
  const styles = {
    transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'initial',
    color: props.selectProps.menuIsOpen ? 'red' : 'black',
  };

  return (
    <DropdownIndicator {...props}>
      <ArrowDown style={styles} />
    </DropdownIndicator>
  );
};

const CustomOption: FC<OptionProps<OptionTypeBase>> = ({
  children,
  ...props
}) => {
  const StyledIcon = styled.div`
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  `;

  return (
    <Option {...props}>
      <StyledIcon>
        <CheckMarkIcon />
      </StyledIcon>
      {children}
    </Option>
  );
};

const HeaderSelect: FC<SelectProps<OptionTypeBase>> = ({
  className,
  options,
  onChange,
  value,
  ...props
}) => {
  return (
    <ReactSelect
      options={options}
      className={className}
      onChange={onChange}
      value={value}
      styles={customSelectStyles()}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        Option: CustomOption,
      }}
      defaultValue={options && options[0]}
      isSearchable={false}
      {...props}
    />
  );
};
export default HeaderSelect;
