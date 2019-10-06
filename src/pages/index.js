import React from 'react';

import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react-web';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import scrollAnim from '../assets/lottie/scroll_down.json';
import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu={false}>
    <section id="banner">
      <div>
        <h2>{config.heading}</h2>
        <br />
        <div id="subHeading">
          <span><strong>{config.subHeading}</strong></span>
          <Typewriter
            onInit={(typewriter) => {
              const carouselArray = config.subheadingTextCarousel;

              for (let i = 0; i < carouselArray.length; i += 1) {
                typewriter.typeString(carouselArray[i])
                  .pauseFor(2500);

                if (i !== carouselArray.length - 1) {
                  typewriter.deleteAll()
                    .callFunction((obj) => {
                      obj.elements.cursor.style.display = 'none';
                    });
                }
              }

              typewriter.start();
            }}
          />
        </div>
      </div>

      {/*
      //TODO substituir o href=one pelo id da nova seccao para dar scroll
      */}
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          <Lottie
            options={{
              animationData: scrollAnim,
            }}
            width="75%"
            height="75%"
          />
        </a>
      </Scroll>
    </section>
  </Layout>
);

export default IndexPage;
