import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { TECHNOLOGIES } from '../../config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Technologies() {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{t('about-page.technologies.title')}</div>
      <div className={cx('wrapper')}>
        {TECHNOLOGIES.map((technology) => (
          <div className={cx('technology-item')} key={technology.id}>
            <div className={cx('technology-item__name')}>
              <span>{technology.name}</span>
              <span>{technology.rate}</span>
            </div>
            <div className={cx('technology-item__rate')}>
              <div className={cx(`technology-item__rate__${technology.rate}`)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Technologies;
