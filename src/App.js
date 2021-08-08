import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { updateWindowSize } from './actions';
import { Landing } from './components/landing/Landing';
import { AboutMe } from './components/about-me/AboutMe';
import { ContentDivider } from './components/generic/ContentDivider';
import { Robomaster } from './components/projects/robomaster/Robomaster';
import { Aerospace } from './components/projects/aerospace/Aerospace';
import { SLS } from './components/projects/sls/SLS';
import { Footer } from './components/Footer';

const useStyles = makeStyles(() => ({
  app: {},
}));

const App = ({ updateWindowSize }) => {
  const classes = useStyles();

  useEffect(() => {
    updateWindowSize(window.innerWidth, window.innerHeight);
    const handleResize = () => updateWindowSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateWindowSize]);

  return (
    <div className={classes.app}>
      <Landing />
      <AboutMe />
      <ContentDivider />
      <Robomaster />
      <ContentDivider />
      <Aerospace />
      <ContentDivider />
      <SLS />
      <Footer />
    </div>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  updateWindowSize: (width, height) => dispatch(updateWindowSize(width, height)),
});

export default connect(mapState, mapDispatch)(App);
