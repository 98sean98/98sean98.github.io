import React, { useEffect, useState } from 'react';
import { useScreen } from '../../../custom-hooks/useScreen';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { Animate } from 'react-move';
import { ReactComponent as RocketSVG } from './rocket.svg';

const useStyles = makeStyles(theme => ({
  root: {},
  launchPlatform: {
    width: 120,
    textAlign: 'center',
  },
  launchPlatformOperating: {
    borderRadius: theme.spacing(2),
    boxShadow: '0 0 0 1000vmax rgba(10,10,10,0.3)',
  },
  svg: {
    height: 150,
  },
}));

const launchDuration = 5000; // milliseconds
const resetDuration = 500;

export const Rocket = () => {
  const classes = useStyles();

  const { windowSize, isMobileScreen, isLandscape } = useScreen();
  const horizontalDistance = (isMobileScreen && !isLandscape ? 0.6 : 0.75) * windowSize.width;
  const verticalDistance = 0.7 * windowSize.height;

  const [isLaunched, setIsLaunched] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const timeoutDuration = (isLaunched ? launchDuration : resetDuration) + 350; // is the rocket being launched or being reset
    const timer = setTimeout(() => setIsFlying(false), isFlying ? timeoutDuration : 0); // timeout does not run when rocket is not flying
    return () => clearTimeout(timer);
  }, [isLaunched, isFlying, setIsFlying]);

  const handleButtonClick = () => {
    setIsLaunched(!isLaunched);
    setIsFlying(true);
  };

  const start = () => ({
    x: 0,
    y: 0,
    angle: 0,
    opacity: 1,
  });

  const update = () => {
    const xValue = isLaunched ? horizontalDistance : 0;
    const yValue = isLaunched ? -1 * verticalDistance : 0;
    const angleValue = isLaunched ? 90 : 0;

    return [
      {
        x: isLaunched && isFlying ? [xValue] : xValue,
        y: isLaunched && isFlying ? [yValue] : yValue,
        angle: isLaunched && isFlying ? [angleValue] : angleValue,
        timing: { delay: 150, duration: launchDuration },
      },
      {
        opacity: isLaunched || !isFlying ? 1 : [0, 1],
        // opacity = 1 when rocket is being launched or not flying
        timing: { delay: 150, duration: resetDuration },
      },
    ];
  };

  const interpolation = (beginValue, endValue, attribute) => {
    const a = +beginValue;
    const b = +endValue - a;

    return function(t) {
      switch (attribute) {
        case 'x':
          return a + b * (1 - Math.cos((Math.PI / 2) * t));
        case 'y':
          return a + b * Math.sin((Math.PI / 2) * (1 - Math.cos((Math.PI / 2) * t)));
        case 'angle':
          return a + b * (1 - Math.cos((Math.PI / 2) * t)); // constant angular velocity
        default:
          return a + b * t;
      }
    };
  };

  return (
    <Container className={classes.root}>
      <div
        className={clsx(
          classes.launchPlatform,
          isLaunched && isFlying && classes.launchPlatformOperating
        )}>
        <Animate start={start} update={update} interpolation={interpolation}>
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
        <Button onClick={handleButtonClick} disabled={isFlying}>
          {isLaunched ? 'Reset' : 'Launch Me'}
        </Button>
      </div>
    </Container>
  );
};
