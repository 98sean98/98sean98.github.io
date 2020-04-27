import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { rawThemeObject } from './rawThemeObject';

const typography = Object.assign(rawThemeObject.typography, { fontSize: 10 });

const ThemeObject = {
  ...rawThemeObject,
  typography,
};

export const smallScreenTheme = responsiveFontSizes(createMuiTheme(ThemeObject));
