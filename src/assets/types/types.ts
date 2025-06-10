
export type TProjectItem = {
  id: number;
  imageUrl: string;
  name: string;
  url: string;
  libraries?: string;
};

export type TSkillItem = {
  id: number;
  name: string;
  experience: number;
};

export type TContactItem = {
  id: number;
  info: string;
  abbreviation: string;
};

export type TNavbarItem = {
  id: number;
  title: string;
  url: string;
};
