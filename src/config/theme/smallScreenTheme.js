import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { mobileScreenThemeObject } from './mobileScreenTheme';

const typography = Object.assign(mobileScreenThemeObject.typography, { fontSize: 10 });

export const smallScreenThemeObject = {
  ...mobileScreenThemeObject,
  typography,
};

export const smallScreenTheme = responsiveFontSizes(createMuiTheme(smallScreenThemeObject));
