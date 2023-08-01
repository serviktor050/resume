import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import useIsRussianLang from '../../../../shared/lib/useIsRussianLang';
import { IEducation } from '../../config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

interface EducationCardProps {
  education: IEducation
}

function EducationCard({ education }: EducationCardProps) {
  const { t } = useTranslation();
  const { src, alt, name, description, faculty, period, speciality } = education;

  return (
    <div className={cx('education-card')}>
      <div className={cx('education-card-name')}>
        {useIsRussianLang() ? name.ru : name.en}
      </div>
      <div className={cx('education-card-container')}>
        <div className={cx('education-card-photo')}>
          <img className={cx('education-card-photo__img')} alt={alt} src={src} />
        </div>
        <div className={cx('education-card-info')}>
          <div className={cx('education-card-info__item')}>
            <div className={cx('education-card-info__sub-title')}>
              {t('education-page.card.sub-title.description')}
            </div>
            {useIsRussianLang() ? description.ru : description.en}
          </div>
          <div className={cx('education-card-info__item')}>
            <div className={cx('education-card-info__sub-title')}>
              {t('education-page.card.sub-title.faculty')}
            </div>
            {useIsRussianLang() ? faculty.ru : faculty.en}
          </div>
          <div className={cx('education-card-info__item')}>
            <div className={cx('education-card-info__sub-title')}>
              {t('education-page.card.sub-title.period')}
            </div>
            {useIsRussianLang() ? period.ru : period.en}
          </div>
          <div className={cx('education-card-info__item')}>
            <div className={cx('education-card-info__sub-title')}>
              {t('education-page.card.sub-title.speciality')}
            </div>
            {useIsRussianLang() ? speciality.ru : speciality.en}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
