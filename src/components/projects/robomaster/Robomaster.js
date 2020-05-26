import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { DroneCrash } from './DroneCrash';
import { Details } from './Details';
import { SectionContainer } from '../../generic/SectionContainer';

export const Robomaster = () => {
  const isXsScreen = useMediaQuery(theme => theme.breakpoints.only('xs'));

  return (
    <SectionContainer>
      <Grid container spacing={2} justify={'space-between'} alignItems={'center'}>
        <Grid item xs={12} sm={7} md={9} lg={8}>
          <Details shouldAlignCenter={isXsScreen} />
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={4}>
          <DroneCrash />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
