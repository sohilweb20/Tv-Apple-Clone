import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ComedySingle from "../SinglePage/ComedySingle";
import CurrentSingle from "../SinglePage/CurrentSingle";
import FutureSingle from "../SinglePage/FutureSingle";
import HistoricalSingle from "../SinglePage/HistoricalSingle";
import OriginSingle from "../SinglePage/OriginalSingle";
import PopularSinglePage from "../SinglePage/PopularSinglePage";
import SinglePage from "../SinglePage/TrendingSinglePage";
import ClutterSingle from "../SinglePage/ClitterSingle";
import DramaSingle from "../SinglePage/DramaSingle";
import KidsSingle from "../SinglePage/KidsSingle";
import MusicSingle from "../SinglePage/MusicSingle";
import Search from "../Home/SearchData/SearchData";
import SearchSingle from "../SinglePage/SearchSingle";
import Signup from "../Login/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
