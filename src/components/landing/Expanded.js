import React from 'react';
import Container from '@material-ui/core/Container';
import { Profile } from './Profile';
import makeStyles from '@material-ui/core/styles/makeStyles';
import landing from '../../images/landing_v1.1.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    background: `url(${landing})`,
    backgroundSize: 'cover',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundBlendMode: 'multiply',
  },
}));

export const Expanded = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Profile />
      </Container>
    </div>
  );
};
