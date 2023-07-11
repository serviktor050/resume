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
        <div className={cx('description')}>{t('about-page.description')}</div>
      </div>
    </div>
  );
}
export default AboutPage;
