export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: Continent;
  currency: string;
  languages: Language[];
  emoji: string;
  emojiU: string;
};

type Continent = {
  code: string;
  name: string;
  countries: Country[];
};

type Language = {
  code: string;
  name: string;
  native: string;
  rtl: number;
};
