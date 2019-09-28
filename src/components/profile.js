import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../design/theme';
import drone from '../images/drone_low_saturation.jpg';

import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import posed from 'react-pose';

const iconSizes = '2x';

const IconBox = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  },
});

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

  generateIconBox = (link, icon) => {
    const IconLink = styled.a`
      text-decoration: none;
      color: ${theme.color};
    `;

    return (
      <Grid item xs={4}>
        <IconBox>
          <IconLink href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ width: '100%' }} icon={icon} size={iconSizes} />
          </IconLink>
        </IconBox>
      </Grid>
    );
  };

  render() {
    const ProfileBody = styled.div`
      height: 96vh;
      padding: 2vh 2vw;
      background: url(${drone}) ${theme.backgroundColor};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-blend-mode: multiply;
    `;

    const TextContainer = styled.div`
      background: ${theme.backgroundColor};
      border-radius: 10px;
      margin: auto 2vw;
      margin-top: 8vh;
      padding: 1vmin;
      font-size: calc(20px + 2vmax);
    `;

    const Tag = styled.div`
      font-size: 0.5em;
      color: ${theme.color};
    `;

    const Description = styled.div`
      font-size: 0.4em;
      margin: 3vh 2vw;
    `;

    const IconContainer = styled.div`
      width: 40vw;
      margin: auto;
      position: absolute;
      bottom: 0;
      left: 50%
      transform: translate(-50%, 0);
    `;

    const DownwardsIcon = styled(FontAwesomeIcon)`
      color: ${theme.color};
      margin: 0.5vh auto;
    `;

    const { profile } = this.props;
    const { tag } = this.state;

    return (
      <ProfileBody>
        <TextContainer>
          <div>Hi | I'm </div>
          <div>{profile.myName}</div>
          <Tag>{tag}</Tag>
          <Description>{profile.description}</Description>
        </TextContainer>

        <ThemeProvider theme={{ color: 'tertiary' }}>
          <IconContainer>
            <Grid container spacing={0}>
              {this.generateIconBox(profile.github, faGithub)}
              {this.generateIconBox(profile.linkedIn, faLinkedin)}
              {this.generateIconBox(profile.email, faAt)}
            </Grid>
            <DownwardsIcon icon={faChevronDown} size={iconSizes} />
          </IconContainer>
        </ThemeProvider>
      </ProfileBody>
    );
  }
}

export default Profile;
