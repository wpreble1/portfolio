// Tile Images and Gifs
import ees from './images/ees/ees-tile.gif';
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
import uc4 from './images/uc/uc-4.jpg';
import uc5 from './images/uc/uc-5.jpg';
import uc6 from './images/uc/uc-6.jpg';
import uc7 from './images/uc/uc-7.jpg';
import uc8 from './images/uc/uc-8.jpg';
import uc9 from './images/uc/uc-9.jpg';
import uc10 from './images/uc/uc-10.jpg';

import op1 from './images/op/op1.jpg';

import crawl1 from './images/crawl/crawl1.jpg';
import crawl2 from './images/crawl/crawl2.jpg';

import ash1 from './images/ash/ash-1.jpg';


import { Project } from './components/types';

const upClose: Project = {
  title: 'Up Close',
  tile: {
    alt: 'circular avatars on a james turrell background',
    src: uc,
  },
  role: 'Full-Stack Development',
  cover: {
    alt: 'slideshow of video chat project up close',
    imageSrc: [uc1, uc2, uc3, uc4, uc5, uc6, uc7, uc8, uc9, uc10],
    imageCredit: null,
    fullscreen: false,
  },
  github: 'https://github.com/HearTogether/upclose',
  link: 'https://upclose.uc.r.appspot.com/',
  content: [
    {
      alt: '',
      imageSrc: null,
      imageCredit: null,
      text: 'Some text about the project',
    },
  ],
  collaborators: {
    'Clayton Christensen': 'https://github.com/clayp0',
    'James Rosier': 'https://github.com/jimmyroro',
    'Kris Mason': 'https://github.com/masonkristopher',
    'Naseer Hines': 'https://github.com/NaseerHines',
  },
  url: 'up-close',
};

const organizePower: Project = {
  title: 'Organize Power',
  tile: {
    alt: 'britney spears card sample from organize power project',
    src: op,
  },
  role: 'Full-Stack Development',
  cover: {
    alt: 'cards of movements from organize power project',
    imageSrc: op1,
    fullscreen: false,
  },
  github: 'https://github.com/organizepower/organizepower',
  link: 'https://op-version-3.uc.r.appspot.com/#/explore',
  content: [
    {
      imageSrc: null,
      imageCredit: null,
      text: 'Some text about the project',
    },
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
  tile: {
    alt: 'map sample from crawl app',
    src: crawlTile,
  },
  role: 'Full-Stack Development',
  cover: {
    alt: '',
    imageSrc: crawl2,
    imageCredit: null,
    fullscreen: false,
  },
  github: 'https://github.com/organizepower/Crawl',
  link: '',
  content: [
    {
      imageSrc: crawl1,
      imageCredit: null,
      text: 'Some text about the project',
    },
  ],
  collaborators: {
    'Neisha Rose': 'https://github.com/orgs/organizepower/people/Neisha1618',
    'Clayton Christensen': 'https://github.com/clayp0',
    'Kris Mason': 'https://github.com/masonkristopher',
  },
  url: 'crawl',
};

const escapeExtinction: Project = {
  title: 'Escape Extinction',
  tile: {
    alt: '',
    src: ees,
  },
  cover: {
    alt: '',
    imageSrc: null,
    imageCredit: null,
    fullscreen: false,
  },
  link: 'https://escape-extinction.com/',
  collaborators: {
    'Rainy Sinclair': 'https://github.com/itsrainy',
  },
  content: [
    {
      imageSrc: null,
      imageCredit: null,
      text: 'Some text about the project',
    },
  ],
  press: {
    'A new escape room experience where you can save sharks!': 'https://wgno.com/news/a-new-escape-room-experience-where-you-can-save-sharks/',
  },
  role: 'Automation Engineering',
  url: 'escape-extinction',
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

const abitaSpringsHotel: Project = {
  collaborators: null, /* {
    'Name': 'Link',
  }, */
  content: [
    {
      imageSrc: ash1,
      imageCredit: null,
      text: 'Some text about the project',
    },
  ],
  cover: {
    alt: '',
    imageSrc: null,
    imageCredit: null,
    fullscreen: true,
  },
  link: 'https://www.abitaspringshotel.com/',
  press: {
    'Historic Abita Springs Hotel adds something new': 'https://www.nola.com/archive/article_fd22b699-5c4f-5e14-8f91-ad1807e7ca64.html',
    'New Abita Springs gallery hosts first official exhibition': 'https://www.nola.com/news/northshore/article_06045d29-e179-5920-a286-4110ad2ca19f.html',
  },
  role: 'Design–Build',
  tile: {
    alt: '',
    src: ash,
  },
  title: 'Abita Springs Hotel',
  url: 'abita-springs-hotel',
};

const arthurAsheStadium: Project = {
  collaborators: null, /* {
    'Name': 'Link',
  }, */
  content: [
    {
      imageSrc: null,
      imageCredit: null,
      text: 'Some text about the project',
    },
  ],
  cover: {
    alt: '',
    imageSrc: null,
    imageCredit: null,
    fullscreen: true,
  },
  link: '',
  press: {
    'How the Roof Was Raised at Arthur Ashe Stadium': 'https://www.nytimes.com/2016/08/30/nyregion/how-the-roof-was-raised-at-arthur-ashe-stadium.html',
    'Tennis stadium\'s retractable roof requires spiral ductwork that moves': 'https://www.snipsmag.com/articles/92774-tennis-stadiums-retractable-roof-requires-spiral-ductwork-that-moves',
  },
  role: 'Mechanical Engineering',
  tile: {
    alt: '',
    src: aas,
  },
  title: 'Arthur Ashe Stadium',
  url: 'arthur-ashe',
};

const fourTimesSquare: Project = {
  collaborators: null,
  content: [
    {
      imageSrc: null,
      imageCredit: 'https://www.instagram.com/lightsensitivity/',
      text: 'Some text about the project',
    },
  ],
  cover: {
    alt: '',
    imageSrc: null,
    imageCredit: null,
    fullscreen: false,
  },
  link: '',
  press: null,
  role: 'Mechanical Engineering',
  tile: {
    alt: '',
    src: fts,
  },
  title: '4 Times Square',
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

export const projects: {[key: string]: Project} = {
  uc: upClose,
  op: organizePower,
  crawl,
  ees: escapeExtinction,
  // emr: escapeMyRoom,
  ash: abitaSpringsHotel,
  aas: arthurAsheStadium,
  fts: fourTimesSquare,
};
