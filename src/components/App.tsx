import React from 'react';

import { Coffee } from '@emotion-icons/feather';

import colors from '../theme/colors';

function App() {
  return (
    <div
      className={
        'h-screen flex flex-col justify-center items-center px-4 md:px-8 py-8'
      }>
      <div className={'space-y-2'}>
        <Coffee size={32} color={colors.brand['500']} />
        <p>Hi, my website is undergoing some major updates.</p>
        <p>If you want to check out my stuff, you can find them here:</p>
        <ul className={'list-disc list-inside'}>
          <li>
            <a href={'https://www.linkedin.com/in/98sean98'}>linkedin</a>
          </li>
          <li>
            <a href={'https://www.github.com/98sean98'}>github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
