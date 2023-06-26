import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Header() {
  const { t, i18n } = useTranslation();

  const lngs = {
    ru: 'Russian',
    en: 'English',
  };

  return (
    <div className={cx('header')}>
      <div className={cx('header-title')}>{t('header-title')}</div>
      <div className={cx('header-navigation')} />
      <div className={cx('header-translate')} />
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lng}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Header;
