import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { CompaniesList } from './ui';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function CompaniesPage() {
  const { t } = useTranslation();

  return(
    <div className={cx('container')}>
      <div className={cx('title')}>{t('companies-page.title')}</div>
      <div className={cx('wrapper')}>
        <div className={cx('description')}>
          <div className={cx('description__item')}>{t('companies-page.description-1')}</div>
        </div>
        <CompaniesList />
      </div>
    </div>
  );
}
export default CompaniesPage;
