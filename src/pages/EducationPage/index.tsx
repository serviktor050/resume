import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import EducationCard from './ui/EducationCard';
import Slider from './ui/Slider';
import { HIGHER_EDUCATION, ADDITIONAL_EDUCATION } from './config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function EducationPage() {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{t('education-page.title')}</div>
      <div className={cx('wrapper')}>
        <div className={cx('sub-title')}>{t('education-page.sub-title.higher-education')}</div>
        <EducationCard education={HIGHER_EDUCATION} />
        <div className={cx('sub-title')}>{t('education-page.sub-title.additional-education')}</div>
        <EducationCard education={ADDITIONAL_EDUCATION} />
        <div className={cx('sub-title')}>{t('education-page.sub-title.certificates')}</div>
        <Slider />
      </div>
    </div>
  );
}
export default EducationPage;
