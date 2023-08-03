import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS } from '../../config/constants';
import mainImage from '../../../assets/img/png/main-image.png';

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
        {t('sidebar.description')}
      </div>
      <div className={cx('sidebar-links')}>
        {SOCIAL_LINKS.map(({ id, href, src, alt }) => (
          <button type="button" className={cx('sidebar-links__icon')} key={id}>
            <a href={href} target="_blank" rel="noreferrer">
              <img
                alt={alt}
                src={src}
              />
            </a>
          </button>
        ))}
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
