import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../design/theme';

class Profile extends Component {
  state = {
    tag: this.props.profile.tags[0],
  };

  componentDidMount() {
    let i = 0;
    const delay = 2000;
    const tags = this.props.profile.tags;
    setInterval(() => {
      i = (i + 1) % tags.length;
      this.setState({ tag: tags[i] });
    }, delay);
  }

  render() {
    const Container = styled.div`
      background: ${theme.backgroundColor};
      border-radius: 10px;
      max-width: calc(350px + 8vw);
      margin: auto;
      margin-top: 12vh;
      padding: 1vmin;
      font-size: calc(24px + 2vmax);
    `;

    const Tag = styled.div`
      font-size: 0.5em;
      color: ${theme.color};
    `;

    const Description = styled.div`
      font-size: 0.4em;
      margin: 3vh 2vw;
    `;

    const { profile } = this.props;
    const { tag } = this.state;

    return (
      <Container>
        <div>Hi | I'm </div>
        <div>{profile.myName}</div>
        <ThemeProvider theme={{ color: 'primary' }}>
          <Tag>{tag}</Tag>
        </ThemeProvider>
        <Description>{profile.description}</Description>
      </Container>
    );
  }
}

export default Profile;
