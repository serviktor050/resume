import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{t('about-page.title')}</div>
      <div className={cx('wrapper')}>
        <div className={cx('description')}>
          <div className={cx('description__item', 'description__item__bold')}>{t('about-page.description-1')}</div>
          <div className={cx('description__item')}>{t('about-page.description-2')}</div>
          <div className={cx('description__item')}>{t('about-page.description-3')}</div>
        </div>

      </div>
    </div>
  );
}
export default AboutPage;
