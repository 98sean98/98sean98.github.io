import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: '10%',
    width: '100%',
    maxWidth: '100px',
    height: 'auto',
  },
  spacing: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

export const Attribute = ({ image, title, description }) => {
  const classes = useStyles();
  const { src, alt } = image;

  return (
    <div>
      <Typography variant={'h6'} className={classes.spacing}>
        {title}
      </Typography>
      <img src={src} alt={alt} className={classes.image} />
      <Typography variant={'body1'} className={classes.spacing}>
        {description}
      </Typography>
    </div>
  );
};
