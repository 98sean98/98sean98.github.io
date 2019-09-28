import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './design/theme';
import mars from './images/mars.jpg';
import siteConfig from './siteConfig';

import Profile from './components/profile';

class App extends Component {
  render() {
    const AppBody = styled.div`
      @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
      height: 96vh;
      padding: 2vh 2vw;
      background-color: ${theme.backgroundColor};
      background-image: url(${mars});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
      font-size: calc(12px + 2vmax);
      color: ${theme.textColor};
      font-family: 'Noto Sans', sans-serif;
    `;

    return (
      <ThemeProvider theme={{ mode: 'dark', color: 'primary', fontFamily: 'default' }}>
        <AppBody>profile</AppBody>
      </ThemeProvider>
    );
  }
}

export default App;
