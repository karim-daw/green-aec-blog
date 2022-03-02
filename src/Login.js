import { useNavigate } from "react-router";
import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //check to see if the fields are not empty
  const login =  () => {
    if ((username === "") & (password === "")) {
      return;
    } else {
      axios
        .post("https://fastapi-karim.herokuapp.com/login", {
          username: username,
          password: password,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }

        })
        .then(res =>  {
          console.log(res.data.token, "response.data.token");
          if (res.data.token) {
            setToken(res.data.token);
            navigate("/profile");
          }
        })
        .catch(err => {
          console.log(err, "error");
          console.log("hello");
        });
    }
  };

  return (
    <div style={{ minHeight: 800, marginTop: 30 }}>
      <h1>login page</h1>
      <div style={{ marginTop: 30 }}>
        {fetchToken() ? (
          <p>you are logged in</p>
        ) : (
          <div>
            <form>
              <label style={{ marginRight: 10 }}>Input Username</label>
              <input
                type="email"
                onChange={(e) => setUsername(e.target.value)}
              />

              <label style={{ marginRight: 10 }}>Input Password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={login}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}