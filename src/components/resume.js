import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../design/theme';
import { Button } from '@material-ui/core';

import Entry from './entry';

import resume from '../resume.pdf';

class Resume extends Component {
  generateGrid = subsection => {
    const Container = styled.div`
      margin: 2vh auto;
      max-width: calc(800px + 5vw);
    `;

    const Subsection = styled.div`
      margin: 2vh auto;
    `;

    return (
      <Container>
        <h2>{subsection.tag}</h2>
        <Subsection>
          {subsection.entries.map(entry => (
            <Entry entry={entry} />
          ))}
        </Subsection>
        <hr></hr>
      </Container>
    );
  };

  render() {
    const { subsections } = this.props;

    const Body = styled.div`
      padding: 2vh 4vw;
      background: ${theme.backgroundColor};
    `;

    const Footer = styled.div`
      margin-bottom: 2vh;
    `;

    return (
      <ThemeProvider theme={{ mode: 'light', color: 'primary' }}>
        <Body>
          {subsections.map(subsection => this.generateGrid(subsection))}
          <h4>Click each section to find out more.</h4>
          <Footer>
            <a download href={resume} style={{ textDecoration: 'none' }}>
              <Button>Download My Resume</Button>
            </a>
          </Footer>
        </Body>
      </ThemeProvider>
    );
  }
}

export default Resume;
