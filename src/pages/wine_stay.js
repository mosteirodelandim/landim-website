import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingLayout from '../components/LandingLayout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

function WineStayPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="winestayHeader">
          <h2>{t('wine_stay:title')}</h2>
          <p style={{ margin: '0 2em 2em 2em' }}>{t('wine_stay:subHeading')}</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>Lorem ipsum dolor</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque
              velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
              scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
              lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
              Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
              tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
              quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
              Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
              Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
              fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
              cursus. Etiam ut gravida sapien.
            </p>

            <p>
              Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
              amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
              id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
              Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
              Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna,
              sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere
              leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse
              id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
              consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
              felis elementum varius.
            </p>

            <hr />

            <h4>Feugiat aliquam</h4>
            <p>
              Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec
              varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia
              tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
              tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean
              erat diam, tempus aliquet erat.
            </p>

            <p>
              Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus
              rutrum cursus velit, eget condimentum nunc blandit vel. In at
              pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
              fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra
              commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim
              vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
              pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum.
              Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.
            </p>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section className="spotlight">
            <div className="image">
              <img src={pic1} alt="" />
            </div>
            <div className="content">
              <h2>
                Magna primis lobortis
                <br />
                sed ullamcorper
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={pic2} alt="" />
            </div>
            <div className="content">
              <h2>
                Tortor dolore feugiat
                <br />
                elementum magna
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={pic3} alt="" />
            </div>
            <div className="content">
              <h2>
                Augue eleifend aliquet
                <br />
                sed condimentum
              </h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p>
            </div>
          </section>
        </section>

        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Accumsan mus tortor nunc aliquet</h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
                eleifend
                <br />
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                ullamcorper.
              </p>
            </header>
            <ul className="features">
              <li className="icon fa-paper-plane">
                <h3>Arcu accumsan</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon solid fa-laptop">
                <h3>Ac Augue Eget</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon solid fa-code">
                <h3>Mus Scelerisque</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon solid fa-headphones-alt">
                <h3>Mauris Imperdiet</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon fa-heart">
                <h3>Aenean Primis</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon fa-flag">
                <h3>Tortor Ut</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Arcue ut vel commodo</h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
                eleifend fringilla.
              </p>
            </header>
            <ul className="actions stacked">
              <li>
                <a href="/#" className="button fit primary">
                  Activate
                </a>
              </li>
              <li>
                <a href="/#" className="button fit">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>

      </article>
    </LandingLayout>
  );
}

export default WineStayPage;
