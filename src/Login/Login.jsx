import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "login" })}>Login</button>
    </div>
  );
};

export default Login;
