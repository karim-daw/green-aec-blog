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

    return ( 
        // blogs={blogs} is a a prop
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Karim")} title="Karim's Blogs" />
        </div>
     );
}
 
export default Home