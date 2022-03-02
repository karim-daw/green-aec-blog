import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from "./Login";
import Profile from "./Profile";
import { RequireToken } from "./Auth";
import Register from './components/Register';
import { useEffect, useState } from 'react';


const App = () => {
  const [message, setMessage] = useState("")
  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    const res = await fetch("https://fastapi-karim.herokuapp.com/", requestOptions)
    const data = await res.json()

    if (!res.ok) {
      console.log("something did not work")
    } else {
      setMessage(data.message)
    }
  }

  useEffect(() => {
    getWelcomeMessage()
  }, [])
  return(
    <div>
      <h1>{message}</h1>
      <Register />
    </div>
  )

/*   return (
    <div className="App">

      <Navbar />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" 
          element={
            <RequireToken>
              <Profile />
            </RequireToken>
            } />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

    </div>
  ); */

}

export default App;
