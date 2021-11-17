import theme from 'styled/theme';
import { StylesConfig } from 'react-select';

const customSelectStyles = () => {
  const customStyles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      position: 'initial',
    }),
    control: (styles, { menuIsOpen }) => ({
      ...styles,
      color: 'white',
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'transparent',
      cursor: 'pointer',
      minHeight: 'none',
      margin: '0',

      ':hover': {
        borderColor: 'transparent',
      },

      '@media(max-width: 1023px)': {
        maxWidth: '100%',
      },

      '@media(max-width: 767px)': {
        display: menuIsOpen ? 'none' : 'flex',
      },
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
    placeholder: (styles) => ({
      ...styles,
      color: `${theme.colors.white}`,
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      padding: '2px 0 3px',
    }),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      padding: '0',
      color: `${theme.colors.white}`,
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'initial',
      transition: '0.3s',

      ':hover': {
        color: `${theme.colors.white}`,
      },
    }),
    valueContainer: (styles) => ({
      ...styles,
      justifyContent: 'flex-end',
      maxWidth: '150px',
      padding: '0',
      marginRight: '5px',

      input: {
        height: 0,
      },
    }),
    singleValue: (styles) => ({
      ...styles,
      color: `${theme.colors.white}`,
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '15px',
      position: 'initial',
      top: 0,
      transform: 'initial',
      maxWidth: '100%',
      margin: 0,
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: '15px',
      boxShadow: 'none',
      right: '0',
      maxWidth: '290px',
      width: '100%',
      marginTop: '10px',

      '@media(max-width: 1023px)': {
        left: '385px',
      },

      '@media(max-width: 767px)': {
        left: 0,
        maxWidth: '100%',
        marginTop: 0,
      },
    }),
    input: (styles) => ({
      ...styles,
      fontSize: '12px',
      lineHeight: '15px',
      padding: '0',
      margin: '0',
      opacity: '0',

      input: {
        fontSize: '12px',
        lineHeight: '15px',
        color: 'transparent',
      },
    }),
    menuList: (styles) => ({
      ...styles,
      borderRadius: '15px',
      padding: '12px 0 10px',
      boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)',
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      position: 'relative',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '20px',
      color: `${theme.colors.black}`,
      borderBottom: `1px solid ${theme.colors['dark-grey']}`,
      paddingLeft: '50px',
      paddingTop: '10px',
      paddingBottom: '9px',
      backgroundColor: 'transparent',

      svg: {
        display: isSelected ? 'initial' : 'none',
        color: `${theme.colors.blue}`,
        backgroundColor: 'transparent',
      },

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
    }),
  };

  return customStyles;
};

export default customSelectStyles;
