import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './design/theme';
import drone from './images/drone.jpg';
import siteConfig from './siteConfig';

import Profile from './components/profile';

class App extends Component {
  render() {
    const AppBody = styled.div`
      @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
      height: 96vh;
      padding: 2vh 2vw;
      background: url(${drone}) ${theme.backgroundColor};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-blend-mode: multiply;
      text-align: center;
      color: ${theme.color};
      font-family: 'Noto Sans', sans-serif;
    `;

    return (
      <ThemeProvider theme={{ mode: 'darkTransparent', color: 'primary' }}>
        <AppBody>
          <Profile profile={siteConfig.profile} />
        </AppBody>
      </ThemeProvider>
    );
  }
}

export default App;
