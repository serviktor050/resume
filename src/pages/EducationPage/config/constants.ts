import tstu from '../../../assets/img/png/tstu.png';
import netology from '../../../assets/img/png/netology.png';

export interface IEducation {
  src: string,
  alt: string,
  name: {
    ru: string,
    en: string,
  },
  description: {
    ru: string,
    en: string,
  },
  faculty: {
    ru: string,
    en: string,
  },
  period: {
    ru: string,
    en: string,
  },
  speciality: {
    ru: string,
    en: string,
  },
}

export const HIGHER_EDUCATION: IEducation = {
  src: tstu,
  alt: 'TSTU',
  name: {
    ru: 'ТГТУ',
    en: 'TSTU',
  },
  description: {
    ru: 'Тамбовский государственный технический университет, Тамбов',
    en: 'Tambov State Technical University, Tambov',
  },
  faculty: {
    ru: 'Факультет нанотехнологий',
    en: 'Faculty of Nanotechnology',
  },
  period: {
    ru: 'с 09.2007 по 06.2012',
    en: 'from 2007.09 to 2012.06',
  },
  speciality: {
    ru: 'Машины и аппараты пищевых производств',
    en: 'Food production machines and apparatuses',
  },
};

export const ADDITIONAL_EDUCATION: IEducation = {
  src: netology,
  alt: 'Netology',
  name: {
    ru: 'Нетология',
    en: 'Netology',
  },
  description: {
    ru: 'Подготовка и дополнительное обучение специалистов в сфере ИТ, Москва',
    en: 'Training and additional training of IT specialists, Moscow',
  },
  faculty: {
    ru: 'Программирование',
    en: 'Programming',
  },
  period: {
    ru: 'с 01.2019 по 12.2020',
    en: 'from 2019.01 to 2020.12',
  },
  speciality: {
    ru: 'Профессия Frontend-разработчик',
    en: 'Profession Frontend-developer',
  },
};
