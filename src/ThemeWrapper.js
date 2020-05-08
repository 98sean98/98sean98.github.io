import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useScreen } from './custom-hooks/useScreen';
import { defaultTheme } from './config/theme/defaultTheme';
import { mobileScreenTheme } from './config/theme/mobileScreenTheme';
import { smallScreenTheme } from './config/theme/smallScreenTheme';

export const ThemeWrapper = ({ children }) => {
  const { isMobileScreen, isSmallScreen } = useScreen();
  let theme = defaultTheme;

  if (isMobileScreen) theme = mobileScreenTheme;
  if (isSmallScreen) theme = smallScreenTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
