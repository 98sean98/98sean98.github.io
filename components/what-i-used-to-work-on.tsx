import React, { FC } from 'react';

import Content from './content';
import TowngasPic from '../assets/images/towngas_video_pig.jpeg';
import RobomasterPic from '../assets/images/robomaster_drone.jpeg';

const TowngasDescription: FC = () => {
  return (
    <div>
      <h2>Towngas Internship</h2>

      <p className={'mt-4'}>
        I was a full time intern at the Hong Kong and China Gas Company (locally
        known as Towngas) during my university gap year. This was where I learnt
        that engineering in practice is actually more challenging than I
        thought. On top of delivering projects on deadlines, I had to manage my
        relationships with my colleagues and bosses.
      </p>

      <div className={'mt-4'}>
        <p>Projects I was involved in</p>

        <ul className={'list-disc list-inside'}>
          <li>a camera module for in-pipe inspection</li>
          <li>
            a raspberry-pi motor controller that interfaces with a mobile app
            via bluetooth (cultivating into the{' '}
            <a href={'https://github.com/98sean98/blue-nebula'}>blue-nebula</a>{' '}
            project)
          </li>
          <li>
            continuous development of an in-pipe linen spraying robot to prolong
            service life of decades old pipes
          </li>
          <li>continuous study of safety of gas pipe purging practices</li>
          <li>point-to-point underground pipe mapping</li>
        </ul>
      </div>
    </div>
  );
};

const RobomasterDescription: FC = () => {
  return (
    <div>
      <h2>Robomaster</h2>

      <p className={'mt-4'}>
        I was part of a team that built robots to shoot each other with
        projectiles on a battlefield like Dota. My contribution was primarily in
        the design, build, and test of a drone that carries a turret for said
        shooting.
      </p>

      <p className={'mt-4'}>
        For a year, our team vomited blood, sweat and tears into building a
        fleet of specialized robots. It was a beautiful culmination of
        mechanical, electrical, and software designs working together. Even
        though we lost all 3 of the group matches we had, we had a lot of fun,
        and made great memories.
      </p>

      <p className={'mt-4'}>
        Note to self: if I ever doubt my love for robotics, just look at this
        picture.
      </p>
    </div>
  );
};

const WhatIUsedToWorkOn: FC = () => {
  return (
    <div>
      <h1>What I used to bang my head around for</h1>
      <div className={'mt-12 space-y-8'}>
        <Content image={TowngasPic} content={<TowngasDescription />} />

        <Content image={RobomasterPic} content={<RobomasterDescription />} />
      </div>
    </div>
  );
};

export default WhatIUsedToWorkOn;
