import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  alignCenter: {
    textAlign: 'center',
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
    `spent an academic year learning Solidworks from scratch`,
    `used so many screws and screw drivers up to the point where I could tell their sizes with my fingers`,
    `fought competition deadlines like a true warrior`,
  ];

  return (
    <Container className={shouldAlignCenter ? classes.alignCenter : classes.alignLeft}>
      <div className={classes.section}>
        <Typography variant={'h4'}>Robomaster</Typography>
        <Typography variant={'caption'}>
          HKU team in <Link href={'http://innowing.hk/dreamlab'}>Dreamlab</Link> (Sept 2018)
        </Typography>
      </div>
      <div className={classes.section}>
        <ul className={clsx(classes.section, classes.alignLeft)}>
          {points.map((point, index) => (
            <li key={index}>
              <Typography variant={'body1'}>{point}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant={'body2'}>
          Key takeaway: a drone that had questionable flight safety
        </Typography>
      </div>
      <div className={classes.section}>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          disableElevation
          href={'http://innowing.hk/robomaster2019/'}>
          Find out more
        </Button>
      </div>
    </Container>
  );
};
