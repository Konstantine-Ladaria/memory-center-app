// src/app/core/constants/language.constants.ts

export interface Language {
  code: string;
  label: string;
  shorthand: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'ka', label: 'ქართული', shorthand: 'KA', flag: 'https://flagcdn.com/w80/ge.png' },
  { code: 'en', label: 'English', shorthand: 'EN', flag: 'https://flagcdn.com/w80/gb.png' },
  { code: 'ru', label: 'Русский', shorthand: 'RU', flag: 'https://flagcdn.com/w80/ru.png' },
  { code: 'az', label: 'Azərbaycan', shorthand: 'AZ', flag: 'https://flagcdn.com/w80/az.png' },
  { code: 'hy', label: 'Հայերեն', shorthand: 'HY', flag: 'https://flagcdn.com/w80/am.png' },
];

export const DEFAULT_LANGUAGE = 'ka';
