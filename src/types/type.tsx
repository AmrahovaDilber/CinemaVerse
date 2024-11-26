export type routeType = {
  path: string;
  element: JSX.Element;
  layout?: "App";
};

export type movieType = {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
};

export type movieDetailType = {
  id: number;
  original_title: string;
  backdrop_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  poster_path: string;
  release_date: string;
  overview: string;
  tagline?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  genres?: { id: number; name: string }[]; 
  production_companies?: {
    id: number;
    name: string;
    logo_path?: string;
    origin_country?: string;
  }[];
};

export type castType = {
  id: number;
  character: string;
  name: string;
  profile_path: string;
};

export type crewType = {
  id: number;
  profile_path: string;
  name: string;
  job: string;
};

export type personType = {
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  profile_path: string | null;
};


export type Inputs = {
  username: string;
  email?: string;
  password: string;
  rePassword?: string;
};


export type ReviewType = {
  id:number,
  author: string,
  content: string,
  created_at:string
}