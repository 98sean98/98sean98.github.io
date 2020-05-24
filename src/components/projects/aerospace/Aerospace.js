import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { Rocket } from './Rocket';
import { SectionContainer } from '../../generic/SectionContainer';
import { Details } from './Details';

export const Aerospace = () => {
  const shouldAlignCenter = useMediaQuery(theme => theme.breakpoints.down('xs'));

  return (
    <SectionContainer>
      <Grid container spacing={2} justify={'flex-start'} alignItems={'flex-end'}>
        <Grid item xs={12} sm={3} lg={4}>
          <Rocket />
        </Grid>
        <Grid item xs={12} sm={9} lg={8}>
          <Details shouldAlignCenter={shouldAlignCenter} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
