import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import mainImage from '../../../assets/img/png/main-image.png';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className={cx('sidebar')}>
      <div className={cx('sidebar-photo')}>
        <img className={cx('sidebar-photo__img')} alt="" src={mainImage} />
      </div>
      <div className={cx('sidebar-title')}>
        <div className={cx('sidebar-title__name')}>
          {t('sidebar.title')}
        </div>
        <div className={cx('sidebar-title__profession')}>
          {t('sidebar.profession')}
        </div>
      </div>
      <div className={cx('sidebar-description')}>
        Описание
      </div>
      <div className={cx('sidebar-links')}>
        Ссылки
      </div>
      <button
        type="submit"
        className={cx('sidebar-send-btn')}
      >
        {t('sidebar.send-email.btn')}
      </button>
    </div>
  );
}
export default Sidebar;
