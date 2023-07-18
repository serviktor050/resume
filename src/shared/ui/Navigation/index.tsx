import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Navigation() {
  const { t } = useTranslation();

  const navigationItems: {
    href: string,
    title: string,
  }[] = [
    {
      href: '/',
      title: t('navigation-items.about'),
    },
    {
      href: 'education',
      title: t('navigation-items.education'),
    },
    {
      href: 'projects',
      title: t('navigation-items.projects'),
    },
  ];

  return (
    <div className={cx('navigation')}>
      {navigationItems.map(({ href, title }) => (
        <NavLink className={({ isActive }) => (isActive ? cx('navigation-item__active') : cx('navigation-item'))} to={href}>
          <div className={cx('navigation-item__text')}>{title}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation;
