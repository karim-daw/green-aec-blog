import {createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
    const [userId, setUserId] = useState(localStorage.getItem(1))

    useEffect(() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }

            const response = await fetch(`https://fastapi-karim.herokuapp.com/users/${userId}`, requestOptions)

            if (!response.ok) {
                setUserId(null)
            }
            localStorage.setItem(1, userId)
        }
        fetchUser()
    }, [userId])

    return (
        <UserContext.Provider value={[userId, setUserId]}>
          {props.children}
        </UserContext.Provider>
      );
}