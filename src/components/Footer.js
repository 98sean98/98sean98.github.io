import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  text: {
    margin: theme.spacing(1),
  },
}));

const Link = ({ href, children }) => (
  <MuiLink color="inherit" underline="always" href={href}>
    {children}
  </MuiLink>
);

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant={'body2'} className={classes.text}>
        Powered with <Link href="https://reactjs.org/">React</Link>. Built with{' '}
        <Link href="https://material-ui.com/">Material-UI</Link>. Managed at{' '}
        <Link href="https://github.com/98sean98/98sean98.github.io">Github Repo</Link>.
      </Typography>
      <Typography variant={'body2'} className={classes.text}>
        Some of the images used do not belong to me, and they do not represent any form of
        commercial value on this site.
      </Typography>
    </div>
  );
};

export default Footer;
