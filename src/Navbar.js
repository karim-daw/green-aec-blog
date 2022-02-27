import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Green AEC Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;