import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import LandingLayout from '../components/LandingLayout';
import ScrollUpButton from "react-scroll-up-button";
import 'react-image-lightbox/style.css';
import Scroll from '../components/Scroll';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';


function HistoryPage({data}) {
  const { t } = useTranslation();

  // Local state
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Images
  const banner = data.banner.childImageSharp.fluid;

  /* Origin and Architecture */
  const originPic1 = data.originPic1.childImageSharp.fluid;
  const originPic2 = data.originPic2.childImageSharp.fluid;
  const originPic3 = data.originPic3.childImageSharp.fluid;
  const originPic4 = data.originPic4.childImageSharp.fluid;
  const originPic5 = data.originPic5.childImageSharp.fluid;
  const originPic6 = data.originPic6.childImageSharp.fluid;
  const originPic7 = data.originPic7.childImageSharp.fluid;
  const originPic8 = data.originPic8.childImageSharp.fluid;

  /* Priests */
  const priestPic1 = data.priestPic1.childImageSharp.fluid;
  const priestPic2 = data.priestPic2.childImageSharp.fluid;

  /* Extinction */
  const brevePic1 = data.brevePic1.childImageSharp.fluid;
  const brevePic2 = data.brevePic2.childImageSharp.fluid;
  const brevePic3 = data.brevePic3.childImageSharp.fluid;
  const brevePic4 = data.brevePic4.childImageSharp.fluid;
  const brevePic5 = data.brevePic5.childImageSharp.fluid;
  const brevePic6 = data.brevePic6.childImageSharp.fluid;
  const brevePic7 = data.brevePic7.childImageSharp.fluid;
  const brevePic8 = data.brevePic8.childImageSharp.fluid;
  const brevePic9 = data.brevePic9.childImageSharp.fluid;
  const brevePic10 = data.brevePic10.childImageSharp.fluid;
  const brevePic11 = data.brevePic11.childImageSharp.fluid;
  const brevePic12 = data.brevePic12.childImageSharp.fluid;
  const brevePic13 = data.brevePic13.childImageSharp.fluid;
  const brevePic14 = data.brevePic14.childImageSharp.fluid;
  const receitaPic1 = data.receitaPic1.childImageSharp.fluid;
  const receitaPic2 = data.receitaPic2.childImageSharp.fluid;
  const receitaPic3 = data.receitaPic3.childImageSharp.fluid;
  const receitaPic4 = data.receitaPic4.childImageSharp.fluid;
  const receitaPic5 = data.receitaPic5.childImageSharp.fluid;

  /* Sale */
  const salePic1 = data.salePic1.childImageSharp.fluid;
  const salePic2 = data.salePic2.childImageSharp.fluid;

  /* Notable people */
  const camiloPic1 = data.camiloPic1.childImageSharp.fluid;
  const camiloPic2 = data.camiloPic2.childImageSharp.fluid;
  const camiloPic3 = data.camiloPic3.childImageSharp.fluid;
  const albertoPic4 = data.albertoPic4.childImageSharp.fluid;
  const albertoPic5 = data.albertoPic5.childImageSharp.fluid;
  const sebastiaoPic6 = data.sebastiaoPic6.childImageSharp.fluid;

  /* Book */
  const bookPic1 = data.bookPic1.childImageSharp.fluid;

  // Image and caption array
  const images = [originPic1, originPic2, originPic3, originPic4, originPic5, originPic6,
    originPic7, originPic8, // origin
    priestPic1, priestPic2, // priests
    brevePic1, brevePic2, brevePic3, brevePic4, brevePic5, brevePic6, brevePic7,
    brevePic8, // extinction
    brevePic9, brevePic10, brevePic11, brevePic12, brevePic13, brevePic14,
    receitaPic1, receitaPic2, receitaPic3, receitaPic4, receitaPic5,
    salePic1, salePic2, // sale
    camiloPic1, camiloPic2, camiloPic3, albertoPic4, albertoPic5, sebastiaoPic6, // notable people
    bookPic1]; // book


  const captions = Object.values(t('history:origins_architecture.imagesCaptions')) // origins
    .concat(Object.values(t('history:priests_commissioners.imagesCaptions'))) // priests
    .concat(Object.values(t('history:extinction.imagesCaptions'))) // extinction
    .concat(Object.values(t('history:sale.imagesCaptions'))) // notable people
    .concat(Object.values(t('history:notable_people.imagesCaptions'))) // notable people
    .concat(Object.values(t('history:book.imagesCaptions'))); // book

  // Sections
  const originsSection = () => {
    return (
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
          <Img fluid={originPic1}/>
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
          <Img fluid={originPic2}/>
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
              className="col-md-6"
              onClick={() => {
                setPhotoIndex(images.indexOf(originPic5));
                setToggleLightbox(true);
              }}
            >
            <span className="image fit">
              <Img fluid={originPic5}/>
              {t('history:origins_architecture.imagesCaptions.picture5')}
            </span>
            </div>
            <div
              className="col-md-6"
              onClick={() => {
                setPhotoIndex(images.indexOf(originPic6));
                setToggleLightbox(true);
              }}
            >
            <span className="image fit" style={{ textAlign: 'right' }}>
              <Img fluid={originPic6}/>
              {t('history:origins_architecture.imagesCaptions.picture6')}
            </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const priestsSection = () => {
    return (
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
          <Img fluid={priestPic1}/>
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
          <Img fluid={priestPic2}/>
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
    );
  }

  const extinctionSection = () => {
    return (
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
          <Img fluid={brevePic1}/>
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
          style={{ width: '23vh' }}
        >
          <Img fluid={receitaPic1}/>
          {t('history:extinction.imagesCaptions.receita1')}
        </span>
          <p
            dangerouslySetInnerHTML={
              { __html: t('history:extinction.description3', { interpolation: { escapeValue: false } }) }
            }
          />
        </>
      </section>
    );
  }

  const saleSection = () => {
    return (
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
          <Img fluid={salePic1}/>
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
            <Img fluid={salePic2}/>
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
    );
  }

  const notableSection = () => {
    return (
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
          <Img fluid={camiloPic1}/>
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
              <Img fluid={camiloPic2}/>
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
              <Img fluid={camiloPic3}/>
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
          <Img fluid={albertoPic4}/>
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
          <Img fluid={sebastiaoPic6}/>
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
    );
  }

  const bookSection = () => {
    return (
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
          <Img fluid={bookPic1}/>
          {t('history:book.imagesCaptions.book1')}
      </span>
        <blockquote>{t('history:book.quote', { interpolation: { escapeValue: false } })}</blockquote>
        <p style={{ textAlign: 'right' }}>{t('history:book.quoteCitation')}</p>
        <hr />
      </section>
    );
  }

  return (
    <div>
      <ScrollUpButton />
      <LandingLayout fullMenu>
        <article id="historyMain">
          <BackgroundImage
            Tag="header"
            fluid={banner}
          >
            <h2>{t('history:title')}</h2>
            <p>{t('history:subHeading')}</p>
          </BackgroundImage>
          <section className="wrapper style5" style={{paddingTop: "2em"}}>
            <div className="inner">
              <p style={{fontSize: "small"}}>
                  <Scroll type="id" element="origins"><a href="#origins" className="more">ORIGENS E ARQUITECTURA</a></Scroll>
                  <br/>
                  <Scroll type="id" element="priests"><a href="#priests" className="more">PRIORES E COMENDATÁRIOS</a></Scroll>
                  <br/>
                  <Scroll type="id" element="extinction"><a href="#extinction" className="more">EXTINÇÃO DO MOSTEIRO</a></Scroll>
                  <br/>
                  <Scroll type="id" element="sale"><a href="#sale" className="more">VENDA E PROPRIEDADE FAMILIAR</a></Scroll>
                  <br/>
                  <Scroll type="id" element="notable"><a href="#notable" className="more">FIGURAS DE RELEVO</a></Scroll>
                  <br/>
                  <Scroll type="id" element="book"><a href="#book" className="more">LIVRO</a></Scroll>
              </p>


              {originsSection()}
              {priestsSection()}
              {extinctionSection()}
              {saleSection()}
              {notableSection()}
              {bookSection()}

            </div>
          </section>
        </article>
      </LandingLayout>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex].srcWebp}
          nextSrc={images[(photoIndex + 1) % images.length].srcWebp}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].srcWebp}
          onCloseRequest={() => setToggleLightbox(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageCaption={`(${photoIndex + 1}/${images.length}) ${captions[photoIndex]}`}
        />
      )}
    </div>
  );
}


