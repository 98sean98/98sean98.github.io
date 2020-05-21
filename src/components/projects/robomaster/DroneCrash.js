import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Image from 'material-ui-image';
import droneCrash from '../../../images/drone_crash.gif';
import { useScreen } from '../../../custom-hooks/useScreen';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  gif: {
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
  },
  smallGif: {
    borderRadius: '8px',
    width: 'auto',
    height: '250px',
  },
}));

export const DroneCrash = () => {
  const classes = useStyles();
  const { isSmallScreen } = useScreen();

  return (
    <div className={classes.root}>
      <Image
        className={!isSmallScreen ? classes.gif : classes.smallGif}
        src={droneCrash}
        alt={'drone crash'}
      />
    </div>
  );
};
