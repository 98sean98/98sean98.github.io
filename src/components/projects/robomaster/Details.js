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
    <Container className={classes.alignLeft}>
      <div className={classes.section}>
        <Typography variant={'h4'}>Robomaster</Typography>
        <Typography variant={'caption'}>
          HKU team in <Link href={'http://innowing.hk/dreamlab'}>Dreamlab</Link> (Sept 2018)
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant={'body1'}>
          Building robots has never been more fun, and challenging as I worked on this project for
          an academic year. Sure, my team and I faced many hardships in ways that were unimaginable:
          from multiple drone crashes, to failing electronics on most of our robots (most of the
          time), and from running out of funding to pay for our hotel during the competition, to not
          having dinners pretty much every night because we had to work our ass off fixing problems.
          It was not a pleasant period of time, but I'm glad we some how made it to completing the
          minimum number of matches we had to play, and even wining one of them despite the lack of
          operator training. And every small bit of success was celebrated in the backdrop of
          failures we had.
        </Typography>
        <Typography variant={'body1'} gutterBottom>
          Yes, we did feel a bit ashamed for representing Hong Kong alongside the team from HKUST,
          which won the international regionals and went head-to-head with most of the really strong
          Mainland China teams. That being said, this has been an unforgettable experience, not to
          mention I made some really good friends just by working together on robotics that we
          continue to feel passionate about.
        </Typography>
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              <Typography variant={'body1'}>{point}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant={'body2'} gutterBottom>
          Key takeaway: a drone that had questionable flight safety
        </Typography>
      </div>
      <div className={clsx(classes.section, shouldAlignCenter && classes.alignCenter)}>
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
