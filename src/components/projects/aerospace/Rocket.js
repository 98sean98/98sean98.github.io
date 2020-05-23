import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Animate } from 'react-move';
import { easePolyIn } from 'd3-ease';
import { ReactComponent as RocketSVG } from './rocket.svg';

const useStyles = makeStyles(theme => ({
  root: {},
  svg: {
    height: 150,
  },
}));

export const Rocket = () => {
  const classes = useStyles();
  const [isLaunched, setIsLaunched] = useState(false);

  const handleButtonClick = () => {
    setIsLaunched(!isLaunched);
  };

  const start = () => ({
    x: 0,
    y: 0,
    angle: 0,
    opacity: 1,
  });

  const update = () => [
    {
      x: isLaunched ? [1000] : 0,
      y: isLaunched ? [-500] : 0,
      angle: isLaunched ? [45] : 0,
      timing: { duration: 4000, ease: easePolyIn },
    },
    {
      opacity: isLaunched ? 1 : [0, 1],
      timing: { delay: 150, duration: 500 },
    },
  ];

  return (
    <Container className={classes.root}>
      <Animate start={start} update={update}>
        {({ x, y, angle, opacity }) => (
          <div
            style={{
              opacity,
              position: 'relative',
              WebkitTransform: `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg)`,
              transform: `translate3d(${x}px, ${y}px, 0) rotate(${angle}deg)`,
            }}>
            <RocketSVG className={classes.svg} />
          </div>
        )}
      </Animate>
      <Button onClick={handleButtonClick}>{isLaunched ? 'Reset' : 'Launch Me'}</Button>
    </Container>
  );
};
