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
import CheckmarkIcon from 'components/icons/checkmarkIcon';
import customSelectStyles from './selectStyles';

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
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
  `;

  return (
    <Option {...props}>
      <StyledIcon>
        <CheckmarkIcon />
      </StyledIcon>
      {children}
    </Option>
  );
};

interface CustomSelectProps extends SelectProps<OptionTypeBase> {
  selectTheme?: 'primary' | 'stroke' | 'blue' | 'secondary';
}

const Select: FC<CustomSelectProps> = ({
  className,
  options,
  onChange,
  value,
  selectTheme = 'primary',
  ...props
}) => {
  return (
    <ReactSelect
      options={options}
      className={className}
      onChange={onChange}
      value={value}
      styles={customSelectStyles(selectTheme)}
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
export default Select;
