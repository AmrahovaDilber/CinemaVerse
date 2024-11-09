import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import { routeType } from "../types/type";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import CastCrewPage from "../pages/CastCrewPage";

type ARR = {
  routes: routeType[];
};

const routes: routeType[] = [
  {
    path: "/",
    element: <Home></Home>,
    layout: "App",
  },
  {
    path: "about",
    element: <About></About>,
    layout: "App",
  },
  {
    path: "/moviedetails/:slug", 
    element: <MovieDetailsPage />,
    layout: "App",
  },
  {
    path: "/castcrew/:slug", 
    element: <CastCrewPage/>,
    layout: "App",
  },
];

const routerMap = (arr: ARR) => {
  return arr.routes.map((item) => {
    if (item.layout === "App") {
      item.element = <AppLayout>{item.element}</AppLayout>;
    }
    return item;
  });
};

export const router = createBrowserRouter(routerMap({ routes }));
