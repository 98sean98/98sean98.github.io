import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Profile } from './Profile';
import landing from '../../images/landing-portrait-03.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    background: `url(${landing})`,
    backgroundSize: 'cover',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundBlendMode: 'multiply',
  },
  profile: {
    padding: theme.spacing(4),
  },
}));

export const Compact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <Profile />
      </div>
    </div>
  );
};
