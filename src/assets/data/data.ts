import type {
  TProjectItem,
  TSkillItem,
  TContactItem,
  TEducationCourseItem,
  TNavbarItem,
} from "../types/types";

export const navbarList: TNavbarItem[] = [
  {
    id: 1,
    title: "view Portfolio",
    url:'/portfolio'
  },
  {
    id: 2,
    title: "view Resume",
    url:'/my-resume'
  },
];

export const projectList: TProjectItem[] = [
  {
    id: 1,
    name: "beauty shop",
    url: "https://github.com/sahar9776/BEAUTY-SHOP",
    imageUrl: "/public/images/beauty.jpg",
    videoUrl: "/public/videos/beauty.mp4",
    SPALibrary: "React",
    CSSLibrary: "bootstrap",
  },
  {
    id: 2,
    name: "car fans",
    url: "https://github.com/sahar9776/Car-Fans",
    imageUrl: "/public/images/car.jpg",
    videoUrl: "/public/videos/car.mp4",
    SPALibrary: "Next",
    CSSLibrary: "tailwind",
  },
  {
    id: 3,
    name: "different shop",
    url: "https://github.com/sahar9776/DIFFERENT-SHOP",
    imageUrl: "/public/images/different.jpg",
    videoUrl: "/public/videos/different.mp4",
    SPALibrary: "React",
    CSSLibrary: "tailwind",
  },
  {
    id: 4,
    name: "netflix ",
    url: "https://github.com/sahar9776/Netflix",
    imageUrl: "/public/images/netflix.jpg",
    videoUrl: "/public/videos/netflix.mp4",
  },
  {
    id: 5,
    name: "learn english",
    url: "https://github.com/sahar9776/LEARN-ENGLISH",
    imageUrl: "/public/images/learn-english.jpg",
    videoUrl: "/public/videos/learn-english.mp4",
    SPALibrary: "React",
    CSSLibrary: "tailwind",
  },
  {
    id: 6,
    name: "coffee shop ",
    url: "https://github.com/sahar9776/Coffee-Shop",
    imageUrl: "/public/images/coffee.jpg",
    videoUrl: "/public/videos/coffee.mp4",
    SPALibrary: "Next",
    CSSLibrary: "tailwind",
  },
  {
    id: 7,
    name: "tic tac toe",
    videoUrl: "/public/videos/",
    url: "",
    imageUrl: "/public/images/tic-tac-toe.jpg",
  },
];

export const mySkills: TSkillItem[] = [
  {
    id: 1,
    name: "javaScript",
    size: 80,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    name: "typeScript",
    size: 85,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    name: "react",
    size: 75,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    name: "next",
    size: 80,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 5,
    name: "tailwind css",
    size: 75,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 6,
    name: "bootstrap",
    size: 70,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export const contactList: TContactItem[] = [
  {
    id: 1,
    info: "Kermanshah, Iran",
    abbreviation: "A",
  },
  {
    id: 2,
    info: "+989910733897",
    abbreviation: "T",
  },
  {
    id: 3,
    info: "sahar.samadi1376@gmail.com",
    abbreviation: "E",
  },
  {
    id: 4,
    info: "https://github.com/sahar9776",
    abbreviation: "G",
  },
];

export const educationList: TEducationCourseItem[] = [
  {
    id: 1,
    name: "JavaScript Mastery Course",
    url: "http://www.neonlearn.ir/course/master-js-toturial",
  },
  {
    id: 2,
    name: "React and Typescript Course",
    url: "https://frontcast.ir/product/react-ts/",
  },
  {
    id: 3,
    name: "Next.js – Comprehensive Course",
    url: "https://frontcast.ir/product/nextjs/",
  },
  {
    id: 4,
    name: "Bootstap Course",
    url: "https://www.youtube.com/watch?v=NT12teUwfck",
  },
];
