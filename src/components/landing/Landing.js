import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Expanded } from './Expanded';
import { Compact } from './Compact';
import { useScreen } from '../../custom-hooks/useScreen';

const useStyles = makeStyles(theme => ({
  root: {},
}));

export const Landing = () => {
  const classes = useStyles();
  const { isLandscape } = useScreen();

  return <div className={classes.root}>{isLandscape ? <Expanded /> : <Compact />}</div>;
};
