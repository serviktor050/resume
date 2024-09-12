import unknowCover from '../../../assets/img/png/unknow-cover.png';
import travelClass from '../../../assets/img/png/travel-class.png';
import kler from '../../../assets/img/png/kler.png';
import antiageClinic from '../../../assets/img/png/antiage-clinic.png';
import lombardL1 from '../../../assets/img/png/lombard-l1.png';

import { IProject } from './interfaces';

export const PROJECTS: IProject[] = [
  {
    id: 1,
    name: 'Рестомаркет Студенец / Кофейня Habit',
    description: {
      ru: 'Рестомаркет Студенец / Кофейня Habit - это внутренний проект компании FlyCode, ' +
        'направленный на создание сайта меню для кафе и кофеен, с возможностью QR-оплаты заказа.',
      en: 'Studenets Restomarket / Habit Coffee Shop is an internal project of FlyCode aimed ' +
        'at creating a menu site for cafes and coffee shops, with the possibility of QR-payment of the order.',
    },
    responsibility: {
      ru: 'Разработка пользовательского интерфейса приложения. Настройка роутинга. ' +
        'Разработка CRUD функционала оформления заказа.',
      en: 'Development of the user interface of the application. Setting up routing. ' +
        'Development of CRUD functionality for ordering.',
    },
    href: '',
    src: unknowCover,
    alt: 'Studenets Restomarket / Habit Coffee Shop',
    stack: [
      {
        id: 1,
        name: 'React 17.0.2',
      },
      {
        id: 2,
        name: 'React router dom',
      },
      {
        id: 3,
        name: 'Redux',
      },
      {
        id: 4,
        name: 'Redux observable',
      },
      {
        id: 5,
        name: 'Redux thunk',
      },
      {
        id: 6,
        name: 'RxJS',
      },
      {
        id: 7,
        name: 'Material UI',
      },
      {
        id: 8,
        name: 'Axios',
      },
    ],
    period: {
      ru: 'с 06.2021 по 12.2021',
      en: 'from 2021.06 to 2021.12',
    },
  },
  {
    id: 2,
    name: 'Travel Class',
    description: {
      ru: 'Travel Class - это международная платформа, предназначенная для преподавателей, ' +
        'студентов и их родителей, чтобы упростить планирование и бронирование языковых и учебных курсов.',
      en: 'Travel Class is an international platform designed for teachers, ' +
        'students and their parents to simplify the planning and booking of language and study courses.',
    },
    responsibility: {
      ru: 'Работа в тесном контакте с PHP-разработчиком. Правка дизайна существующих страниц, ' +
        'реализаций новых пожеланий клиента на сайте.',
      en: 'Working closely with a PHP developer. Edit the design of existing pages, ' +
        'implementations of new customer wishes on the site.',
    },
    href: 'https://www.travelclass.org/',
    src: travelClass,
    alt: 'Travel Class',
    stack: [
      {
        id: 1,
        name: 'PHP',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
      {
        id: 4,
        name: 'Jquery',
      },
    ],
    period: {
      ru: 'с 06.2021 по 12.2021',
      en: 'from 2021.06 to 2021.12',
    },
  },
  {
    id: 3,
    name: 'Kler',
    description: {
      ru: 'Kler – это сайт магазина современной и элегантной мебели для гостиных, спален и столовых комнат.',
      en: 'Kler is a website of a store of modern and elegant furniture for living rooms, bedrooms and dining rooms.',
    },
    responsibility: {
      ru: 'Работа в тесном контакте с PHP-разработчиком. Правка дизайна существующих страниц, ' +
        'реализаций новых пожеланий клиента на сайте.',
      en: 'Working closely with a PHP developer. Edit the design of existing pages, ' +
        'implementations of new customer wishes on the site.',
    },
    href: 'https://www.kler.eu/en',
    src: kler,
    alt: 'Kler',
    stack: [
      {
        id: 1,
        name: 'PHP',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
      {
        id: 4,
        name: 'Jquery',
      },
    ],
    period: {
      ru: 'с 06.2021 по 12.2021',
      en: 'from 2021.06 to 2021.12',
    },
  },
  {
    id: 4,
    name: 'StreamPlatform',
    description: {
      ru: 'StreamPlatform – это внутренний проект компании FlyCode, позволяющий пользователю ' +
        'проводить вебинары и видеотрансляции для своих подписчиков, а так же самому просмативать ' +
        'стримы других пользователей и подписываться на их обновления.',
      en: 'StreamPlatform is an internal project of FlyCode company that allows the user to ' +
        'conduct webinars and video broadcasts for his subscribers, as well as to watch other ' +
        'users\' streams and subscribe to their updates.',
    },
    responsibility: {
      ru: 'Разработка пользовательского интерфейса приложения. Разработка CRUD функционала ' +
        'подписок и подписчиков, организации групповых чатов и стримов. Участие в разработке личного кабинета пользователя.',
      en: 'Development of the user interface of the application. Development of CRUD functionality ' +
        'for subscriptions and subscribers, organization of group chats and streams. ' +
        'Participation in the development of the user\'s personal account.',
    },
    href: '',
    src: unknowCover,
    alt: 'Stream Platform',
    stack: [
      {
        id: 1,
        name: 'React 17.2.0',
      },
      {
        id: 2,
        name: 'React router dom',
      },
      {
        id: 3,
        name: 'React i18next',
      },
      {
        id: 4,
        name: 'React Query',
      },
      {
        id: 5,
        name: 'Next',
      },
      {
        id: 6,
        name: 'TypeScript',
      },
      {
        id: 7,
        name: 'Antd',
      },
      {
        id: 8,
        name: 'Axios',
      },
      {
        id: 9,
        name: 'Eslint',
      },
      {
        id: 10,
        name: 'Jest',
      },
    ],
    period: {
      ru: 'с 08.2021 по 12.2021',
      en: 'from 2021.08 to 2021.12',
    },
  },
  {
    id: 5,
    name: 'AntiAge Clinic',
    description: {
      ru: 'AntiAge Clinic – это медицинская онлайн-платформа для клиник и врачей частной практики, ' +
        'позволяющая работать как со своей базой пациентов, так и получать новых клиентов онлайн.',
      en: 'AntiAge Clinic is an online medical platform for clinics and doctors of private practice, ' +
        'allowing you to work both with your patient base and get new clients online.',
    },
    responsibility: {
      ru: 'Разработка пользовательского интерфейса для администратора клиники или врача частной практики. ' +
        'Разработка CRUD списков врачей и пациентов, функционала графика работы врача: правил рабочих дней, ' +
        'а также отпусков, отгулов и больничных. Проектирование и реализация функционала видеочатов и ' +
        'консилиумов между врачами и пациентами. Верстка протоколов приема, а также заполненного календаря ' +
        'назначений препаратов для их последующего вывода в PDF. Создание конструктора шаблонов осмотра ' +
        'для врача, возможность подгрузки определенного шаблона в консультацию с привязкой к услуге.',
      en: 'Development of a user interface for a clinic administrator or a private practitioner. ' +
        'Development of CRUD lists of doctors and patients, the functionality of the doctor\'s work schedule: ' +
        'rules of working days, as well as vacations, days off and sick days. Designing and implementing ' +
        'the functionality of video chats and consultations between doctors and patients. ' +
        'Layout of reception protocols, as well as a completed calendar of prescriptions of drugs for ' +
        'their subsequent output in PDF. Creating a designer of examination templates for a doctor, ' +
        'the ability to upload a specific template to a consultation with a link to a service.',
    },
    href: 'https://clinic.antiage-expert.com/schedule',
    src: antiageClinic,
    alt: 'AntiAge Clinic',
    stack: [
      {
        id: 1,
        name: 'React 18.2.0',
      },
      {
        id: 2,
        name: 'React router dom',
      },
      {
        id: 3,
        name: 'React hook form',
      },
      {
        id: 4,
        name: 'React i18next',
      },
      {
        id: 5,
        name: 'React Query',
      },
      {
        id: 6,
        name: 'Redux',
      },
      {
        id: 7,
        name: 'Redux thunk',
      },
      {
        id: 8,
        name: 'Antd',
      },
      {
        id: 9,
        name: 'Axios',
      },
      {
        id: 10,
        name: 'Classnames',
      },
      {
        id: 11,
        name: 'HTML react parser',
      },
      {
        id: 12,
        name: 'Prop Types',
      },
      {
        id: 13,
        name: 'Eslint',
      },
      {
        id: 14,
        name: 'Jest',
      },
    ],
    period: {
      ru: 'с 12.2021 по 12.2023',
      en: 'from 2021.12 to 2023.12',
    },
  },
  {
    id: 6,
    name: 'Ломбард - Л1',
    description: {
      ru: 'ООО "Ломбард - Л1" - финансовая организация, предоставляющая займы физическим лицам ' +
        'под залог ювелирных изделий из драгоценных металлов, изделий с драгоценными камнями и электроники.',
      en: 'Lombard - L1 is a financial organization that provides loans to individuals secured ' +
        'by jewelry made of precious metals, jewelry with precious stones and electronics.',
    },
    responsibility: {
      ru: 'Разработка приложения бота для мессенджера телеграм, позволяющего пользователю напрямую ' +
        'отправить заявку на оценку изделия, не используя сайт.',
      en: 'Development of a bot application for the telegram messenger, ' +
        'which allows the user to directly send a request for product evaluation without using the website.',
    },
    href: 'https://lombard-l1.ru/',
    src: lombardL1,
    alt: 'Lombard - L1',
    stack: [
      {
        id: 1,
        name: 'React 18.2.0',
      },
      {
        id: 2,
        name: 'React router dom',
      },
      {
        id: 3,
        name: 'React hook form',
      },
      {
        id: 4,
        name: 'Material UI',
      },
      {
        id: 5,
        name: 'Axios',
      },
      {
        id: 6,
        name: 'Classnames',
      },
      {
        id: 7,
        name: 'Eslint',
      },
    ],
    period: {
      ru: 'с 01.2024 по 02.2024',
      en: 'from 2021.01 to 2023.02',
    },
  },
];
