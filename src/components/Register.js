import React from 'react';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import '../styles/Register.scss'; // Optional: Create a separate SCSS file for styling

const Register = () => {
  const { register } = useKindeAuth();

  return (
    <div className="register-container">
      <h1>Register</h1>
      <button onClick={register} type="button">Register</button>
    </div>
  );
};

export default Register;
