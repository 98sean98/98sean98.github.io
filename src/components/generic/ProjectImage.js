import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiImage from 'material-ui-image';
import { useScreen } from '../../custom-hooks/useScreen';

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

export const ProjectImage = ({ src, alt }) => {
  const classes = useStyles();
  const { isSmallScreen } = useScreen();
  const [aspectRatio, setAspectRatio] = useState(1);

  const img = new Image();
  img.src = src;
  img.onload = function() {
    setAspectRatio(this.width / this.height);
  };

  return (
    <div className={classes.root}>
      <MuiImage
        className={!isSmallScreen ? classes.gif : classes.smallGif}
        src={src}
        alt={alt}
        aspectRatio={aspectRatio}
      />
    </div>
  );
};
