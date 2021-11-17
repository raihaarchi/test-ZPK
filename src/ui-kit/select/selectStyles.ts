import theme from 'styled/theme';
import { StylesConfig } from 'react-select';

const selectTheme = {
  primary: {
    control: {
      border: 'transparent',
    },
    indicatorSeparator: {},
    placeholder: { color: theme.colors.white },
    indicatorsContainer: {},
    dropdownIndicator: {},
    valueContainer: {},
    singleValue: { color: theme.colors.black, fontSize: '14px' },
    menu: {},
    input: {},
    menuList: {},
    option: {},
  },
  blue: {
    control: { border: 'transparent' },
    indicatorSeparator: {},
    placeholder: {},
    indicatorsContainer: {},
    dropdownIndicator: {},
    valueContainer: {},
    singleValue: { color: theme.colors.blue, fontSize: '18px' },
    menu: {},
    input: {},
    menuList: {},
    option: {},
  },
  stroke: {
    control: {
      border: `2px solid ${theme.colors['dark-grey']}`,
    },
    indicatorSeparator: {},
    placeholder: { color: theme.colors.black },
    indicatorsContainer: {},
    dropdownIndicator: {},
    valueContainer: {},
    singleValue: { color: theme.colors.black, fontSize: '14px' },
    menu: {},
    input: {},
    menuList: {},
    option: {},
  },
  secondary: {
    control: {
      border: `2px solid ${theme.colors['dark-grey']}`,
      height: '60px',
      padding: '0 15px',
      borderRadius: '8px',

      [`@media(max-width: ${theme.screens.tablet})`]: {
        height: '40px',
      },
    },
    indicatorSeparator: {},
    placeholder: { color: theme.colors.black },
    indicatorsContainer: {},
    dropdownIndicator: {},
    valueContainer: {
      width: '100%',
      maxWidth: '100%',
      justifyContent: 'flex-start',
    },
    singleValue: { color: theme.colors.black, fontSize: '14px' },
    menu: { width: '100%', maxWidth: '100%', borderRadius: '8px' },
    input: {},
    menuList: { borderRadius: '8px' },
    option: {},
  },
};

const customSelectStyles = (
  currentTheme: 'primary' | 'stroke' | 'blue' | 'secondary',
) => {
  const customStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      color: 'white',
      backgroundColor: 'transparent',
      borderRadius: '8px',
      boxShadow: 'transparent',
      cursor: 'pointer',
      minHeight: ['stroke'].includes(currentTheme) ? '100%' : 'none',
      margin: '0',
      padding: ['stroke'].includes(currentTheme) ? '0 15px' : '0',
      ...selectTheme[currentTheme].control,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
      ...selectTheme[currentTheme].indicatorSeparator,
    }),
    placeholder: (styles) => ({
      ...styles,
      ...selectTheme[currentTheme].placeholder,
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      padding: '2px 0 3px',
      ...selectTheme[currentTheme].indicatorsContainer,
    }),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      padding: '0',
      color: `${theme.colors.blue}`,
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'initial',
      transition: '0.3s',

      ':hover': {
        color: `${theme.colors['dark-blue']}`,
      },
      ...selectTheme[currentTheme].dropdownIndicator,
    }),
    valueContainer: (styles) => ({
      ...styles,
      justifyContent: ['stroke'].includes(currentTheme) ? 'start' : 'flex-end',
      maxWidth: '100%',
      padding: '0',
      marginRight: '5px',
      input: {
        height: 0,
      },
      ...selectTheme[currentTheme].valueContainer,
    }),
    singleValue: (styles) => ({
      ...styles,
      fontWeight: 400,
      lineHeight: '18px',
      position: 'initial',
      transform: 'initial',
      maxWidth: '100%',
      margin: 0,
      ...selectTheme[currentTheme].singleValue,
    }),
    menu: (styles) => ({
      ...styles,
      right: 0,
      borderRadius: '15px',
      boxShadow: 'none',
      minWidth: '200px',
      maxWidth: ['stroke'].includes(currentTheme) ? 'none' : '290px',
      width: '100%',
      marginTop: '10px',

      [`@media(max-width: ${theme.screens.tablet})`]: {
        maxWidth: '100%',
        left: 0,
      },
      ...selectTheme[currentTheme].menu,
    }),
    input: (styles) => ({
      ...styles,
      fontSize: '12px',
      lineHeight: '15px',
      position: 'absolute',
      padding: '0',
      margin: '0',
      opacity: '0',

      input: {
        fontSize: '12px',
        lineHeight: '15px',
        color: 'transparent',
      },
      ...selectTheme[currentTheme].input,
    }),
    menuList: (styles) => ({
      ...styles,
      borderRadius: '8px',
      padding: '0',
      boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)',
      ...selectTheme[currentTheme].menuList,
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      position: 'relative',
      cursor: 'pointer',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '18px',
      color: `${theme.colors.black}`,
      borderBottom: `1px solid ${theme.colors['dark-grey']}`,
      paddingLeft: '35px',
      paddingTop: '11px',
      paddingBottom: '11px',
      backgroundColor: 'transparent',

      ':hover': {
        backgroundColor: 'transparent',

        svg: {
          display: 'initial',
          color: isSelected
            ? `${theme.colors.blue}`
            : `${theme.colors['dark-grey']}`,
        },
      },

      ':last-of-type': {
        borderBottom: 'none',
      },

      svg: {
        display: isSelected ? 'initial' : 'none',
        color: `${theme.colors.blue}`,
        backgroundColor: 'transparent',
      },
      ...selectTheme[currentTheme].option,
    }),
  };

  return customStyles;
};

export default customSelectStyles;
