import antiageClinic from '../../../assets/img/png/antiage-clinic.png';

export const PROJECTS: {
  name: string,
  description: {
    ru: string,
    en: string,
  },
  responsibility: {
    ru: string,
    en: string,
  },
  href: string,
  src: string,
  alt: string,
  stack: string[],
  period: {
    ru: string,
    en: string,
  },
}[] = [
  {
    name: 'AntiAge Clinic',
    description: {
      ru: 'AntiAge Clinic – это медицинская онлайн-платформа для клиник и врачей частной практики, позволяющая работать как со своей базой пациентов, так и получать новых клиентов онлайн.',
      en: 'AntiAge Clinic is an online medical platform for clinics and doctors of private practice, allowing you to work both with your patient base and get new clients online.',
    },
    responsibility: {
      ru: 'Разработка пользовательского интерфейса для администратора клиники или врача частной практики. Разработка CRUD списков врачей и пациентов, функционала графика работы врача: правил рабочих дней, а также отпусков, отгулов и больничных. Проектирование и реализация функционала видеочатов и консилиумов между врачами и пациентами. Верстка протоколов приема, а также заполненного календаря назначений препаратов для их последующего вывода в PDF. Создание конструктора шаблонов осмотра для врача, возможность подгрузки определенного шаблона в консультацию с привязкой к услуге.',
      en: 'Development of a user interface for a clinic administrator or a private practitioner. Development of CRUD lists of doctors and patients, the functionality of the doctor\'s work schedule: rules of working days, as well as vacations, days off and sick days. Designing and implementing the functionality of video chats and consultations between doctors and patients. Layout of reception protocols, as well as a completed calendar of prescriptions of drugs for their subsequent output in PDF. Creating a designer of examination templates for a doctor, the ability to upload a specific template to a consultation with a link to a service.',
    },
    href: 'https://clinic.antiage-expert.com/schedule',
    src: antiageClinic,
    alt: 'AntiAge Clinic',
    stack: [
      'React 18.2.0',
      'React router dom',
      'React hook form',
      'React i18next',
      'React Query',
      'Redux',
      'Redux thunk',
      'Antd',
      'Axios',
      'Classnames',
      'HTML react parser',
      'Prop Types',
      'Eslint',
    ],
    period: {
      ru: 'с 12.2021',
      en: 'from 2021.12',
    },
  },
];
