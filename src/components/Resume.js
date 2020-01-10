import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from './Card';
import { images } from '../images';
import { entries } from '../siteConfig';
import resume from '../resume.pdf';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '4vh 3vw',
  },
  resume: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={4}>
          {entries.map(entry => (
            <Grid item xs={12} sm={6} md={4} key={entry.head}>
              <Card entry={entry} image={images[entry.image]} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Container className={classes.resume}>
        <a download href={resume} style={{ textDecoration: 'none' }}>
          <Button color="secondary">Download My Resume</Button>
        </a>
      </Container>
    </>
  );
};

export default Resume;
