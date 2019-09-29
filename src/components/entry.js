import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../design/theme';
import posed from 'react-pose';
import color from '../design/color';

const styles = {
  text: {
    margin: '0.5vh auto',
  },
};

const Hoverable = posed.div({
  hoverable: true,
  init: {
    background: color.primary,
  },
  hover: {
    background: color.secondary,
  },
});

class Entry extends Component {
  render() {
    const { entry } = this.props;
    const Container = styled.a`
      margin: 2vh auto;
      text-decoration: none;
      color: ${theme.color};
    `;

    return (
      <Hoverable style={{ borderRadius: '15px' }}>
        <Container href={entry.link} target="_blank" rel="noopener noreferrer">
          <h3 style={styles.text}>{entry.head}</h3>
          <h4 style={styles.text}>{entry.subhead}</h4>
          <h5 style={styles.text}>{entry.period}</h5>
          <p style={styles.text}>{entry.description}</p>
        </Container>
      </Hoverable>
    );
  }
}

export default Entry;
