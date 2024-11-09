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
  original_title: string;
  backdrop_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;

  poster_path: string;
  release_date: string;
  overview: string;
};

export type castType = {
  cast_id: number;
  character: string;
  name: string;
  profile_path: string;
};

export type crewType = {
  profile_path: string;
  name: string;
  job: string;
};
