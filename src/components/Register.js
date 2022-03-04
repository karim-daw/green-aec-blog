import React, { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    // unpack array below (look this up)
    const [, setUserId] = useContext(UserContext)

    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: email, password: password })
        }

        const res = await fetch("https://fastapi-karim.herokuapp.com/users", requestOptions)
        const data = await res.json()

        if(!res.ok){
            console.log("hello")
            setErrorMessage(data.detail)
        } else {
            setUserId(data.id)
            console.log(data.id)
        }
    }

    return (
        <div className="column">
            <form className="box">
                <h1 className="title has-text-centered">Register</h1>
                <div className="field">
                    <label className="label">Email Address</label>
                    <div className="control">
                        <input 
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                    <label className="label">Password</label>
                    <div className="control">
                        <input 
                            type="text"
                            placeholder="Enter password"
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <br />
                <button className = "button is-primary" type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register