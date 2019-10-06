import React from 'react';

import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react-web';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import scrollAnim from '../assets/lottie/scroll_down.json';
import historyTile from '../assets/images/history_tile.png';
import servicesTile from '../assets/images/services_tile.jpg';
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

    <div id="main">
      <section id="one" className="tiles">
        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>History</h3>
            <p>From luscious gardens to a timeless cloister,
              Mosteiro de Landim carries centuries of history
              and tradition.
            </p>
          </header>
          <Link to="/" className="link primary" />
        </article>

        <article style={{ backgroundImage: `url(${servicesTile})` }}>
          <header className="major">
            <h3>Services</h3>
            <p>Get to know the services we provide for all types of smile-inducing events.</p>
          </header>
          <Link to="/" className="link primary" />
        </article>
        {/*
        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>Magna</h3>
            <p>Lorem etiam nullam</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>

        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>Ipsum</h3>
            <p>Nisl sed aliquam</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>

        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>Consequat</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>

        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        */}
      </section>
    </div>
  </Layout>
);

export default IndexPage;
