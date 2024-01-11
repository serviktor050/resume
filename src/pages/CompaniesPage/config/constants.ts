import flycode from '../../../assets/img/png/flycode.png';
import spider from '../../../assets/img/png/spider.png';
import { ICompany } from './interfaces';

export const COMPANIES: ICompany[] = [
  {
    id: 1,
    name: 'Spider Group',
    description: {
      ru: 'Разработка мобильных приложений, веб-платформ, серверной логики, а также проектов с определяющими наш век' +
        'технологиями, такими как искусственный интеллект, дополненная реальность и интернет вещей.',
      // eslint-disable-next-line max-len
      en: 'development of mobile applications, web platforms, server logic, as well as projects with technologies defining' +
        'our age, such as artificial intelligence, augmented reality and the internet of things.',
    },
    href: 'https://msk.spider.ru/',
    src: spider,
    alt: 'Spider Group',
    period: {
      ru: 'с 12.2023',
      en: 'from 2023.12',
    },
  },
  {
    id: 2,
    name: 'FlyCode',
    description: {
      ru: 'Разработка веб-сервисов и приложений. Сайты, корпоративные системы, личные кабинеты и дашборды под ключ.',
      en: 'Development of web services and applications. Websites, corporate systems, personal accounts and turn-key dashboards.',
    },
    href: 'https://fly-code.com/',
    src: flycode,
    alt: 'FlyCode',
    period: {
      ru: 'с 05.2021 по 12.2023',
      en: 'from 2021.05 to 2023.12',
    },
  }
];
