import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import Technologies from './ui/Technologies';
import mainImage from '../../assets/img/png/main-image.png';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{t('about-page.title')}</div>
      <div className={cx('wrapper')}>
        <div className={cx('description')}>
          <div className={cx('sub-title')}>{t('about-page.description-1')}</div>
          <div className={cx('description__item-with-photo')}>
            <div className={cx('description__item-with-photo__text')}>
              {t('about-page.description-2')}
            </div>
            <div className={cx('description-photo')}>
              <img className={cx('description-photo__img')} alt="mainImage" src={mainImage} />
            </div>
          </div>
          <div className={cx('description__item')}>{t('about-page.description-3')}</div>
        </div>
        <Technologies />
      </div>
    </div>
  );
}
export default AboutPage;
