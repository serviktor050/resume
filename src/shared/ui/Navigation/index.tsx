import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

interface NavigagationItemsType {
  id: number,
  href: string,
  title: string,
}

function Navigation() {
  const { t } = useTranslation();

  const navigationItems: NavigagationItemsType[] = [
    {
      id: 1,
      href: '/',
      title: t('navigation-items.about'),
    },
    {
      id: 2,
      href: 'education',
      title: t('navigation-items.education'),
    },
    {
      id: 3,
      href: 'projects',
      title: t('navigation-items.projects'),
    },
    {
      id: 4,
      href: 'companies',
      title: t('navigation-items.companies'),
    },
  ];

  return (
    <div className={cx('navigation')}>
      {navigationItems.map(({ id,href, title }) => (
        <NavLink className={({ isActive }) => (
          isActive ?
            cx('navigation-item__active') :
            cx('navigation-item')
        )}
        to={href}
        key={id}>
          <div className={cx('navigation-item__text')}>{title}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation;
