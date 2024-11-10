import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import { routeType } from "../types/type";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import CastCrewPage from "../pages/CastCrewPage";
import PersonPage from "../pages/PersonPage";
import MoviesPage from "../pages/MoviesPage";
import { MainContextProvider } from "../context/AppContext";

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
    path: "/moviedetails/:slug",
    element: <MovieDetailsPage />,
    layout: "App",
  },
  {
    path: "/castcrew/:slug",
    element: <CastCrewPage />,
    layout: "App",
  },
  {
    path: "/person/:slug",
    element: <PersonPage></PersonPage>,
    layout: "App",
  },
  {
    path: "/movies/:slug",
    element: <MoviesPage></MoviesPage>,
    layout: "App",
  },
];

const routerMap = (arr: ARR) => {
  return arr.routes.map((item) => {
    if (item.layout === "App") {
      item.element = (
        <MainContextProvider>
          {" "}
          <AppLayout>{item.element}</AppLayout>
        </MainContextProvider>
      );
    }
    return item;
  });
};

export const router = createBrowserRouter(routerMap({ routes }));
