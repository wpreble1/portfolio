export interface Project {
  collaborators?: {[key: string]: string} | null;
  content: Section[];
  link: string;
  press?: {[key: string]: string} | null;
  tile: Tile;
  title: string;
  url: string;
}

interface Section {
  alt?: string | null;
  imageSrc?: string | null;
  imageCredit?: string | null;
  text?: string | null;
}

interface Tile {
  alt: string;
  src: string;
}
