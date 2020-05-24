import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import rocket_calculations from '../../../pdf/rocket_calculations.pdf';
import makeStyles from '@material-ui/core/styles/makeStyles';

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

  const assumptions = [
    `the rocket engine's exhaust velocity, and mass flow rate (fuel burn rate) are constants`,
    `the ratio of the final mass to the initial mass is 0.2`,
    `the burnout time is 5 seconds (for the purpose of animation)`,
    `a reasonable function for angular displacement as a function of time is assumed to tilt the rocket`,
    `gravitational acceleration remains constant, instead of decreasing due to rising altitude`,
  ];

  return (
    <Container className={shouldAlignCenter ? classes.alignCenter : classes.alignLeft}>
      <div className={classes.section}>
        <Typography variant={'h4'}>A Rocket Animation</Typography>
      </div>
      <div className={classes.section}>
        <Typography variant={'body1'}>
          Using Tsiolkovsky's rocket equation, and taking gravity into account, but ignoring air
          resistance, I attempted to solve for the 2-dimensional displacements as functions of time.
          Several strong assumptions had to be made to simplify a lot of the calculations.
        </Typography>
        <ul className={classes.alignLeft}>
          {assumptions.map((assumption, index) => (
            <li key={index}>
              <Typography variant={'body1'}>{assumption}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant={'body1'} display={'block'} gutterBottom>
          I was able to find solutions to the velocity after postulating a linear time function for
          angular displacement. Then, the velocity function is used to find the 2 displacement
          functions; and I stopped at relatively complicated definite integrals.
        </Typography>
        <Typography variant={'body1'} display={'block'} gutterBottom>
          Looking at the integrals made me rethink my approach: even if the solutions were correct,
          I did't think the interpolation algorithm used by the animation library to calculate the
          x, y, and angle attributes of the rocket could handle such complicated computations within
          milliseconds. According to the documentation of the library, interpolation should be
          completed quickly because the same calculations need to be done for each finite increment
          of time. Thus, I had to opt for an approximate solution using simple exponential and
          trigonometric functions; and it wasn't too difficult to find what I needed; however, I had
          to optimise the function for angular displacement to use an exponential function so that
          the rocket behaves a little better.
        </Typography>
        <Typography variant={'body1'} display={'block'} gutterBottom>
          After that, I programmed the approximated solution into the animation algorithm. The final
          result is not too bad, but not accurate. Its worth noting that since a rocket's
          acceleration increases over time as mass is lost due to burnt and ejected fuel, the
          velocity increases in a somewhat exponential nature. I do plan to improve what I have
          here, and I think one of the possible ways to use the initial analytical solution is to
          first store numerical results in a table, then do a simple linear interpolation according
          to what is needed.
        </Typography>
        <Typography variant={'body2'} display={'block'} gutterBottom>
          Key takeaway: fried my brain a little bit
        </Typography>
      </div>
      <Button
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={rocket_calculations}
        color={'secondary'}
        variant={'outlined'}
        size={'small'}>
        open rocket calculations
      </Button>
    </Container>
  );
};
