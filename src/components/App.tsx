import React from 'react';

import ProfilePicture from '../assets/images/profile_pic.png';

function App() {
  return (
    <div className="m-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="col-span-1 flex justify-center">
        <div className="w-full" style={{ maxWidth: '12rem' }}>
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
      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        <h1>Hi, I'm Sean Chok.</h1>
        <p>
          I'm a mechanical engineering student at the University of Hong Kong,
          and I'm involved in several robotics and software projects.
        </p>

        <div className="mt-4">
          <p>If you want to check out my stuff, you can find them here:</p>

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
  );
}

export default App;
