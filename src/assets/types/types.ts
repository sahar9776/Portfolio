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
  name: string;
};

export type TNavbarItem = {
  id: number;
  title: string;
  url: string;
};

export type TEducationItem = {
  id: number;
  year: number;
  educationsName: string;
};
