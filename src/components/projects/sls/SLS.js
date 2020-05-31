import React from 'react';
import { SectionContainer } from '../../generic/SectionContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { Details } from './Details';
import { ProjectImage } from '../../generic/ProjectImage';
import sls from '../../../images/sls.gif';

export const SLS = () => {
  const isXsScreen = useMediaQuery(theme => theme.breakpoints.only('xs'));

  return (
    <SectionContainer>
      <Grid container spacing={2} justify={'space-between'} alignItems={'center'}>
        <Grid item xs={12} sm={7}>
          <Details shouldAlignCenter={isXsScreen} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <ProjectImage src={sls} alt={'sls'} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
