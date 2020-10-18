// sign-up.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route, Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

function Signup() {

  let history = useHistory();
  
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/api/user/register",
    }).then((res) => console.log("register", res));
  }; // config.data {"username":"Robo1","password":"robo1"}
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/user/login",
    }).then((res) => {

    // console.log("login", res)
    // if (res.data === true) {
    //   <Route exact path="/signup" render={() => (
    //       <Redirect to="/blog-editor"/>
    //   )}/>
    // }
    setRedirect(res.data); // True or False

    });
  }; // config.data {"username":"Robo1","password":"robo1"}
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user/user",
    }).then((res) => {
      setData(res.data);
      console.log("getUser", res.data); //req.user
    });
  };// {username: "Robo1"}
  
  // Everytime user attempts to login, check for redirect = true, if yes, redirect to Blog Editor page.
  useEffect(
    () => {
      if (redirect) {
        history.push('/blog-editor')
      }
    },
    [redirect]
  );


  return (
      <main className="login-page page-padded">
      <h1>Sign Up</h1>
        <div>
            <label>Username: </label>
            <input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)} />
        </div>
        <div>
            <label>Password: </label>
            <input placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
        </div>
        <button onClick={register} class="bx">Submit</button>
        {/* <Link to="/login"><p style={{fontSize: "10pt", marginTop: "15px"}}>Already a Registered User? Log in</p></Link> */}
        <hr />
        <h1>Login</h1>
        <div>
            <label>Username: </label>
            <input placeholder="username" onChange={(e) => setLoginUsername(e.target.value)} />
        </div>
        <div>
            <label>Password: </label>
            <input placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
        </div>
        <button onClick={login} class="bx">Submit</button>

        <div>
        <h1>Get User</h1>
        <button onClick={getUser} class="bx">Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
        </div>

      </main>
  )
}

export default Signup;