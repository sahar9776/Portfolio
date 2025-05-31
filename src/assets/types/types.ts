export type TProjectItem = {
  id: number;
  imageUrl: string;
  videoUrl: string;
  name: string;
  url: string;
  SPALibrary?: "React" | "Next";
  CSSLibrary?: "tailwind" | "bootstrap";
};

export type TSkillItem = {
  id: number;
  name: string;
  size: number;
  description: string;
};

export type TContactItem = {
  id: number;
  info: string;
  abbreviation: string;
};

export type TEducationCourseItem = {
  id: number;
  name: string;
  url: string;
};

export type TNavbarItem = {
  id: number;
  title: string;
  url: string;
};
