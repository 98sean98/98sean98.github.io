import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { Profile } from './Profile';
import landing from '../../images/landing-landscape-02.png';

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

export const Expanded = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item xs={6} className={classes.profile}>
        <Profile />
      </Grid>
    </Grid>
  );
};
