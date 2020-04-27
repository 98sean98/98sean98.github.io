import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Landing } from './components/landing/Landing';
import { Footer } from './components/Footer';
import { updateWindowSize } from './actions';

const useStyles = makeStyles(() => ({
  app: {},
}));

const App = ({ updateWindowSize }) => {
  const classes = useStyles();

  useEffect(() => {
    updateWindowSize(window.innerWidth, window.innerHeight);
  }, [updateWindowSize]);

  return (
    <div className={classes.app}>
      <Landing />
      <Footer />
    </div>
  );
};

const mapState = state => ({});

const mapDispatch = dispatch => ({
  updateWindowSize: (width, height) => dispatch(updateWindowSize(width, height)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
