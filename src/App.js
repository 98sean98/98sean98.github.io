import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Footer />
    </div>
  );
};

export default App;
