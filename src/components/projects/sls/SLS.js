import React from 'react';
import { SectionContainer } from '../../generic/SectionContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { Details } from './Details';

export const SLS = () => {
  const isXsScreen = useMediaQuery(theme => theme.breakpoints.only('xs'));

  return (
    <SectionContainer>
      <Grid container spacing={2} justify={'space-between'} alignItems={'center'}>
        <Grid item xs={12} sm={7} md={9} lg={8}>
          <Details shouldAlignCenter={isXsScreen} />
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={4}>
          image
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
