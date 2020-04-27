import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Component = ({ windowSize }) => {
  const classes = useStyles();

  console.log(windowSize);

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item>something</Grid>
      <Grid item>here</Grid>
    </Grid>
  );
};

const mapState = state => ({
  windowSize: state.windowSize,
});

export const Landing = connect(mapState)(Component);
