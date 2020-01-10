import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { images } from '../images';
import { entries } from '../siteConfig';
import resume from '../resume.pdf';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '4vh 3vw',
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {entries.map(entry => (
          <Grid item xs={12} sm={6} md={4} key={entry.head}>
            <Card entry={entry} image={images[entry.image]} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Resume;
