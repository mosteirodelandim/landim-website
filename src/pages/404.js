import React from 'react';
import '../assets/sass/pages/_notfound.scss';
import Lottie from 'lottie-react-web';
import { useTranslation } from 'react-i18next';
import dogWalking from '../assets/images/lottie/doggie_walking';
// eslint-disable-next-line no-unused-vars
import i18next from '../i18n/i18n';

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
            animationData: dogWalking,
          }}
          width="35%"
          height="35%"
        />
      </div>
    </div>
  );
}

export default IndexPage;
