import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { Rocket } from './Rocket';
import { SectionContainer } from '../../generic/SectionContainer';
import { Details } from './Details';

export const Aerospace = () => {
  const isXsScreen = useMediaQuery(theme => theme.breakpoints.only('xs'));
  const gridProps = {
    justify: isXsScreen ? 'center' : 'flex-start',
    alignItems: isXsScreen ? 'flex-start' : 'flex-end',
  };

  const gridItems = [
    <Grid item key={'rocket'} xs={12} sm={3} lg={4}>
      <Rocket />
    </Grid>,
    <Grid item key={'details'} xs={12} sm={9} lg={8}>
      <Details shouldAlignCenter={isXsScreen} />
    </Grid>,
  ];

  if (isXsScreen) gridItems.reverse();

  return (
    <SectionContainer>
      <Grid container spacing={2} {...gridProps}>
        {gridItems.map(gridItem => gridItem)}
      </Grid>
    </SectionContainer>
  );
};
