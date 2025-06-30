import type {
  TProjectItem,
  TSkillItem,
  TContactItem,
  TNavbarItem,
  TEducationItem,
} from "../types/types";

export const navbarList: TNavbarItem[] = [
  {
    id: 1,
    title: "view Portfolio",
    url: "/portfolio",
  },
  {
    id: 2,
    title: "view Resume",
    url: "/my-resume",
  },
];

export const projectList: TProjectItem[] = [
  {
    id: 1,
    name: "Beauty Shop",
    url: "https://github.com/sahar9776/BEAUTY-SHOP",
    imageUrl: "/images/beauty.jpg",
    libraries: "React, Bootstrap",
  },
  {
    id: 2,
    name: "Portfolio",
    url: "https://github.com/sahar9776/Portfolio",
    imageUrl: "/images/portfolio.jpg",
    libraries: "React, Tailwind",
  },
  {
    id: 3,
    name: "Car Fans",
    url: "https://github.com/sahar9776/Car-Fans",
    imageUrl: "/images/car.jpg",
    libraries: "Next, Tailwind",
  },
  {
    id: 4,
    name: "Netflix ",
    url: "https://github.com/sahar9776/Netflix",
    imageUrl: "/images/netflix.jpg",
    libraries: "Tailwind",
  },
  {
    id: 5,
    name: "Learn English",
    url: "https://github.com/sahar9776/LEARN-ENGLISH",
    imageUrl: "/images/learn-english.jpg",
    libraries: "React, Tailwind",
  },
  {
    id: 6,
    name: "Coffee Shop ",
    url: "https://github.com/sahar9776/Coffee-Shop",
    imageUrl: "/images/coffee.jpg",
    libraries: "Next, Tailwind",
  },
];

export const mySkills: TSkillItem[] = [
  {
    id: 1,
    name: "JavaScript",
    experience: 36,
  },
  {
    id: 2,
    name: "TypeScript",
    experience: 6,
  },
  {
    id: 3,
    name: "React",
    experience: 24,
  },
  {
    id: 4,
    name: "Next",
    experience: 10,
  },
  {
    id: 5,
    name: "Tailwind css",
    experience: 24,
  },
  {
    id: 6,
    name: "Bootstrap",
    experience: 36,
  },
];

export const contactList: TContactItem[] = [
  {
    id: 1,
    info: "+989910733897",
    name: "Telephone",
  },
  {
    id: 2,
    info: "sahar.samadi1376@gmail.com",
    name: "Email",
  },
  {
    id: 3,
    info: "https://github.com/sahar9776",
    name: "Github",
  },
];

export const educationList:TEducationItem[] = [
  {
    id: 1,
    year: 2022,
    educationsName: "Html Css, Javascript",
  },
  {
    id: 2,
    year: 2023,
    educationsName: "React, Bootstrap, Tailwind",
  },
  {
    id: 3,
    year: 2024,
    educationsName: "Typescript, Next",
  },
];
