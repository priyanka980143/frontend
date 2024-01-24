import React, { useContext } from "react";
import { AppContext } from "./12FunctionalUseContext";

function Login() {
  const { username,setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>Login Compo: {username}</h1>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
