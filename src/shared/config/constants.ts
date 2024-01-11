import { ISocialLink } from './interfaces';
import github from '../../assets/img/svg/github.svg';
import telegram from '../../assets/img/svg/telegram.svg';
import facebook from '../../assets/img/svg/facebook.svg';

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    id: 1,
    href: 'https://github.com/serviktor050',
    src: github,
    alt: 'github',
  },
  {
    id: 2,
    href: 'https://t.me/ser_viktor',
    src: telegram,
    alt: 'telegram',
  },
  {
    id: 3,
    href: 'https://www.facebook.com/profile.php?id=100001830878512',
    src: facebook,
    alt: 'facebook',
  },
];

export const EMAIL: string = 'mr.s-gagulin@yandex.ru';
