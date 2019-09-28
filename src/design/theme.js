import theme from 'styled-theming';

const myTheme = {
  backgroundColor: theme('mode', {
    light: '#000000',
    dark: '#1a2849',
  }),
  textColor: theme('color', {
    primary: '#505bda',
    secondary: '#b063c5',
    tertiary: '#ffaac3',
  }),
  button: theme('color', {
    primary: '#505bda',
    secondary: '#b063c5',
    tertiary: '#ffaac3',
  }),
};

export default myTheme;
