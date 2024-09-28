import React from 'react';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import '../styles/Login.scss'; // Optional: Create a separate SCSS file for styling

const Login = () => {
  const { login } = useKindeAuth();

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={login} type="button">Log In</button>
    </div>
  );
};

export default Login;
