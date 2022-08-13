import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import ProfilePic from '../assets/images/profile_pic.png';

const Home: NextPage = () => {
  return (
    <div className={'min-h-screen p-8'}>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="col-span-1 flex justify-center">
          <div className="w-full" style={{ maxWidth: '12rem' }}>
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <div className="absolute inset-0 rounded-md shadow overflow-hidden">
                <Image
                  src={ProfilePic}
                  alt="profile"
                  layout={'fill'}
                  objectFit={'cover'}
                  objectPosition={'center'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h1>Hi, I&#39;m Sean Chok.</h1>
          <p>
            I&#39;m a mechanical engineering student at the University of Hong
            Kong, and I&#39;m involved in several robotics and software
            projects.
          </p>

          <div className="mt-4">
            <p>If you want to check out my work, you can find them here:</p>

            <ul className="list-disc list-inside">
              <li>
                <a href={'https://www.linkedin.com/in/98sean98'}>linkedin</a>
              </li>
              <li>
                <a href={'https://www.github.com/98sean98'}>github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
