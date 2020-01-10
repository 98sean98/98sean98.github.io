import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Profile from './components/Profile';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Profile />
    </div>
  );
};

export default App;
