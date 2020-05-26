import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
}));

const Link = ({ href, children }) => (
  <MuiLink color="inherit" underline="always" href={href}>
    {children}
  </MuiLink>
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant={'body2'} gutterBottom>
        Powered by <Link href={'https://reactjs.org/'}>React</Link>. Built with{' '}
        <Link href={'https://material-ui.com/'}>Material-UI</Link>. Managed at{' '}
        <Link href={'https://github.com/98sean98/98sean98.github.io'}>Github Repo</Link>. Hosted
        using <Link href={'https://pages.github.com/'}>Github Pages</Link>.
      </Typography>
      <Typography variant={'body2'} gutterBottom>
        Some of the images used do not belong to me, and they do not represent any form of
        commercial value on this site.
      </Typography>
      <Typography variant={'body2'} gutterBottom>
        This site is mobile friendly, and it adjusts itself based on device orientation.
      </Typography>
    </div>
  );
};
