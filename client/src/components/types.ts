interface Tile {
  alt: string;
  src: string;
}

interface Section {
  alt?: string | null;
  imageSrc?: string | null;
  imageCredit?: string | null;
  text?: string | null;
}

export interface Project {
  collaborators?: {[key: string]: string} | null;
  content: Section[];
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