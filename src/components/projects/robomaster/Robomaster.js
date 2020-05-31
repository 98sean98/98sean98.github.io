import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { Details } from './Details';
import { SectionContainer } from '../../generic/SectionContainer';
import { ProjectImage } from '../../generic/ProjectImage';
import droneCrash from '../../../images/drone_crash.gif';

export const Robomaster = () => {
  const isXsScreen = useMediaQuery(theme => theme.breakpoints.only('xs'));

  return (
    <SectionContainer>
      <Grid container spacing={2} justify={'space-between'} alignItems={'center'}>
        <Grid item xs={12} sm={7} lg={8}>
          <Details shouldAlignCenter={isXsScreen} />
        </Grid>
        <Grid item xs={12} sm={5} lg={4}>
          <ProjectImage src={droneCrash} alt={'drone crash'} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
