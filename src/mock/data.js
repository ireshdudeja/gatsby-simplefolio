import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Iresh Dudeja | iOS Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Iresh Dudeja.',
  subtitle: 'iOS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_bw.jpg',
  paragraphOne:
    'Currently, I am doing Masters in Computer Science in Technical University of Ilmenau, Germany. Along with that I am also working part-time as an iOS developer in a company named "4fo Internet Technologies AG" in Ilmenau city.',
  paragraphTwo:
    'I have a passion for mobile app development and love to create apps for iOS devices.',
  paragraphThree: 'Lets build an app for your business.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'query_visualization.jpg',
    title: 'Query Visualization',
    info:
      'Query Visualization Project aims to provide the live query statistics in visual appealing way so that by analyzing these real time statistics, the Database Administrator (DBA) can troubleshoot the poorly performing query. Not only the DBA, but also the developers of the “Stream Processing Engine” can use this project to monitor their algorithms.',
    info2: '',
    url: '',
    repo: 'https://github.com/ireshdudeja/query_visualization', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'assistu.jpg',
    title: 'AssistU',
    info:
      'AssistU is a pre-arrival management application for the international students. Students need to upload their Visa and Flight details in the app for the approval. After the approval, students can apply for the Bus/Train and accommodation services. Potential students can view all relevant information about the college, its programs, fees and application process. Furthermore, this application will help the students access several discounts while booking air-tickets, buying Forex, insurance and accessing other services.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chimmer.jpg',
    title: 'Chimmer',
    info:
      'This app was developed to list user’s visions in life and to review them on a regular basis. It is based on a concept that everyone has his/her own visions and dreams that he/she would like to achieve one day, but unless he/she have listed them somewhere outside the mind, he/she does not really start taking action on them.',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.chimmerltd.chimmer&hl=en',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dudeja.iresh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ireshdudeja/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ireshdudeja',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
