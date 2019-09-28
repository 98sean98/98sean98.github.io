import theme from 'styled-theming';

const myTheme = {
  backgroundColor: theme('mode', {
    dark: '#1a2849',
    darkTransparent: '#1a284970',
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
  textSize: theme('textSize', {
    header: 'calc(24px + 2vmax)',
    subheading: 'calc(12px + 1vmax)',
  }),
};

export default myTheme;
