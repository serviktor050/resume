import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { ChangeLanguage } from '../../../features';
import { Navigation } from '../index';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Header() {
  const { t } = useTranslation();

  return (
    <div className={cx('header')}>
      <div className={cx('header-title')}>
        <div className={cx('header-title__name')}>
          {t('header.title')}
        </div>
        <ChangeLanguage />
      </div>
      <Navigation />
    </div>
  );
}
export default Header;
