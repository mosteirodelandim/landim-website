import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import LandingLayout from '../components/LandingLayout';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

/* Origin and Architecture */
import originPic1 from '../assets/images/history/origins_architecture/pic1.jpg';
import originPic2 from '../assets/images/history/origins_architecture/pic2.jpg';
import originPic3 from '../assets/images/history/origins_architecture/pic3.jpg';
import originPic4 from '../assets/images/history/origins_architecture/pic4.jpg';
import originPic5 from '../assets/images/history/origins_architecture/pic5.jpg';
import originPic6 from '../assets/images/history/origins_architecture/pic6.jpg';
import originPic7 from '../assets/images/history/origins_architecture/pic7.jpg';
import originPic8 from '../assets/images/history/origins_architecture/pic8.jpg';

/* Priests */
import priestPic1 from '../assets/images/history/priests/pic1.jpg';
import priestPic2 from '../assets/images/history/priests/pic2.jpg';

/* Extinction */
import brevePic1 from '../assets/images/history/extinction/Breve1.jpg';
import brevePic2 from '../assets/images/history/extinction/Breve2.jpg';
import brevePic3 from '../assets/images/history/extinction/Breve3.jpg';
import brevePic4 from '../assets/images/history/extinction/Breve4.jpg';
import brevePic5 from '../assets/images/history/extinction/Breve5.jpg';
import brevePic6 from '../assets/images/history/extinction/Breve6.jpg';
import brevePic7 from '../assets/images/history/extinction/Breve7.jpg';
import brevePic8 from '../assets/images/history/extinction/Breve8.jpg';
import brevePic9 from '../assets/images/history/extinction/Breve9.jpg';
import brevePic10 from '../assets/images/history/extinction/Breve10.jpg';
import brevePic11 from '../assets/images/history/extinction/Breve11.jpg';
import brevePic12 from '../assets/images/history/extinction/Breve12.jpg';
import brevePic13 from '../assets/images/history/extinction/Breve13.jpg';
import brevePic14 from '../assets/images/history/extinction/Breve14.jpg';
import receitaPic1 from '../assets/images/history/extinction/Receita1.jpg';
import receitaPic2 from '../assets/images/history/extinction/Receita2.jpg';
import receitaPic3 from '../assets/images/history/extinction/Receita3.jpg';
import receitaPic4 from '../assets/images/history/extinction/Receita4.jpg';
import receitaPic5 from '../assets/images/history/extinction/Receita5.jpg';

const images = [originPic1, originPic2, originPic3, originPic4, originPic5, originPic6,
  originPic7, originPic8,
  priestPic1, priestPic2,
  brevePic1, brevePic2, brevePic3, brevePic4, brevePic5, brevePic6, brevePic7, brevePic8,
  brevePic9, brevePic10, brevePic11, brevePic12, brevePic13, brevePic14,
  receitaPic1, receitaPic2, receitaPic3, receitaPic4, receitaPic5];

