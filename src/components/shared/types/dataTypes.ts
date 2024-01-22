export interface Destination {
  name: string;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface Data {
  destinations?: Destination[];
  crew?: CrewMember[];
  technology?: Technology[];
}
