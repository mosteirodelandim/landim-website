import React from 'react';
// TODO see if I need to import dedicated sass file
// import '../assets/sass/layout/_notfound.scss';
import Lottie from 'lottie-react-web';
import { useTranslation } from 'react-i18next';
import dogWagging from '../assets/lottie/dog_wagging';

import config from '../../config';

function randomDog() {
  const dogArray = config.houseDogs;

  const rand = Math.floor(Math.random() * dogArray.length);
  return dogArray[rand];
}

function IndexPage() {
  const { t } = useTranslation();

  return (
    <div id="not-found-page">
      <div className="error-wall load-error">
        <div className="error-container">
          <div className="h1_notfound">{t('notFound:heading')}</div>
          <div className="h3_notfound">{t('notFound:subHeading')}</div>
          <div className="p_notfound">{t('notFound:subSubHeading1')} <a onClick={() => history.back()}>{t('notFound:subSubHeadingLink')}</a> {t('notFound:subSubHeading2')} {randomDog()}{t('notFound:subSubHeading3')}
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
}

export default IndexPage;
