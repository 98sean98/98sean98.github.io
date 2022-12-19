import React, { FC } from 'react';

import Content from './content';
import MarsPic from '../assets/images/mars.jpg';

const MarsDescription: FC = () => {
  return (
    <div>
      <h2>Making humans interplanetary</h2>

      <p className={'mt-4'}>
        I know it sounds lofty, but I wish to contribute to the effort to making
        humans interplanetary. Maybe we&#39;ll start from Mars, or Venus. Mars
        seems to be the target for space agencies, and even commercial companies
        even though I&#39;ve heard that Venus is easier to terraform.
      </p>
    </div>
  );
};

const WhatIAspireToDo: FC = () => {
  return (
    <div>
      <h1>What I aspire to do</h1>

      <div className={'mt-12 space-y-8'}>
        <Content image={MarsPic} content={<MarsDescription />} />
      </div>
    </div>
  );
};

export default WhatIAspireToDo;
