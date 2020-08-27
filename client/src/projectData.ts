// Tile Images and Gifs
import ees from './images/ees/ees-tile.jpg';
import fts from './images/fts/fts-tile.jpg';
import aas from './images/aas/aas-tile.jpg';
import ash from './images/ash/ash-tile.jpg';
import crawlTile from './images/crawl/crawl-tile.jpg';
import uc from './images/uc/uc-tile.jpg';
import op from './images/op/op-tile.jpg';

// Content Images
import uc1 from './images/uc/uc-1.jpg';
import uc2 from './images/uc/uc-2.jpg';
import uc3 from './images/uc/uc-3.jpg';
import uc5 from './images/uc/uc-5.jpg';
import uc6 from './images/uc/uc-6.jpg';
import uc7 from './images/uc/uc-7.jpg';
import uc8 from './images/uc/uc-8.jpg';
import uc9 from './images/uc/uc-9.jpg';
import uc10 from './images/uc/uc-10.jpg';
import uc11 from './images/uc/uc11.jpg';
import uc12 from './images/uc/uc12.jpg';

import op1 from './images/op/op1.jpg';

import crawlCover from './images/crawl/crawl-cover.jpg';
// import crawl1 from './images/crawl/crawl1.jpg';
import crawl2 from './images/crawl/crawl2.jpg';

import eesCover from './images/ees/ees-cover.jpg';
import ees1 from './images/ees/ees1.jpg';
import ees2 from './images/ees/ees2.jpg';
import ees3 from './images/ees/ees3.jpg';
import ees4 from './images/ees/ees4.jpg';
import ees5 from './images/ees/ees5.jpg';

import ashCover from './images/ash/ash-cover.jpg';
import ash1 from './images/ash/ash1.jpg';
import ash2 from './images/ash/ash2.jpg';

import aasCover from './images/aas/aas-cover.jpg';
import aas1 from './images/aas/aas1.jpg';
import aas2 from './images/aas/aas2.jpg';

import ftsCover from './images/fts/fts-cover.jpg';

import { Project } from './components/types';

const upClose: Project = {
  title: 'Up Close',
  role: 'Full-Stack Development',
  tile: {
    alt: 'circular avatars on a james turrell background',
    src: uc,
  },
  cover: {
    alt: 'slideshow of video chat project up close',
    imageSrc: [uc1, uc2, uc3, uc5, uc6, uc7, uc8, uc9, uc10],
    imageCredit: null,
    fullscreen: false,
  },
  github: 'https://github.com/HearTogether/upclose',
  link: 'https://upclose.uc.r.appspot.com/',
  content: [
    {
      text:
        'UpClose is a spatialized video chat application designed to facilitate intimate conversations in a party-like atmosphere. Users can create a house party, invite their friends, then navigate around the rooms of that party. The volume of other partygoers is a function of distance from the user. Move closer to hear someone better or further away to tune them out.',
    },
    {
      text:
        'Using Socket.io and WebRTC, guests that occupy the same room are connected automatically. If someone leaves a room by wandering over a boundary, they are disconnected from the previous room and new connections are established to users in the new room.',
    },
    {
      alt: '',
      imageSrc: uc11,
      text:
        'Users can create a new party from their Neighborhood page where all parties the user has joined are displayed. Parties in the neighborhood are color coded to denote private, public, or pending invitation.',
    },
    {
      alt: '',
      imageSrc: uc12,
      text:
        'Parties can be open to the public or invite only. Once a user has created a party, they can customize it by inviting their friends and changing the backgrounds.',
    },
    {
      text:
        'The back-end consists of an Express Server, a MySQL database, and Sequelize ORM. The front-end is built with React Hooks and Tailwind CSS. The entire stack is written in TypeScript.',
    },
  ],
  collaborators: {
    'Clayton Christensen': 'https://github.com/clayp0',
    'James Rosier': 'https://github.com/jimmyroro',
    'Kris Mason': 'https://github.com/masonkristopher',
    'Naseer Hines': 'https://github.com/NaseerHines',
  },
  url: 'up-close',
  techs: [
    'JavaScript',
    'TypeScript',
    'ReactTech',
    'ExpressTech',
    'Node',
    'MySQL',
    'Sequelize',
    'GCP',
    'ReactRouter',
    'Tailwind',
  ],
};

