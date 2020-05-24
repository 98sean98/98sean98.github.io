import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(8)}px auto`,
  },
}));

export const SectionContainer = ({ textAlign, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container style={{ textAlign }}>{children}</Container>
    </div>
  );
};
