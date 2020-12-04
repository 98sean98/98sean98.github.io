import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { profile } from '../../siteConfig';
import { resume } from '../../pdf';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  textBox: {
    margin: theme.spacing(2),
  },
  iconGrid: {
    marginLeft: theme.spacing(2),
  },
}));

const CustomIconButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
}))(IconButton);

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

  const icons = [
    { link: profile.github, component: <GitHubIcon /> },
    { link: profile.linkedIn, component: <LinkedInIcon /> },
    { link: profile.email, component: <EmailIcon /> },
  ];

  const delay = 500;
  const secondGroupDelay = delay * (children.length + 1);
  const thirdGroupDelay = secondGroupDelay + delay * 3;
  const fourthGroupDelay = thirdGroupDelay + delay;
  const fifthGroupDelay = fourthGroupDelay + delay;

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
        <Zoom clear delay={secondGroupDelay}>
          <Typography variant={'body1'}>I excel as a </Typography>
        </Zoom>
        <Fade cascade duration={600 * tags.length} delay={secondGroupDelay + delay}>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <Typography variant={'body1'}>{tag}</Typography>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
      <Zoom clear delay={thirdGroupDelay}>
        <div className={classes.textBox}>
          <Typography variant={'body1'}>Would you like to work with me? Find me at </Typography>
        </div>
      </Zoom>
      <Fade cascade bottom duration={500 * icons.length} delay={fourthGroupDelay}>
        <Grid container spacing={2} className={classes.iconGrid}>
          {icons.map((icon, index) => (
            <Grid item key={index}>
              <CustomIconButton
                color={'primary'}
                href={icon.link}
                target={'_blank'}
                rel={'noopener noreferrer'}>
                {icon.component}
              </CustomIconButton>
            </Grid>
          ))}
        </Grid>
      </Fade>
      <Zoom clear delay={fifthGroupDelay}>
        <div className={classes.textBox}>
          <Button
            color="inherit"
            startIcon={<LibraryBooksIcon />}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={resume}>
            Get My Resume
          </Button>
        </div>
      </Zoom>
    </div>
  );
};
