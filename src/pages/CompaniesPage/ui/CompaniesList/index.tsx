import React from 'react';
import classNames from 'classnames/bind';
import { COMPANIES } from '../../config/constants';
import { useTranslation } from 'react-i18next';
import useIsRussianLang from '../../../../shared/lib/useIsRussianLang';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function CompaniesList() {
  const { t } = useTranslation();

  return(
    <div className={cx('company-list-container')}>
      <div className={cx('company-list-wrapper')}>
        {COMPANIES.map(({
          id,
          name,
          description,
          href,
          src,
          alt,
          period,
        }) => (
          <div className={cx('company-item')} key={id}>
            <div className={cx('company-item-name')}>
              {name}
            </div>
            <div className={cx('company-item-description')}>
              <div className={cx('company-item-sub-title')}>
                {t('companies-page.company-item.sub-title.about-company')}
              </div>
              <div className={cx('company-item-photo')}>
                <img className={cx('company-item-photo__img')} alt={alt} src={src} />
              </div>
              {useIsRussianLang() ? description.ru : description.en}
            </div>
            <div className={cx('company-item-href')}>
              <div className={cx('company-item-sub-title')}>
                {t('companies-page.company-item.sub-title.link')}
              </div>
              <a href={href} target="_blank" rel="noreferrer">
                {href}
              </a>
            </div>
            <div className={cx('company-item-period')}>
              <div className={cx('company-item-sub-title')}>
                {t('companies-page.company-item.sub-title.period')}
              </div>
              {useIsRussianLang() ? period.ru : period.en}
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
}
export default CompaniesList;
