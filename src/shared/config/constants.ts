import github from '../../assets/img/svg/github.svg';
import telegram from '../../assets/img/svg/telegram.svg';
import facebook from '../../assets/img/svg/facebook.svg';
import antiageClinic from '../../assets/img/png/antiage-clinic.png';

export const SOCIAL_LINKS: {
  href: string,
  src: string,
  alt: string,
}[] = [
  {
    href: 'https://github.com/serviktor050',
    src: github,
    alt: 'github',
  },
  {
    href: 'https://t.me/ser_viktor',
    src: telegram,
    alt: 'telegram',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100001830878512',
    src: facebook,
    alt: 'facebook',
  },
];

export const TECHNOLOGIES: {
  name: string,
  rate: string,
}[] = [
  {
    name: 'Html5 & CSS3',
    rate: 'Advanced',
  },
  {
    name: 'JavaScript (ES6)',
    rate: 'Advanced',
  },
  {
    name: 'Git & Git Flow',
    rate: 'Advanced',
  },
  {
    name: 'TypeScript',
    rate: 'Junior',
  },
  {
    name: 'React',
    rate: 'Advanced',
  },
  {
    name: 'React Query',
    rate: 'Advanced',
  },
  {
    name: 'Redux (Thunk, Observable, Saga)',
    rate: 'Middle',
  },
  {
    name: 'React Hook Form',
    rate: 'Middle',
  },
  {
    name: 'Jest',
    rate: 'Middle',
  },
  {
    name: 'Architecture FSD',
    rate: 'Advanced',
  },
  {
    name: 'ООП',
    rate: 'Junior',
  },
];

export const PROJECTS: {
  name: string,
  description: string,
  responsibility: string,
  href: string,
  src: string,
  alt: string,
  stack: string[],
  period: string,
}[] = [
  {
    name: 'AntiAge Clinic',
    description: 'AntiAge Clinic – это медицинская онлайн-платформа для клиник и врачей частной правктики, позволяющая работать как со своей базой пациентов, так и получать новых клиентов онлайн. ',
    responsibility: 'Разработка пользовательского интерфейса медицинской информационной системы. Предоставление врачу возможности проведения приема пациентов. Работаю на данный момент на этом проекте',
    href: 'https://clinic.antiage-expert.com/schedule',
    src: antiageClinic,
    alt: 'AntiAge Clinic',
    stack: [
      'React',
      'Redux',
      'React Query',
      'React',
      'Redux',
      'React Query',
      'React',
      'Redux',
      'React Query',
    ],
    period: 'с 12.2021',
  },
];
