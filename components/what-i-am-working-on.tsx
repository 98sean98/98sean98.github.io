import { FC } from 'react';

import WheeltecPic from '../assets/images/wheeltec_robot.jpeg';
import DeploifaiPic from '../assets/images/deploifai.png';

import Content from './content';

const WheeltecDescription: FC = () => {
  return (
    <div>
      <h2>Autonomous exploration robots</h2>

      <p className={'mt-4'}>
        This is my final year project as part of my mechanical engineering
        degree. I work with 2 others to develop algorithms that control a fleet
        of robots to explore an unknown environment to build a map.
      </p>

      <div className={'mt-4'}>
        <p>The key idea is to</p>
        <ul className={'list-disc list-inside'}>
          <li>
            detect frontier points, which are boundaries between known and
            unknown space on the currently known map
          </li>
          <li>select a frontier point for the robot to navigate towards</li>
          <li>
            on the path to the target frontier point, the robot scans its
            environment and updates its map
          </li>
          <li>
            after reaching the target frontier point, the procedure repeats
            until a sufficiently built map is obtained
          </li>
        </ul>
      </div>
    </div>
  );
};

const DeploifaiDescription: FC = () => {
  return (
    <div>
      <h2>Deploifai</h2>
      <p className={'mt-4'}>
        I&#39;m a co-founder of an MLOps startup that&#39;s based in HKU since
        June 2021. In short, our platform helps ML teams manage their cloud
        infrastructure during their ML project lifecycle. We&#39;re very good at
        connecting different essential tools together, such as data storage,
        training servers, experiments, and deployments.
      </p>
      <p className={'mt-4'}>
        Our company is still very small, and trying to find product market fit.
        We might begin hiring full time engineers and business developers in
        2023. Drop me an <a href={'mailto:seanchok@deploif.ai'}>email</a> with
        your resume if you&#39;re interested.
      </p>

      <p className={'mt-4'}>
        Deploifai is currently free for use, so if you&#39;re also an ML
        developer, give us a try at{' '}
        <a href={'https://deploif.ai'} target={'_blank'} rel="noreferrer">
          deploif.ai
        </a>
        .
      </p>
    </div>
  );
};

const WhatIAmWorkingOn: FC = () => {
  return (
    <div>
      <h1>What I&#39;m banging my head around for right now</h1>
      <div className={'mt-12 space-y-8'}>
        <Content image={WheeltecPic} content={<WheeltecDescription />} />

        <Content image={DeploifaiPic} content={<DeploifaiDescription />} />
      </div>
    </div>
  );
};

export default WhatIAmWorkingOn;
