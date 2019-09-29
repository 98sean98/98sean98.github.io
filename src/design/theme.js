import theme from 'styled-theming';

const myTheme = {
  backgroundColor: theme('mode', {
    light: '#f6f6f6',
    lightTransparent: '#f6f6f670',
  }),
  color: theme('color', {
    primary: '#420000',
    secondary: '#d4d7dd',
    tertiary: '#eae9e9',
  }),
};

export default myTheme;
