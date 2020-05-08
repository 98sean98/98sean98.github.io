import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignLeft: {
    textAlign: 'left',
  },
  section: {
    margin: `${theme.spacing(1)}px auto`,
  },
}));

export const Details = ({ shouldAlignCenter }) => {
  const classes = useStyles();

  const points = [
    'spent an academic year learning Solidworks from scratch',
    'used so many screws and screw drivers up to the point where I could' +
      ' differentiate' +
      ' the sizes just by holding them in my hand',
    'fought competition deadlines like a true warrior',
  ];

  return (
    <Container className={shouldAlignCenter ? classes.alignCenter : classes.alignLeft}>
      <div className={classes.section}>
        <Typography variant={'h4'}>Robomaster</Typography>
        <Typography variant={'caption'}>
          HKU team in <Link>Dreamlab</Link>
        </Typography>
      </div>
      <ul className={`${classes.section} ${classes.alignLeft}`}>
        {points.map((point, index) => (
          <li key={index}>
            <Typography variant={'body1'}>{point}</Typography>
          </li>
        ))}
      </ul>
      <Typography variant={'body2'}>
        Key takeaway: a drone that had questionable flight safety
      </Typography>
    </Container>
  );
};
