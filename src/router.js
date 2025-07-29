// src/routes.js
import Home from './pages/Home'
import Movie from "./pages/Movie";
import Directors from './pages/Directors'
import Actors from './pages/Actors'
import ErrorPage from "./pages/ErrorPage";
import Root from "./components/Root"; // Optional layout wrapper (e.g. NavBar + <Outlet />)

const routes = [
  {
    path: "/",
    element: <Root />, // Or <Home /> directly if you don’t use <Outlet />
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // loads at "/"
      { path: "movie/:id", element: <Movie /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
    ],
  },
];

export default routes;
