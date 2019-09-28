import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './design/theme';

class App extends Component {
  render() {
    const AppBody = styled.div`
      height: 100vh
      background-color: ${theme.backgroundColor};
      font-size: calc(12px + 1vw);
      color: ${theme.textColor};
    `;
    return (
      <ThemeProvider theme={{ mode: 'dark', color: 'primary' }}>
        <AppBody>Todo</AppBody>
      </ThemeProvider>
    );
  }
}

export default App;
