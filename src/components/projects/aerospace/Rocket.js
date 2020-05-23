import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import { ReactComponent as RocketSVG } from './rocket.svg';

const useStyles = makeStyles(theme => ({
  root: {},
  svg: {
    height: 150,
    transform: 'rotate(90deg)',
  },
}));

export const Rocket = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <RocketSVG className={classes.svg} />
    </Container>
  );
};
