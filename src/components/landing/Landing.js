import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from 'react-redux';
import { Expanded } from './Expanded';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Component = ({ windowSize }) => {
  const classes = useStyles();

  console.log(windowSize);

  return (
    <div className={classes.root}>
      <Expanded />
    </div>
  );
};

const mapState = state => ({
  windowSize: state.windowSize,
});

export const Landing = connect(mapState)(Component);
