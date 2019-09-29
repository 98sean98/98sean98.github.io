import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../design/theme';

const styles = {
  text: {
    margin: '0.5vh auto',
  },
};

class Entry extends Component {
  render() {
    const { entry } = this.props;
    const Container = styled.a`
      margin: 2vh auto;
      text-decoration: none;
      color: ${theme.color};
    `;

    return (
      <Container href={entry.link} target="_blank" rel="noopener noreferrer">
        <h3 style={styles.text}>{entry.head}</h3>
        <h4 style={styles.text}>{entry.subhead}</h4>
        <h5 style={styles.text}>{entry.period}</h5>
        <p style={styles.text}>{entry.description}</p>
      </Container>
    );
  }
}

export default Entry;
