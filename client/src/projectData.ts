// Tile Images and Gifs
import ees from './images/ees/ees-tile.gif';
import fts from './images/fts/fts-tile.jpg';
import aas from './images/aas/aas-tile.jpg';
import ash from './images/ash/ash-tile.jpg';
import crawlJpg from './images/crawl/crawl-tile.jpg';
import uc from './images/uc/uc-tile.jpg';
import op from './images/op/op-tile.jpg';

// Content Images and Gifs
import ash1 from './images/ash/ash-1.jpg';

import { Project } from './components/types';

const upClose: Project = {
  collaborators: {
    'Clayton Christensen': '',
    'James Rosier': '',
    'Kris Mason': '',
    'Naseer Hines': '',
  },
  content: [
    {
      alt: 'Gif of video chat project upClose',
      imageSrc: uc,
      imageCredit: null,
      text: 'Some text about the project',
    },
    {
      imageSrc: null,
      imageCredit: null,
      text: 'Some more text about the project',
    },
  ],
  link: 'https://upclose.uc.r.appspot.com/',
  press: null,
  role: 'Full-Stack Development',
  tile: {
    alt: 'Gif of upClose project showing circular avatars moving around on a square',
    src: uc,
  },
  title: 'Up Close',
  url: 'up-close',
};

const organizePower: Project = {
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
  link: '',
  press: null,
  role: 'Full-Stack Development',
  tile: {
    alt: '',
    src: op,
  },
  title: 'Organize Power',
  url: 'organize-power',
};

const crawl: Project = {
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
  link: '',
  press: null,
  role: 'Full-Stack Development',
  tile: {
    alt: '',
    src: crawlJpg,
  },
  title: 'Crawl',
  url: 'crawl',
};

const escapeExtinction: Project = {
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
  link: 'https://escape-extinction.com/',
  press: {
    'A new escape room experience where you can save sharks!': 'https://wgno.com/news/a-new-escape-room-experience-where-you-can-save-sharks/',
  },
  role: 'Automation Design',
  tile: {
    alt: '',
    src: ees,
  },
  title: 'Escape Extinction',
  url: 'escape-extinction',
};

const escapeMyRoom: Project = {
  collaborators: null,
  content: [
    {
      imageSrc: null,
      imageCredit: null,
      text: 'Some text about the project',
    },
  ],
  link: 'https://escapemyroom.com/',
  press: {
    'Audubon Zoo unveils new lion exhibit to public': 'https://www.nola.com/news/article_0607ac5d-a1ee-5e1c-bff1-f079b92d5c4c.html'
  },
  role: 'Automation Design',
  tile: {
    alt: '',
    src: '',
  },
  title: 'Escape My Room',
  url: 'escape-my-room',
};

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
  link: '',
  press: null,
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
  'emr',
  'ash',
  'aas',
  'fts',
];

export const projects: {[key: string]: Project} = {
  uc: upClose,
  op: organizePower,
  crawl,
  ees: escapeExtinction,
  emr: escapeMyRoom,
  ash: abitaSpringsHotel,
  aas: arthurAsheStadium,
  fts: fourTimesSquare,
};
