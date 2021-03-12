import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tran Quang Huy | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tran Quang Huy',
  subtitle: 'Computer Engineering Student at INSA Lyon',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Vietnamese student in the third year of the Computer Science department at INSA Lyon. Passionate about math and computer science since I was a kid, I like to work and research on complicated algorithms. I have always been aware of the importance of problem solving skills.',
  paragraphTwo: 'As for me, being a computer science student at INSA Lyon, I have acquired solid knowledge in the scientific field. I am a disciplined, rigorous, serious person, these are important and indispensable qualities to become a future engineer. I am always aware of the need to improve myself. Moreover, thanks to my extracurricular activities, I work well in a team and I know how to organize my time. I am also sociable and dynamic.',
  paragraphThree: 'I would like to do an internship in the computer field in France for 3 months this summer. I expect that being an intern in your company would give me new professional experiences in the computer field. I also hope that with my knowledge and experience, I will be of value to your company.',
  resume: 'https://drive.google.com/file/d/1MuhgsJ3CD1jXBMW1Y5SoEVdV2XLaUuc7/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '1.png',
    title: 'Game of life',
    info: 'Visualization application the Game of life',
    info2: 'Web technology: HTML5 CSS JS',
    url: 'https://gameoflife-7d859.firebaseapp.com/',
    repo: 'https://github.com/quanghuynt14/gameoflife', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TourScanner.png',
    title: 'Voyage',
    info: 'Object oriented programming C++  Inheritance - Polymorphism',
    info2: 'Creation of tours from a catalog of trips. Manipulatate .csv file.',
    url: 'https://repl.it/@QuangHuyHuy11/TourScanner',
    repo: 'https://github.com/quanghuynt14/TourScanner', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'analog.png',
    title: 'Apache Analog Analyzer',
    info: 'Apache reports a lot of data about your web site, your server and your users, but the trick is to extract this data from the logs. Apache log analysis converts the raw text produced by Apache into fields that can be indexed, searched and analyzed.',
    info2: 'This makes it easier to monitor Apache, analyze specific problems or examine more general trends.',
    url: 'https://repl.it/@QuangHuyHuy11/Apache-Analog-Analyzer',
    repo: 'https://github.com/quanghuynt14/Apache-Analog-Analyzer', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'quanghuynt14@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/quanghuynt14/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/quanghuynt14',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
