export interface GentlemanStructure {
  id: number;
  name: string;
  picture: string;
  alternativeText: string;
  profession: string;
  twitter: string;
  status: string;
  selected: boolean;
}

export type Gentlemen = GentlemanStructure[];
