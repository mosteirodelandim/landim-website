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

/* Sale */
import salePic1 from '../assets/images/history/sale/picture1.jpg';
import salePic2 from '../assets/images/history/sale/picture2.jpg';

/* Notable people */
import camiloPic1 from '../assets/images/history/notable_people/camilo.jpg';
import camiloPic2 from '../assets/images/history/notable_people/camilo2.jpg';
import camiloPic3 from '../assets/images/history/notable_people/camilo3.jpg';
import albertoPic4 from '../assets/images/history/notable_people/alberto1.jpg';
import albertoPic5 from '../assets/images/history/notable_people/alberto2.jpg';
import sebastiaoPic6 from '../assets/images/history/notable_people/sebastiao1.jpg';

/* Book */
import bookPic1 from '../assets/images/history/book/book1.jpg';


const images = [originPic1, originPic2, originPic3, originPic4, originPic5, originPic6,
  originPic7, originPic8, // origin
  priestPic1, priestPic2, // priests
  brevePic1, brevePic2, brevePic3, brevePic4, brevePic5, brevePic6, brevePic7, brevePic8, // extinction
  brevePic9, brevePic10, brevePic11, brevePic12, brevePic13, brevePic14,
  receitaPic1, receitaPic2, receitaPic3, receitaPic4, receitaPic5,
  salePic1, salePic2, // sale
  camiloPic1, camiloPic2, camiloPic3, albertoPic4, albertoPic5, sebastiaoPic6, // notable people
  bookPic1]; // book

function HistoryPage() {
  const { t } = useTranslation();
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captions = Object.values(t('history:origins_architecture.imagesCaptions')) // origins
    .concat(Object.values(t('history:priests_commissioners.imagesCaptions'))) // priests
    .concat(Object.values(t('history:extinction.imagesCaptions'))) // extinction
    .concat(Object.values(t('history:sale.imagesCaptions'))) // notable people
    .concat(Object.values(t('history:notable_people.imagesCaptions'))) // notable people
    .concat(Object.values(t('history:book.imagesCaptions'))); // book

  return (
    <>
      <LandingLayout fullMenu>
        <article id="historyMain">
          <header id="historyHeader">
            <h2>{t('history:title')}</h2>
            <p>{t('history:subHeading')}</p>
          </header>
          <section className="wrapper style5">
            <div className="inner">

              <section id="origin">
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

              <section id="priests">
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

              <section id="extinction">
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

              <section id="sale">
                <hr />
                <header>
                  <h2>{t('history:sale.title')}</h2>
                  <p>{t('history:sale.subHeading')}</p>
                  <hr />
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(salePic1));
                      setToggleLightbox(true);
                    }}
                    className="image right"
                    style={{ width: '35vh' }}
                  >
                    <img src={salePic1} alt="" />
                    {t('history:sale.imagesCaptions.picture1')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:sale.description1', { interpolation: { escapeValue: false } }) }
                    }
                  />

                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(salePic2));
                      setToggleLightbox(true);
                    }}
                    className="image left"
                    style={{ width: '35vh' }}
                  >
                    <img src={salePic2} alt="" />
                    {t('history:sale.imagesCaptions.picture2')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:sale.description2', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <p
                  dangerouslySetInnerHTML={
                    { __html: t('history:sale.description3', { interpolation: { escapeValue: false } }) }
                  }
                />
              </section>

              <section id="notable">
                <hr />
                <header>
                  <h2>{t('history:notable_people.title')}</h2>
                  <p>{t('history:notable_people.subHeading')}</p>
                  <hr />
                </header>

                <header>
                  <h5>{t('history:notable_people.camilo.title')}</h5>
                  <p>{t('history:notable_people.camilo.subHeading')}</p>
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(camiloPic1));
                      setToggleLightbox(true);
                    }}
                    className="image right"
                    style={{ width: '30vh' }}
                  >
                    <img src={camiloPic1} alt="" />
                    {t('history:notable_people.imagesCaptions.camilo1')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                    { __html: t('history:notable_people.camilo.description1', { interpolation: { escapeValue: false } }) }
                  }
                  />
                </>

                <p
                  dangerouslySetInnerHTML={
                      { __html: t('history:notable_people.camilo.description2', { interpolation: { escapeValue: false } }) }
                    }
                />

                <div className="box alt">
                  <div className="row gtr-50 gtr-uniform">
                    <div
                      className="col-6"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(camiloPic2));
                        setToggleLightbox(true);
                      }}
                    >
                      <span className="image fit">
                        <img src={camiloPic2} alt="" />
                        {t('history:notable_people.camilo.lettersCaption')}
                      </span>
                    </div>
                    <div
                      className="col-6"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(camiloPic3));
                        setToggleLightbox(true);
                      }}
                    >
                      <span className="image fit" style={{ textAlign: 'right' }}>
                        <img src={camiloPic3} alt="" />
                      </span>
                    </div>
                  </div>
                </div>

                <header>
                  <h5>{t('history:notable_people.alberto.title')}</h5>
                  <p>{t('history:notable_people.alberto.subHeading')}</p>
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(albertoPic4));
                      setToggleLightbox(true);
                    }}
                    className="image left"
                    style={{ width: '35vh' }}
                  >
                    <img src={albertoPic4} alt="" />
                    {t('history:notable_people.imagesCaptions.alberto4')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:notable_people.alberto.description1', { interpolation: { escapeValue: false } }) }
                    }
                  />
                </>

                <header>
                  <h5>{t('history:notable_people.sebastiao.title')}</h5>
                  <p>{t('history:notable_people.sebastiao.subHeading')}</p>
                </header>

                <>
                  <span
                    onClick={() => {
                      setPhotoIndex(images.indexOf(sebastiaoPic6));
                      setToggleLightbox(true);
                    }}
                    className="image right"
                    style={{ width: '25vh' }}
                  >
                    <img src={sebastiaoPic6} alt="" />
                    {t('history:notable_people.imagesCaptions.sebastiao6')}
                  </span>
                  <p
                    dangerouslySetInnerHTML={
                      { __html: t('history:notable_people.sebastiao.description1', { interpolation: { escapeValue: false } }) }
                    }
                  />

                  <h6>{t('history:notable_people.sebastiao.poemTitle')}</h6>
                  <blockquote style={{ whiteSpace: 'pre-line' }}>{t('history:notable_people.sebastiao.poem')}</blockquote>
                </>
              </section>

              <section id="book">
                <header>
                  <hr />
                  <h2>{t('history:book.title')}</h2>
                  <h4>{t('history:book.subHeading')}</h4>
                  <h6>{t('history:book.subSubHeading')}</h6>
                  <p>{t('history:book.subSubSubHeading')}</p>
                </header>
                <span
                  onClick={() => {
                    setPhotoIndex(images.indexOf(bookPic1));
                    setToggleLightbox(true);
                  }}
                  className="image right"
                  style={{ width: '30vh' }}
                >
                  <img src={bookPic1} alt="" />
                  {t('history:book.imagesCaptions.book1')}
                </span>
                <blockquote>{t('history:book.quote', { interpolation: { escapeValue: false } })}</blockquote>
                <p style={{ textAlign: 'right' }}>{t('history:book.quoteCitation')}</p>
                <hr />
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