export const query = graphql`
  query {
    banner: file(relativePath: {eq: "history/banner.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    originPic1: file(relativePath: {eq: "history/origins_architecture/pic1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic2: file(relativePath: {eq: "history/origins_architecture/pic2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic3: file(relativePath: {eq: "history/origins_architecture/pic3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic4: file(relativePath: {eq: "history/origins_architecture/pic4.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic5: file(relativePath: {eq: "history/origins_architecture/pic5.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic6: file(relativePath: {eq: "history/origins_architecture/pic6.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic7: file(relativePath: {eq: "history/origins_architecture/pic7.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    originPic8: file(relativePath: {eq: "history/origins_architecture/pic8.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    priestPic1: file(relativePath: {eq: "history/priests/pic1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    priestPic2: file(relativePath: {eq: "history/priests/pic2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    brevePic1 : file(relativePath: {eq: "history/extinction/Breve1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic2 : file(relativePath: {eq: "history/extinction/Breve2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic3 : file(relativePath: {eq: "history/extinction/Breve3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic4 : file(relativePath: {eq: "history/extinction/Breve4.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic5 : file(relativePath: {eq: "history/extinction/Breve5.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic6 : file(relativePath: {eq: "history/extinction/Breve6.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic7 : file(relativePath: {eq: "history/extinction/Breve7.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic8 : file(relativePath: {eq: "history/extinction/Breve8.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic9 : file(relativePath: {eq: "history/extinction/Breve9.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic10: file(relativePath: {eq: "history/extinction/Breve10.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic11: file(relativePath: {eq: "history/extinction/Breve11.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic12: file(relativePath: {eq: "history/extinction/Breve12.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic13: file(relativePath: {eq: "history/extinction/Breve13.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    brevePic14: file(relativePath: {eq: "history/extinction/Breve14.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    receitaPic1: file(relativePath: {eq: "history/extinction/Receita1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    receitaPic2: file(relativePath: {eq: "history/extinction/Receita2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    receitaPic3: file(relativePath: {eq: "history/extinction/Receita3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    receitaPic4: file(relativePath: {eq: "history/extinction/Receita4.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    receitaPic5: file(relativePath: {eq: "history/extinction/Receita5.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    salePic1: file(relativePath: {eq: "history/sale/picture1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    salePic2: file(relativePath: {eq: "history/sale/picture2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    camiloPic1: file(relativePath: {eq: "history/notable_people/camilo.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    camiloPic2: file(relativePath: {eq: "history/notable_people/camilo2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    camiloPic3: file(relativePath: {eq: "history/notable_people/camilo3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    albertoPic4: file(relativePath: {eq: "history/notable_people/alberto1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    albertoPic5: file(relativePath: {eq: "history/notable_people/alberto2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    sebastiaoPic6: file(relativePath: {eq: "history/notable_people/sebastiao1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    bookPic1: file(relativePath: {eq: "history/book/book1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}}
  }
`;

export default HistoryPage;
