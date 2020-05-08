import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { DroneCrash } from './DroneCrash';
import { Details } from './Details';

const useStyles = makeStyles(theme => ({
  grid: {
    margin: `${theme.spacing(2)}px 0`,
  },
  details: {
    textAlign: 'right',
  },
}));

export const Robomaster = () => {
  const classes = useStyles();
  const shouldAlignCenter = useMediaQuery(theme => theme.breakpoints.down('xs'));

  return (
    <Container>
      <Grid
        container
        spacing={2}
        justify={'flex-end'}
        alignItems={'center'}
        className={classes.grid}>
        <Grid item xs={12} sm={7} md={3} lg={8}>
          <Details shouldAlignCenter={shouldAlignCenter} />
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={4}>
          <DroneCrash />
        </Grid>
      </Grid>
    </Container>
  );
};
