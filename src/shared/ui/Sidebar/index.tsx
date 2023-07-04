import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import mainImage from '../../../assets/img/png/main-image.png';
import github from '../../../assets/img/svg/github.svg';
import telegram from '../../../assets/img/svg/telegram.svg';
import facebook from '../../../assets/img/svg/facebook.svg';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className={cx('sidebar')}>
      <div className={cx('sidebar-photo')}>
        <img className={cx('sidebar-photo__img')} alt="mainImage" src={mainImage} />
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
        <button type="button" className={cx('sidebar-links__icon')}>
          <a href="https://github.com/serviktor050" target="_blank" rel="noreferrer">
            <img
              alt="github"
              src={github}
            />
          </a>
        </button>
        <button type="button" className={cx('sidebar-links__icon')}>
          <a href="https://t.me/ser_viktor" target="_blank" rel="noreferrer">
            <img
              alt="telegram"
              src={telegram}
            />
          </a>
        </button>
        <button type="button" className={cx('sidebar-links__icon')}>
          <a href="https://www.facebook.com/profile.php?id=100001830878512" target="_blank" rel="noreferrer">
            <img
              alt="facebook"
              src={facebook}
            />
          </a>
        </button>
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
