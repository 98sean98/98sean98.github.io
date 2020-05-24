import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { SectionContainer } from '../generic/SectionContainer';
import { Attribute } from './Attribute';
import { attributes } from './attributes';

const useStyles = makeStyles(theme => ({
  section: {
    margin: `${theme.spacing(2)}px auto`,
  },
}));

export const AboutMe = () => {
  const classes = useStyles();

  return (
    <SectionContainer key={'about-me'} textAlign={'center'}>
      <div className={classes.section}>
        <Typography variant={'h5'}>I am a </Typography>
      </div>

      <div className={classes.section}>
        <Grid container spacing={2} justify={'center'}>
          {attributes.map((attribute, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <Attribute {...attribute} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant={'caption'}>
          Icons made by{' '}
          <Link href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
            Eucalyp
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" title="Flaticon">
            Flaticon
          </Link>
          .
        </Typography>
      </div>
    </SectionContainer>
  );
};
