import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import posed from 'react-pose';
import mars from '../images/mars.jpg';
import { profile } from '../siteConfig';

const useStyles = makeStyles(theme => ({
  profileBody: {
    height: '96vh',
    padding: '2vh 2vw',
    background: `url(${mars})`,
    backgroundSize: 'cover',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundBlendMode: 'multiply',
  },
  textContainer: {
    color: 'white',
    maxWidth: 'calc(500px + 2vw)',
    margin: 'auto',
    marginTop: '12vh',
  },
  iconContainer: {
    width: '40vw',
    margin: 'auto',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  iconLink: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  downIcon: {
    color: theme.palette.primary.contrastText,
    margin: '0.5vh auto',
  },
}));

const iconSizes = '2x';

const IconBox = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  },
});

const Profile = () => {
  const classes = useStyles();

  const icons = [
    { link: profile.github, component: faGithub },
    { link: profile.linkedIn, component: faLinkedin },
    { link: profile.email, component: faAt },
  ];

  return (
    <div className={classes.profileBody}>
      <div className={classes.textContainer}>
        <Typography variant={'h1'}>{profile.myName}</Typography>
        {profile.tags.map(tag => (
          <Typography variant={'h4'} key={tag}>
            {tag}
          </Typography>
        ))}
      </div>
      <div className={classes.iconContainer}>
        <Grid container spacing={0}>
          {icons.map(icon => (
            <Grid item xs={4} key={icon.link}>
              <IconBox>
                <a
                  className={classes.iconLink}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon
                    style={{ width: '100%' }}
                    icon={icon.component}
                    size={iconSizes}
                  />
                </a>
              </IconBox>
            </Grid>
          ))}
        </Grid>
        <FontAwesomeIcon className={classes.downIcon} icon={faChevronDown} size={iconSizes} />
      </div>
    </div>
  );
};

export default Profile;
