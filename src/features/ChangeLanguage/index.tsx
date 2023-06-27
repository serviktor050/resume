import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function ChangeLanguage() {
  const { i18n } = useTranslation();

  const languages: { ru: string; en: string } = {
    ru: 'Russian',
    en: 'English',
  };

  return (
    <div className={cx('change-language')}>
      {Object.keys(languages).map((language) => (
        <button
          type="submit"
          key={language}
          onClick={() => i18n.changeLanguage(language)}
          disabled={i18n.resolvedLanguage === language}
          className={cx('change-language__single')}
        >
          {language}
        </button>
      ))}
    </div>
  );
}

export default ChangeLanguage;
