import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from "./Login";
import Profile from "./Profile";

function App() {

  return (
    <div className="App">

      <Navbar />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

    </div>
  );

}

export default App;
