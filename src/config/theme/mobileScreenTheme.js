import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { rawThemeObject } from './rawThemeObject';

const spacing = 5.5;
const typography = Object.assign(rawThemeObject.typography, { fontSize: 12 });

export const mobileScreenThemeObject = {
  ...rawThemeObject,
  typography,
  spacing,
};

export const mobileScreenTheme = responsiveFontSizes(createMuiTheme(mobileScreenThemeObject));
