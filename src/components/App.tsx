import React from 'react';

import { Coffee } from '@emotion-icons/feather';

import colors from '../theme/colors';

import ProfilePicture from '../assets/images/profile_pic.png';

const links = (
  <>
    <li>
      <a href={'https://www.linkedin.com/in/98sean98'}>linkedin</a>
    </li>
    <li>
      <a href={'https://www.github.com/98sean98'}>github</a>
    </li>
  </>
);

function App() {
  return (
    <div className="min-h-screen m-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      <div className="col-span-1">
        <div className="mx-auto" style={{ maxWidth: '12rem' }}>
          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            <div className="absolute inset-0 rounded-md overflow-hidden">
              <img
                src={ProfilePicture}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
    </div>
  );
}

export default App;
