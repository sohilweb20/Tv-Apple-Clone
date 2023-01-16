// import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Spinner } from "@chakra-ui/react";
import "./login.css";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../../Redux/AuthReducer/action";

export default function Login() {
  const toast = useToast();

  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 2) {
      dispatch(LoginRequest({ email, password })).then((res) => {
        // console.log("hii", res.payload.msg);
        if (res.payload.msg === "Login successfull") {
          toast({
            position: "top",
            title: "Login Successfully",
            description: "Have a nice day !",
            status: "success",
            duration: 6000,
            isClosable: true,
          });
          navigate(place, { replace: true });
        } else {
          toast({
            position: "top",
            title: "Login failed",
            description: "wron password",
            status: "warning",
            duration: 6000,
            isClosable: true,
          });
        }
      });
    } else {
      toast({
        position: "top",
        title: "Please Enter something",
        description: "Some fields are empty",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="s-container">
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.apple.com/v/apple-tv-plus/ae/images/meta/apple-tv__e7aqjl2rqzau_og.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Wantflix</div>
        <form className="p-3 mt-3">
          {/* email input */}

          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="userName"
              placeholder="Email"
            />
          </div>

          {/* password input */}

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              required
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="text"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="btn mt-3"
          >
            Login
          </button>
        </form>
        <div className="text-center fs-6 cont">
          <Link to="/signup">New here? &nbsp; Signup</Link>
        </div>
      </div>
    </div>
  );
}
