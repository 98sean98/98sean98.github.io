import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#934838',
      },
      secondary: {
        main: '#320A28',
      },
    },
    typography: {
      fontFamily: ['Noto Sans', 'sans serif'].join(','),
    },
  })
);

const Index = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
