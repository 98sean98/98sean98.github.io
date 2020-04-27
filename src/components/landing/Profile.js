import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { profile } from '../../siteConfig';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const delay = 500;

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  textBox: {
    margin: theme.spacing(2),
  },
}));

export const Profile = () => {
  const classes = useStyles();

  const {
    name: { firstName },
    school,
    tags,
  } = profile;

  const children = [
    <Typography variant={'h5'}>Hi, I'm {firstName}</Typography>,
    <Typography variant={'body1'}>I study at {school}</Typography>,
  ];

  return (
    <div className={classes.root}>
      {children.map((child, index) => (
        <div key={index} className={classes.textBox}>
          <Zoom clear delay={delay * (index + 1)}>
            {child}
          </Zoom>
        </div>
      ))}
      <div className={classes.textBox}>
        <Zoom clear delay={delay * (children.length + 1)}>
          <Typography variant={'body1'}>I excel as a </Typography>
        </Zoom>
        <Fade cascade duration={600 * tags.length} delay={delay * (children.length + 2)}>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <Typography variant={'body1'}>{tag}</Typography>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </div>
  );
};
