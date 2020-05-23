import React from 'react';
import { Rocket } from './Rocket';
import { SectionContainer } from '../../generic/SectionContainer';
import Grid from '@material-ui/core/Grid';
import { Details } from './Details';

export const Aerospace = () => {
  return (
    <SectionContainer>
      <Grid container spacing={2} justify={'space-between'} alignItems={'center'}>
        <Grid item xs={12} sm={4} md={3}>
          <Rocket />
        </Grid>
        <Grid item>
          <Details />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
