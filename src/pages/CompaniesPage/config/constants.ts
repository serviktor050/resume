import flycode from '../../../assets/img/png/flycode.png';
import { ICompany } from '../../../shared/config/interfaces';

export const COMPANIES: ICompany[] = [
  {
    id: 1,
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
