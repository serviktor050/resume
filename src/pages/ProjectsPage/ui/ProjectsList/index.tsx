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
    <div className={cx('project-list-container')}>
      <div className={cx('project-list-wrapper')}>
        {PROJECTS.map(({
          id,
          name,
          alt,
          src,
          description,
          responsibility,
          href,
          stack,
          period
        }) => (
          <div className={cx('project-item')} key={id}>
            <div className={cx('project-item-name')}>
              {name}
            </div>
            <div className={cx('project-item-description')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.about-project')}
              </div>
              <div className={cx('project-item-photo')}>
                <img className={cx('project-item-photo__img')} alt={alt} src={src} />
              </div>
              {useIsRussianLang() ? description.ru : description.en}
            </div>
            <div className={cx('project-item-what-did-i-do')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.responsibility')}
              </div>
              {useIsRussianLang() ? responsibility.ru : responsibility.en}
            </div>
            {href && (
              <div className={cx('project-item-href')}>
                <div className={cx('project-item-sub-title')}>
                  {t('projects-page.project-item.sub-title.link')}
                </div>
                <a href={href} target="_blank" rel="noreferrer">
                  {href}
                </a>
              </div>
            )}
            <div className={cx('project-item-stack')}>
              <div className={cx('project-item-sub-title')}>
                {t('projects-page.project-item.sub-title.stack')}
              </div>
              <div className={cx('project-item-stack-list')}>
                {stack.map((item) => (
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
              {useIsRussianLang() ? period.ru : period.en}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectsList;
