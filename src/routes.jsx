import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="actors" element={<Actors />} />
    <Route path="directors" element={<Directors />} />
    <Route path="movie/:id" element={<Movie />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

export default routes;