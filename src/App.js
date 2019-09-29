import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './design/theme';
import siteConfig from './siteConfig';

import Profile from './components/profile';
import Resume from './components/resume';

class App extends Component {
  render() {
    const AppBody = styled.div`
      @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
      text-align: center;
      color: ${theme.color};
      font-family: 'Noto Sans', sans-serif;
    `;

    return (
      <ThemeProvider theme={{ mode: 'lightTransparent', color: 'primary' }}>
        <AppBody>
          <Profile profile={siteConfig.profile} />
          <Resume subsections={siteConfig.contents.subsections} />
        </AppBody>
      </ThemeProvider>
    );
  }
}

export default App;
