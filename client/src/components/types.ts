interface Tile {
  alt: string;
  src: string;
}

interface Cover {
  alt: string;
  imageSrc: string[] | string | null;
  imageCredit?: string | null;
  fullscreen: boolean;
}

interface Section {
  alt?: string[] | string | null;
  imageSrc?: string[] | string | null;
  imageCredit?: string | null;
  text?: string | null;
}

export interface Project {
  collaborators?: {[key: string]: string} | null;
  content: Section[];
  cover: Cover;
  github?: string;
  link: string;
  press?: {[key: string]: string} | null;
  role: string;
  tile: Tile;
  title: string;
  url: string;
}

export interface ScrollData {
  previousScrollTop: number;
  currentScrollTop: number;
}

export interface ScrollCallback {
  (scrollData: ScrollData): void
}