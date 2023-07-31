import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './styles.module.css';
import ProjectsList from './ui/ProjectsList';

const cx = classNames.bind(styles);

function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{t('projects-page.title')}</div>
      <div className={cx('wrapper')}>
        <div className={cx('description')}>
          <div className={cx('description__item')}>{t('projects-page.description-1')}</div>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}
export default ProjectsPage;
