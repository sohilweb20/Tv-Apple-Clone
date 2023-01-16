import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ComedySingle from "../Pages/SinglePage/ComedySingle";
import CurrentSingle from "../Pages/SinglePage/CurrentSingle";
import FutureSingle from "../Pages/SinglePage/FutureSingle";
import HistoricalSingle from "../Pages/SinglePage/HistoricalSingle";
import OriginSingle from "../Pages/SinglePage/OriginalSingle";
import PopularSinglePage from "../Pages/SinglePage/PopularSinglePage";
import SinglePage from "../Pages/SinglePage/TrendingSinglePage";
import ClutterSingle from "../Pages/SinglePage/ClitterSingle";
import DramaSingle from "../Pages/SinglePage/DramaSingle";
import KidsSingle from "../Pages/SinglePage/KidsSingle";
import MusicSingle from "../Pages/SinglePage/MusicSingle";
import Search from "../Pages/Home/SearchData/SearchData";
import SearchSingle from "../Pages/SinglePage/SearchSingle";
import Signup from "../Pages/Login/Signup";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
      <Route
        path="/Movies/:_id"
        element={
          <PrivateRoute>
            <SinglePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/Popular/:_id"
        element={
          <PrivateRoute>
            <PopularSinglePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/Comedy/:_id"
        element={
          <PrivateRoute>
            <ComedySingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Current/:_id"
        element={
          <PrivateRoute>
            <CurrentSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Future/:_id"
        element={
          <PrivateRoute>
            <FutureSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Historical/:_id"
        element={
          <PrivateRoute>
            <HistoricalSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Original/:_id"
        element={
          <PrivateRoute>
            <OriginSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Clitter/:_id"
        element={
          <PrivateRoute>
            <ClutterSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Drama/:_id"
        element={
          <PrivateRoute>
            <DramaSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Kids/:_id"
        element={
          <PrivateRoute>
            <KidsSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Music/:_id"
        element={
          <PrivateRoute>
            <MusicSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/Search/:_id"
        element={
          <PrivateRoute>
            <SearchSingle />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoute;
