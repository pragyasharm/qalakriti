import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("on submit");
    dispatch(login({ userName, password }));
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <div>
      <h3>Login Now</h3>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
