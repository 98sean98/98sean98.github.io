import React from 'react';
import { connect } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { defaultTheme } from './config/theme/defaultTheme';
import { mobileScreenTheme } from './config/theme/mobileScreenTheme';
import { smallScreenTheme } from './config/theme/smallScreenTheme';

const ThemeWrapper = ({ windowSize, children }) => {
  let theme = defaultTheme;

  const sizeThreshold = 600;
  const isMobileScreen = windowSize.width < sizeThreshold || windowSize.height < sizeThreshold;
  const isSmallScreen = windowSize.width < sizeThreshold && windowSize.height < sizeThreshold;

  if (isMobileScreen) theme = mobileScreenTheme;
  if (isSmallScreen) theme = smallScreenTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const mapState = state => ({
  windowSize: state.windowSize,
});

export default connect(mapState)(ThemeWrapper);
