import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Profile } from './Profile';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
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
