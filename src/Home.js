import { useState } from "react"
import BlogList from "./BlogList";


const Home = () => {
    // using hooks to change state upon events
    const [blogs, setBlogs] = useState([
        // adding dummy blog entries
        { title: "My new website", body: "This is my first blog post", author: "Karim", id: 1},
        { title: "Food Preference", body: "I Like pizza!", author: "Cherine", id: 2},
        { title: "Travel Plans", body: "I am goign to paris tomorrow", author: "Ibrahim", id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        // blogs={blogs} is a a prop
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home