import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../Redux/AuthReducer/action";
import { useToast } from "@chakra-ui/react";
// import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const toast = useToast();
  let isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(LogoutUser());
    // console.log("hii");
    toast({
      position: "top",
      title: "Logout Successfully",
      description: "Have a nice day !",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.postimg.cc/8zZthrxM/wantflixn.png"
          alt=""
        />
      </Link>
      {/* <div><SearchIcon style={{color:"white"}}/></div> */}
      <div className="header_search">
        <Link to="/search">
          <input
            className="header_searchInput"
            type="text"
            placeholder="Search"
          />
        </Link>
      </div>

      {!isAuth ? (
        <div className="signin_but">
          <Link to="/login">
            <button className="but">Sign in</button>
          </Link>
        </div>
      ) : (
        <div className="signin_">
          <button className="but" onClick={handleClick}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
