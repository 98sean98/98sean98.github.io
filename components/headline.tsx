import React, { FC } from 'react';
import Image from 'next/image';
import ProfilePic from '../assets/images/profile_pic.png';
import Content from './content';

const Introduction: FC = () => {
  return (
    <div>
      <h1>Hi, I&#39;m Sean Chok</h1>
      <p className={'mt-4'}>
        I graduated from the University of Hong Kong with a Bachelor of
        Engineering in Mechanical Engineering and a minor in Computer Science.
        I&#39;m currently looking for a full-time opportunity as a robotics
        engineer or software engineer.
      </p>

      <div className="mt-4">
        <p>
          If you want to take a look at previous my work, you can find them
          here:
        </p>

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

      <div className="mt-4">
        <p>
          Feel free to own a copy of my CV:{' '}
          <a href={'/seanchok_cv.pdf'} download>
            seanchok_cv.pdf
          </a>
        </p>
      </div>
    </div>
  );
};

const Headline: FC = () => {
  return <Content image={ProfilePic} content={<Introduction />} />;
};

export default Headline;
