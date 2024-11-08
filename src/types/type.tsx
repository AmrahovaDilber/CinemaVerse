export type routeType = {
    path: string;
    element: JSX.Element;
    layout?: "App"; 
};
  
export type movieType = {
  original_title: string,
  vote_average: number,
  poster_path:string
}