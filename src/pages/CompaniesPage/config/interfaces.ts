export interface ICompany {
  id: number,
  name: string,
  description: {
    ru: string,
    en: string,
  },
  href: string,
  src: string,
  alt: string,
  period: {
    ru: string,
    en: string,
  },
}
