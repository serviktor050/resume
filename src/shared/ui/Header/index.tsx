import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { ChangeLanguage } from '../../../features';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Header() {
  const { t } = useTranslation();

  return (
    <div className={cx('header')}>
      <div className={cx('header-title')}>{t('header-title')}</div>
      <div className={cx('header-navigation')} />
      <div className={cx('header-translate')} />
      <ChangeLanguage />
    </div>
  );
}
export default Header;
