import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/AuthSlice";
import { Button, Input, Logo } from "./Index";
import { useDispatch } from "react-redux";
import authservice from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();

  const login = async (data) => {
    setError("");
    try {
      const session = await authservice.login(data);
      if (session) {
        const userData = await authservice.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div>
        <span>
          <Logo width="100%" />
        </span>
      </div>
      <p>
        <link to="/signup">signup</link>
      </p>
      {error && <p>{error}</p>}
      <div>
        <form onSubmit={handleSubmit(login)}>
        <Input
          label="Email"
          placeholder="enter the email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatterns: () =>
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g. 
              test(v) || "email address must be a valid address"
        
            },
          })}
        />
        <Input
        label="password"
        placeholder= "enter your password"
        type= "password"
        {...register("password",{
            required:true
        })}
    
        />
        <button type="submit"
        className="w-full">
            sign in 
            
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;
