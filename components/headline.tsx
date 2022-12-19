import React, { FC } from 'react';
import Image from 'next/image';
import ProfilePic from '../assets/images/profile_pic.png';
import Content from './content';

const Introduction: FC = () => {
  return (
    <div>
      <h1>Hi, I&#39;m Sean Chok</h1>
      <p className={'mt-4'}>
        I&#39;m a mechanical engineering student at the University of Hong Kong,
        and I&#39;m involved in a few robotics and software projects.
      </p>

      <div className="mt-4">
        <p>If you want to check out my work, you can find them here:</p>

        <ul className="list-disc list-inside">
          <li>
            <a
              href={'https://www.linkedin.com/in/98sean98'}
              target={'_blank'}
              rel="noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href={'https://www.github.com/98sean98'}
              target={'_blank'}
              rel="noreferrer"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Headline: FC = () => {
  return <Content image={ProfilePic} content={<Introduction />} />;
};

export default Headline;
