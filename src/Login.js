import { useNavigate } from "react-router";
import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";



  const fetchRandomData = () => {
    return axios.post(
      'https://fastapi-karim.herokuapp.com/login', {
        username: "karim@example.com",
        password: "password123",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }

      })
      .then((res) => {
        // handle success
        console.log(res);
        return res
      })
      .catch(err =>  {
        // handle error
        console.log(err);
      })   
    }

  const Login = () => {
      return (
          <div className="Login">
              <h1>Hello fastapi</h1>
            <button onClick = { () => { fetchRandomData() } }>Fetch data</button>
          </div>
       )
  }

  export default Login
   



 