const organizePower: Project = {
  title: 'Organize Power',
  role: 'Full-Stack Development',
  tile: {
    alt: 'britney spears card sample from organize power project',
    src: op,
  },
  cover: {
    alt: 'cards of movements from organize power project',
    imageSrc: op1,
    fullscreen: false,
  },
  github: 'https://github.com/organizepower/organizepower',
  link: 'https://op-version-3.uc.r.appspot.com/#/explore',
  content: [
    {
      text:
        'Organize Power helps bridge the gap between the desire for change and impactful action. Users are encouraged to engage directly with movements they are inspired by and to start their own movements. Organizers are given the tools to encourage their followers to pressure public figures, attend events, and donate money to grassroots causes.',
    },
  ],
  techs: [
    'JavaScript',
    'ReactTech',
    'ExpressTech',
    'Node',
    'MySQL',
    'Sequelize',
    'GCP',
    'ReactRouter',
    'Tailwind',
  ],
  collaborators: {
    'Neisha Rose': 'https://github.com/orgs/organizepower/people/Neisha1618',
    'Clayton Christensen': 'https://github.com/clayp0',
    'Kris Mason': 'https://github.com/masonkristopher',
  },
  url: 'organize-power',
};

const crawl: Project = {
  title: 'Crawl',
  role: 'Full-Stack Development',
  tile: {
    alt: 'map sample from crawl app',
    src: crawlTile,
  },
  cover: {
    alt: '',
    imageSrc: crawlCover,
    imageCredit: null,
    fullscreen: false,
  },
  github: 'https://github.com/organizepower/Crawl',
  link: '',
  content: [
    {
      imageSrc: crawl2,
      imageCredit: null,
      text:
        'Crawl is a fun, full-stack app for planning bar crawls with friends. Users can build a bar crawl using the interactive map, then invite friends to join. Once the crawl begins, users can vote on when to leave the bar. Friends can text each other from the app with the help of Twilio.',
    },
  ],
  techs: ['JavaScript', 'Vue', 'ExpressTech', 'Node', 'MySQL', 'GCP'],
  collaborators: {
    'Neisha Rose': 'https://github.com/orgs/organizepower/people/Neisha1618',
    'Clayton Christensen': 'https://github.com/clayp0',
    'Kris Mason': 'https://github.com/masonkristopher',
  },
  url: 'crawl',
};

const escapeExtinction: Project = {
  title: 'Escape Extinction',
  role: 'Automation Engineering',
  tile: {
    alt: '',
    src: ees,
  },
  cover: {
    alt: '',
    imageSrc: eesCover,
    imageCredit: null,
    fullscreen: true,
  },
  link: 'https://escape-extinction.com/',
  collaborators: {
    'Brad LaValley': 'https://www.linkedin.com/in/brad-lavalley-04250953/',
    'Rainy Sinclair': 'https://github.com/itsrainy',
  },
  content: [
    {
      imageSrc: ees1,
      imageCredit: null,
      text:
        'Escape Extinction Sharks is a state-of-the-art, immersive entertainment installation at the Audubon Aquarium of the Americas on the New Orleans riverfront.',
    },
    {
      imageSrc: ees4,
      text:
        'The experience incorporates low-voltage sensors and actuators, a pneumatic system for powering sliding doors and opening crates, custom sound, video, and lighting effects, Arduino microcontrollers, and a Unity virtual reality game.',
    },
    {
      imageSrc: ees3,
      imageCredit: null,
      text:
        'This diverse array of technology is controlled by an Automation Direct PLC (Programmable Logic Controller) running Productivity 3000, a ladder logic language.',
    },
    {
      imageSrc: ees2,
    },
    {
      imageSrc: ees5,
      imageCredit: null,
      text:
        'An application was designed in C-More, a graphical, Human-Machine Interaction software, to allow the escape room staff to monitor and control the experience remotely.',
    },
    // {
    //   imageSrc: ees5.
    // }
  ],
  press: {
    'A new escape room experience where you can save sharks!':
      'https://wgno.com/news/a-new-escape-room-experience-where-you-can-save-sharks/',
    'Audubon Aquarium announces shark-themed escape room':
      'https://blooloop.com/news/audubon-escape-room/',
  },
  url: 'escape-extinction',
  techs: ['CPlusPlus', 'Arduino'],
};

