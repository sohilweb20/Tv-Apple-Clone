import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmusicData } from "../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import "../Trending/Trending.css";
import Loading from "../../../components/Loading/Loading";
const Music = () => {
  const dispatch = useDispatch();
  const Music_data = useSelector((state) => state.AppReducer.Music);
  // console.log(Music_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getmusicData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Music collections</h1>

      <div className="TrendingDiv">
      {isLoading && <Loading />}
        {Music_data.length > 0 &&
          Music_data.map((item) => {
            return (
              <div key={item._id}>
                <Link to={`/Music/${item._id}`}>
                  <img src={item.Poster} alt={item.Title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Music;
