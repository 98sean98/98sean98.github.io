import theme from 'styled-theming';

const myTheme = {
  backgroundColor: theme('mode', {
    dark: '#f6f6f6',
    darkTransparent: '#f6f6f670',
  }),
  color: theme('color', {
    primary: '#420000',
    secondary: '#d4d7dd',
    tertiary: '#eae9e9',
  }),
};

export default myTheme;
