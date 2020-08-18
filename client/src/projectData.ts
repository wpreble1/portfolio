import ees from './images/ees.gif';
import fts from './images/4ts-square-1.jpg';
import aas from './images/aas-square-1.jpg';
import ash from './images/ash-sq-1.jpg';
import crawl from './images/crawl square-1.jpg';
import uc from './images/uc-sq-1.jpg';
import op from './images/op-sq-1.jpg';

import ash1 from './images/ash/project-1.jpg';

const projects = [
  {
    title: 'Up Close',
    src: uc,
    alt: '',
    url: 'up-close',
    images: [],
    text: [],
  },
  {
    title: 'Organize Power',
    src: op,
    alt: '',
    url: 'organize-power',
    images: [],
    text: [],
  },
  {
    title: 'Crawl',
    src: crawl,
    alt: '',
    url: 'crawl',
    images: [],
    text: [],
  },
  {
    title: 'Escape Extinction',
    src: ees,
    alt: 'escape extinction sharks gif',
    url: 'escape-extinction',
    images: [],
    text: [],
  },
  {
    title: 'Abita Springs Hotel',
    src: ash,
    alt: '',
    url: 'abita-springs-hotel',
    images: [ash1],
    text: [
      'This is some text about the Abita Springs Hotel.',
      'This is some more text about the Abita Springs Hotel...',
    ],
  },
  {
    title: 'Arthur Ashe Stadium',
    src: aas,
    alt: '',
    url: 'arthur-ashe',
    images: [],
    text: [],
  },
  {
    title: '4 Times Square',
    src: fts,
    alt: '',
    url: 'times-square',
    photoCredit: 'https://www.instagram.com/lightsensitivity/',
    images: [],
    text: [],
  },
];

export default projects;
