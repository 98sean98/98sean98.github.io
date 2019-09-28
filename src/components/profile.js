import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../design/theme';

class Profile extends Component {
  render() {
    const { profile } = this.props;
    return <div>{JSON.stringify(profile)}</div>;
  }
}

export default Profile;
