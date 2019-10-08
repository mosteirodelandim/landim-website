import React from 'react';

import Lottie from 'lottie-react-web';
import dogWagging from '../assets/lottie/dog_wagging';

function randomDog() {
  const dogArray = ['Ringo', 'Spot'];

  const rand = Math.floor(Math.random() * dogArray.length);
  return dogArray[rand];
}

const IndexPage = () => (
  <div id="not-found-page">
    <div className="error-wall load-error">
      <div className="error-container">
        <div className="h1_notfound">oh no...</div>
        <div className="h3_notfound">You got a 404 error</div>
        <div className="p_notfound">You should probably head <a onClick={() => history.back()}>back</a> to Landim, you won&apos;t find anything here
          (except perhaps {randomDog()}, the house dog).
        </div>
      </div>
      <Lottie
        options={{
          animationData: dogWagging,
        }}
        width="50%"
        height="50%"
      />
    </div>
  </div>
);

export default IndexPage;
