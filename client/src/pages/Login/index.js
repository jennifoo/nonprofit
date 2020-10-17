import React, { useRef, useEffect } from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { STORE_RESULTS, ADD_POST } from "../../utils/actions";
import API from "../../utils/API";


function Login() {
  
  return (
      <main className="login-page page-padded">
      <h1>Login</h1>
      <form method="POST" action="/api/user/login" className="login">
        <div>
            <label for="exampleInputUser">Username: </label>
            <input name="username" type="username" id="user-input" placeholder="Username" />
        </div>
        <div>
            <label for="exampleInputEmail">Email: </label>
            <input name="email" type="email" id="email-input" placeholder="Email" />
        </div>
        <div>
            <label for="exampleInputPassword">Password: </label>
            <input name="password" type="password" id="password-input" placeholder="Password" />
        </div>
        <button class="bx">Submit</button>
      </form>
      </main>
  )
}

export default Login;