import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import russianFlag from '../../assets/img/svg/russian-flag.svg';
import usaFlag from '../../assets/img/svg/usa-flag.svg';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function ChangeLanguage() {
  const { i18n } = useTranslation();

  const languages: {
    name: string,
    flag: string,
  }[] = [
    {
      name: 'ru',
      flag: russianFlag,
    },
    {
      name: 'en',
      flag: usaFlag,
    },
  ];

  return (
    <div className={cx('change-language')}>
      {languages.map((language) => (
        <button
          type="submit"
          key={language.name}
          onClick={() => i18n.changeLanguage(language.name)}
          disabled={i18n.resolvedLanguage === language.name}
          className={cx('change-language-single')}
        >
          <img
            className={cx('change-language-single__icon')}
            alt="flag"
            src={language.flag}
          />
        </button>
      ))}
    </div>
  );
}

export default ChangeLanguage;
