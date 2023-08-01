import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../config/constants';
import useIsRussianLang from '../../../../shared/lib/useIsRussianLang';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function ProjectsList() {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        {PROJECTS.map((project) => (
          <div className={cx('project-item')} key={project.id}>
            <div className={cx('project-item-name')}>
              {project.name}
            </div>
            <div className={cx('project-item-description')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.about-project')}
              </div>
              <div className={cx('project-item-photo')}>
                <img className={cx('project-item-photo__img')} alt={project.alt} src={project.src} />
              </div>
              {useIsRussianLang() ? project.description.ru : project.description.en}
            </div>
            <div className={cx('project-item-what-did-i-do')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.responsibility')}
              </div>
              {useIsRussianLang() ? project.responsibility.ru : project.responsibility.en}
            </div>
            {project.href && (
              <div className={cx('project-item-href')}>
                <div className={cx('project-item-sub-title')}>
                  {t('projects-page.project-item.sub-title.link')}
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.href}
                </a>
              </div>
            )}
            <div className={cx('project-item-stack')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.stack')}
              </div>
              <div className={cx('project-item-stack-list')}>
                {project.stack.map((item) => (
                  <div className={cx('project-item-stack-list__item')} key={item.id}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={cx('project-item-stack')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.period')}
              </div>
              {useIsRussianLang() ? project.period.ru : project.period.en}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectsList;
