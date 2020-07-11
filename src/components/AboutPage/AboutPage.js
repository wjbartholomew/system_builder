import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (

  <div>
    <div>
      <p>
        Welcome to the Stereo System Builder. Choosing to create a new high-end home stereo system can be easy. The application will guide you to pick all the necessary components and alert you to any potential component mismatches. Just click below to start. 

        <button>Build System</button>
      </p>
    </div>
  </div>
);

export default AboutPage;
