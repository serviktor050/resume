export interface IProject {
  id: number,
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
  stack: {
  id: number,
    name: string,
  }[],
  period: {
  ru: string,
    en: string,
  },
}

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
