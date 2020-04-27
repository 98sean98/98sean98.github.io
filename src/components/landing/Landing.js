import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from 'react-redux';
import { Expanded } from './Expanded';
import { Compact } from './Compact';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Component = ({ windowSize }) => {
  const classes = useStyles();

  const landscapeAspectRatio = { minimum: 1.2, maximum: 2.8 };
  const aspectRatio = windowSize.height > 0 ? windowSize.width / windowSize.height : 0;
  const showExpanded =
    aspectRatio >= landscapeAspectRatio.minimum && aspectRatio <= landscapeAspectRatio.maximum;

  return <div className={classes.root}>{showExpanded ? <Expanded /> : <Compact />}</div>;
};

const mapState = state => ({
  windowSize: state.windowSize,
});

export const Landing = connect(mapState)(Component);
