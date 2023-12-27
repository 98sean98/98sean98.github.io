import React from 'react';
import type { NextPage } from 'next';

import Headline from '../components/headline';
// import WhatIAmWorkingOn from '../components/what-i-am-working-on';
import WhatIUsedToWorkOn from '../components/what-i-used-to-work-on';
import WhatIAspireToDo from '../components/what-i-aspire-to-do';

const Home: NextPage = () => {
  return (
    <div className={'min-h-screen p-8'}>
      <Headline />

      {/* <hr className={'my-12'} /> */}

      {/* <WhatIAmWorkingOn /> */}

      <hr className={'my-12'} />

      <WhatIUsedToWorkOn />

      <hr className={'my-12'} />

      <WhatIAspireToDo />
    </div>
  );
};

export default Home;
