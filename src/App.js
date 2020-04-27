import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ThemeProvider } from '@material-ui/core';
import { smallScreenTheme } from './config/theme/smallScreenTheme';
import { updateWindowSize } from './actions';
import { Landing } from './components/landing/Landing';
import { Footer } from './components/Footer';

const useStyles = makeStyles(() => ({
  app: {},
}));

const App = ({ windowSize, updateWindowSize }) => {
  const classes = useStyles();

  useEffect(() => {
    updateWindowSize(window.innerWidth, window.innerHeight);
    const handleResize = () => updateWindowSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateWindowSize]);

  const sizeThreshold = 650;
  const isScreenSmall = windowSize.width < sizeThreshold && windowSize.height < sizeThreshold;

  const children = (
    <div className={classes.app}>
      <Landing />
      <Footer />
    </div>
  );

  return (
    <>
      {isScreenSmall ? (
        <SmallScreenThemeWrapper theme={smallScreenTheme} children={children} />
      ) : (
        children
      )}
    </>
  );
};

const SmallScreenThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const mapState = state => ({
  windowSize: state.windowSize,
});

const mapDispatch = dispatch => ({
  updateWindowSize: (width, height) => dispatch(updateWindowSize(width, height)),
});

export default connect(
  mapState,
  mapDispatch
)(App);