function HistoryPage() {
  const { t } = useTranslation();
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captions = Object.values(t('history:origins_architecture.imagesCaptions')) // origins
    .concat(Object.values(t('history:priests_commissioners.imagesCaptions'))) // priests
    .concat(Object.values(t('history:extinction.imagesCaptions'))); // extinction

  return (
    <>
      <LandingLayout fullMenu>
        <article id="historyMain">
          <header>
            <h2>{t('history:title')}</h2>
            <p>{t('history:subHeading')}</p>
          </header>
          <section className="wrapper style5">
            <div className="inner">

              <section>
                <header>
                  <h2>{t('history:origins_architecture.title')}</h2>
                  <p>{t('history:origins_architecture.subHeading')}</p>
                  <hr />
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(originPic1));
                      setToggleLightbox(true);
                    }}
                    className="image left"
                    style={{ width: '25vh' }}
                  >
                    <img src={originPic1} alt="" />
                    {t('history:origins_architecture.imagesCaptions.picture1')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:origins_architecture.description1', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(originPic2));
                      setToggleLightbox(true);
                    }}
                    className="image right"
                    style={{ width: '35vh' }}
                  >
                    <img src={originPic2} alt="" />
                    {t('history:origins_architecture.imagesCaptions.picture2')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                    { __html: t('history:origins_architecture.description2', { interpolation: { escapeValue: false } }) }
                  }
                  />
                </>

                <>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:origins_architecture.description3', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <div className="box alt">
                  <div className="row gtr-50 gtr-uniform">
                    <div
                      className="col-6"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(originPic5));
                        setToggleLightbox(true);
                      }}
                    >
                      <span className="image fit">
                        <img src={originPic5} alt="" />
                        {t('history:origins_architecture.imagesCaptions.picture5')}
                      </span>
                    </div>
                    <div
                      className="col-6"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(originPic6));
                        setToggleLightbox(true);
                      }}
                    >
                      <span className="image fit" style={{ textAlign: 'right' }}>
                        <img src={originPic6} alt="" />
                        {t('history:origins_architecture.imagesCaptions.picture6')}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <hr />
                <header>
                  <h2>{t('history:priests_commissioners.title')}</h2>
                  <p>{t('history:priests_commissioners.subHeading')}</p>
                  <hr />
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(priestPic1));
                      setToggleLightbox(true);
                    }}
                    className="image right"
                    style={{ width: '35vh' }}
                  >
                    <img src={priestPic1} alt="" />
                    {t('history:priests_commissioners.imagesCaptions.picture1')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description1', { interpolation: { escapeValue: false } }) }
                    }
                  />

                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description2', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description3', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <p
                  dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description4', { interpolation: { escapeValue: false } }) }
                    }
                />
                <p
                  dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description5', { interpolation: { escapeValue: false } }) }
                    }
                />

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(priestPic2));
                      setToggleLightbox(true);
                    }}
                    className="image left"
                    style={{ width: '35vh' }}
                  >
                    <img src={priestPic2} alt="" />
                    {t('history:priests_commissioners.imagesCaptions.picture2')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description6', { interpolation: { escapeValue: false } }) }
                    }
                  />
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description7', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <p
                  dangerouslySetInnerHTML={
                      { __html: t('history:priests_commissioners.description8', { interpolation: { escapeValue: false } }) }
                    }
                />
              </section>

              <section>
                <hr />
                <header>
                  <h2>{t('history:extinction.title')}</h2>
                  <p>{t('history:extinction.subHeading')}</p>
                  <hr />
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(brevePic1));
                      setToggleLightbox(true);
                    }}
                    className="image right"
                    style={{ width: '30vh' }}
                  >
                    <img src={brevePic1} alt="" />
                    {t('history:extinction.imagesCaptions.breve1')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:extinction.description1', { interpolation: { escapeValue: false } }) }
                    }
                  />

                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:extinction.description2', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(receitaPic1));
                      setToggleLightbox(true);
                    }}
                    className="image left"
                    style={{ width: '32vh' }}
                  >
                    <img src={receitaPic1} alt="" />
                    {t('history:extinction.imagesCaptions.receita1')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:extinction.description3', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>
              </section>

              <section>
                <header>
                  <h5>Heading with a Subtitle</h5>
                  <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                </header>
                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                <hr />
                <h2>Heading Level 2</h2>
                <h3>Heading Level 3</h3>
                <h4>Heading Level 4</h4>
                <h5>Heading Level 5</h5>
                <h6>Heading Level 6</h6>
                <hr />
                <h5>Blockquote</h5>
                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>

                <h4>Lists</h4>
                <div className="row">
                  <div className="col-6 col-12-medium">
                    <h5>Unordered</h5>
                    <ul>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Sagittis adipiscing.</li>
                      <li>Felis enim feugiat.</li>
                    </ul>
                    <h5>Alternate</h5>
                    <ul className="alt">
                      <li>Dolor pulvinar etiam.</li>
                      <li>Sagittis adipiscing.</li>
                      <li>Felis enim feugiat.</li>
                    </ul>
                  </div>
                  <div className="col-6 col-12-medium">
                    <h5>Ordered</h5>
                    <ol>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis viverra.</li>
                      <li>Felis enim feugiat.</li>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis lorem.</li>
                      <li>Felis enim et feugiat.</li>
                    </ol>
                    <h5>Icons</h5>
                    <ul className="icons">
                      <li><a href="/#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="/#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                      <li><a href="/#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="/#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    </ul>
                  </div>
                </div>
                <h5>Actions</h5>
                <div className="row">
                  <div className="col-6 col-12-medium">
                    <ul className="actions">
                      <li><a href="/#" className="button primary">Default</a></li>
                      <li><a href="/#" className="button">Default</a></li>
                    </ul>
                    <ul className="actions small">
                      <li><a href="/#" className="button primary small">Small</a></li>
                      <li><a href="/#" className="button small">Small</a></li>
                    </ul>
                    <ul className="actions stacked">
                      <li><a href="/#" className="button primary">Default</a></li>
                      <li><a href="/#" className="button">Default</a></li>
                    </ul>
                    <ul className="actions stacked">
                      <li><a href="/#" className="button primary small">Small</a></li>
                      <li><a href="/#" className="button small">Small</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-12-medium">
                    <ul className="actions stacked">
                      <li><a href="/#" className="button primary fit">Default</a></li>
                      <li><a href="/#" className="button fit">Default</a></li>
                    </ul>
                    <ul className="actions stacked">
                      <li><a href="/#" className="button primary small fit">Small</a></li>
                      <li><a href="/#" className="button small fit">Small</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h4>Table</h4>
                <h5>Default</h5>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item One</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Two</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Three</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Four</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Five</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2" />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <h5>Alternate</h5>
                <div className="table-wrapper">
                  <table className="alt">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item One</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Two</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Three</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Four</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Five</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2" />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </section>

              <section>
                <h4>Buttons</h4>
                <ul className="actions">
                  <li><a href="/#" className="button primary">Primary</a></li>
                  <li><a href="/#" className="button">Default</a></li>
                </ul>
                <ul className="actions">
                  <li><a href="/#" className="button large">Large</a></li>
                  <li><a href="/#" className="button">Default</a></li>
                  <li><a href="/#" className="button small">Small</a></li>
                </ul>
                <ul className="actions fit">
                  <li><a href="/#" className="button fit">Fit</a></li>
                  <li><a href="/#" className="button primary fit">Fit</a></li>
                  <li><a href="/#" className="button fit">Fit</a></li>
                </ul>
                <ul className="actions fit small">
                  <li><a href="/#" className="button primary fit small">Fit + Small</a></li>
                  <li><a href="/#" className="button fit small">Fit + Small</a></li>
                  <li><a href="/#" className="button primary fit small">Fit + Small</a></li>
                </ul>
                <ul className="actions">
                  <li><a href="/#" className="button primary icon solid fa-download">Icon</a></li>
                  <li><a href="/#" className="button icon solid fa-download">Icon</a></li>
                </ul>
                <ul className="actions">
                  <li><span className="button primary disabled">Disabled</span></li>
                  <li><span className="button disabled">Disabled</span></li>
                </ul>
              </section>

              <section>
                <h4>Form</h4>
                <form method="post" action="#">
                  <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                      <input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-xsmall">
                      <input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <select name="demo-category" id="demo-category">
                        <option value="">- Category -</option>
                        <option value="1">Manufacturing</option>
                        <option value="1">Shipping</option>
                        <option value="1">Administration</option>
                        <option value="1">Human Resources</option>
                      </select>
                    </div>
                    <div className="col-4 col-12-small">
                      <input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked />
                      <label htmlFor="demo-priority-low">Low</label>
                    </div>
                    <div className="col-4 col-12-small">
                      <input type="radio" id="demo-priority-normal" name="demo-priority" />
                      <label htmlFor="demo-priority-normal">Normal</label>
                    </div>
                    <div className="col-4 col-12-small">
                      <input type="radio" id="demo-priority-high" name="demo-priority" />
                      <label htmlFor="demo-priority-high">High</label>
                    </div>
                    <div className="col-6 col-12-small">
                      <input type="checkbox" id="demo-copy" name="demo-copy" />
                      <label htmlFor="demo-copy">Email me a copy</label>
                    </div>
                    <div className="col-6 col-12-small">
                      <input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
                      <label htmlFor="demo-human">Not a robot</label>
                    </div>
                    <div className="col-12">
                      <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" />
                    </div>
                    <div className="col-12">
                      <ul className="actions">
                        <li><input type="submit" value="Send Message" className="primary" /></li>
                        <li><input type="reset" value="Reset" /></li>
                      </ul>
                    </div>
                  </div>
                </form>
              </section>

              <section>
                <h4>Image</h4>
                <h5>Fit</h5>
                <h5>Left &amp; Right</h5>
                <p><span className="image left"><img src={originPic1} alt="" /></span>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
                <p><span className="image right"><img src={originPic1} alt="" /></span>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p>
              </section>

            </div>
          </section>
        </article>
      </LandingLayout>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setToggleLightbox(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageCaption={`(${photoIndex + 1}/${images.length}) ${captions[photoIndex]}`}
        />
      )}
    </>
  );
}

export default HistoryPage;
