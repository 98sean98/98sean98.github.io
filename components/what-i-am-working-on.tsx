import { FC } from 'react';

import WheeltecPic from '../assets/images/wheeltec_robot.jpeg';
import DeploifaiPic from '../assets/images/deploifai.png';

import Content from './content';

const DeploifaiDescription: FC = () => {
  return (
    <div>
      <h2>Deploifai</h2>
      <p className={'mt-4'}>
        I&#39;m a co-founder of an MLOps startup that&#39;s based in HKU since
        June 2021. Our platform helps ML teams manage their cloud infrastructure
        during their ML project lifecycle. We&#39;re very good at connecting
        different essential tools together, such as data storage, training
        servers, experiments, and deployments.
      </p>
      <p className={'mt-4'}>
        Our company is still very small, and is actively finding product market
        fit. We might begin hiring full time engineers and business developers
        in 2023. Drop us an <a href={'mailto:jobs@deploif.ai'}>email</a> with
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
        <Content image={DeploifaiPic} content={<DeploifaiDescription />} />
      </div>
    </div>
  );
};

export default WhatIAmWorkingOn;
