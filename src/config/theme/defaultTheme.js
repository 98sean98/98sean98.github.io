import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { rawThemeObject } from './rawThemeObject';

export const defaultTheme = responsiveFontSizes(createMuiTheme(rawThemeObject));