const abitaSpringsHotel: Project = {
  title: 'Abita Springs Hotel',
  role: 'Design–Build & Founding',
  tile: {
    alt: '',
    src: ash,
  },
  cover: {
    alt: '',
    imageSrc: ashCover,
    imageCredit: null,
    fullscreen: true,
  },
  link: 'https://www.abitaspringshotel.com/',
  content: [
    {
      imageSrc: ash1,
      imageCredit: null,
      text: 'The Abita Springs Hotel is a five-room boutique hotel located in the charming town of Abita Springs, Louisiana. The building was historically renovated throughout 2017 and doors opened for business in March 2018. ',
    },
    {
      imageSrc: ash2,
      text: 'On the first floor, the Ann O’Brien Art Gallery hosts private events and public community gatherings. The courtyard features a pair of dueling, centuries-old oak trees, and a historic, Artesian spring, one of many the town was named for.',
    },
  ],
  press: {
    'Historic Abita Springs Hotel adds something new':
      'https://www.nola.com/archive/article_fd22b699-5c4f-5e14-8f91-ad1807e7ca64.html',
    'Cross the Pond for a Visit to Abita Springs':
      'https://www.myneworleans.com/cross-the-pond-for-a-visit-to-abita-springs/',
    'New Abita Springs gallery hosts first official exhibition':
      'https://www.nola.com/news/northshore/article_06045d29-e179-5920-a286-4110ad2ca19f.html',
  },
  url: 'abita-springs-hotel',
};

const arthurAsheStadium: Project = {
  title: 'Arthur Ashe Stadium',
  role: 'Mechanical Engineering',
  tile: {
    alt: '',
    src: aas,
  },
  cover: {
    alt: '',
    imageSrc: aasCover,
    imageCredit: null,
    fullscreen: true,
  },
  link:
    'https://me-engineers.com/our-projects/arthur-ashe-stadium-retractable-roof-united-states-tennis-association/',
  content: [
    {
      imageSrc: aas1,
      imageCredit: null,
      text:
        'As a mechanical design engineer with ME-Engineers under the direction of Michael Tortorella, P.E., I designed and modeled an innovative air distribution system for the retractable roof upgrade of Arthur Ashe Stadium. A ring of spiral ductwork over six feet in diameter circles the entire bowl of the stadium, distributing air from the upper deck to the court itself. The system debuted successfully at the 2016 US Open.',
    },
    {
      imageSrc: aas2,
      imageCredit: null,
      text: '',
    },
  ],
  press: {
    'How the Roof Was Raised at Arthur Ashe Stadium':
      'https://www.nytimes.com/2016/08/30/nyregion/how-the-roof-was-raised-at-arthur-ashe-stadium.html',
    "Tennis stadium's retractable roof requires spiral ductwork that moves":
      'https://www.snipsmag.com/articles/92774-tennis-stadiums-retractable-roof-requires-spiral-ductwork-that-moves',
  },
  url: 'arthur-ashe',
};

const fourTimesSquare: Project = {
  title: '4 Times Square',
  role: 'Mechanical Engineering',
  tile: {
    alt: '',
    src: fts,
  },
  cover: {
    alt: '',
    imageSrc: ftsCover,
    imageCredit: null,
    fullscreen: false,
  },
  link:
    'https://me-engineers.com/our-projects/4-times-square-infrastructure-upgrade/',
  content: [
    {
      imageSrc: null,
      imageCredit: 'https://www.instagram.com/lightsensitivity/',
      text:
        'As a mechanical design engineer with ME-Engineers under the direction of Michael Tortorella, P.E., I designed and modeled an infrastructure upgrade for the heating and chilled water plant in the 4 Times Square tower formerly known as the Condé Nast building. Gas-fired absorption heaters and chillers were removed and replaced with separate high efficiency, modular chiller and condensing hot water boiler plants.',
    },
  ],
  url: 'times-square',
};

export const displayOrder: string[] = [
  'uc',
  'op',
  'crawl',
  'ees',
  // 'emr',
  'ash',
  'aas',
  'fts',
];

export const projects: { [key: string]: Project } = {
  uc: upClose,
  op: organizePower,
  crawl,
  ees: escapeExtinction,
  // emr: escapeMyRoom,
  ash: abitaSpringsHotel,
  aas: arthurAsheStadium,
  fts: fourTimesSquare,
};

// const escapeMyRoom: Project = {
//   collaborators: null,
//   content: [
//     {
//       imageSrc: null,
//       imageCredit: null,
//       text: 'Some text about the project',
//     },
//   ],
//   cover: {
//     alt: '',
//     imageSrc: null,
//     imageCredit: null,
//     fullscreen: false,
//   },
//   link: 'https://escapemyroom.com/',
//   press: {
//     'Audubon Zoo unveils new lion exhibit to public': 'https://www.nola.com/news/article_0607ac5d-a1ee-5e1c-bff1-f079b92d5c4c.html',
//     'NOLA attraction has visitors running for the exit': 'https://www.fox8live.com/story/29600715/nola-attraction-has-visitors-running-for-the-exit/',
//   },
//   role: 'Automation Engineering',
//   tile: {
//     alt: '',
//     src: '',
//   },
//   title: 'Escape My Room',
//   url: 'escape-my-room',
// };
