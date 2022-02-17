import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    // using hooks to change state upon events
    const [blogs, setBlogs] = useState([
        // adding dummy blog entries
        { title: "My new website", body: "This is my first blog post", author: "Karim", id: 1},
        { title: "Food Preference", body: "I Like pizza!", author: "Cherine", id: 2},
        { title: "Travel Plans", body: "I am goign to paris tomorrow", author: "Ibrahim", id: 3}
    ])
    
    const [name, setName] = useState("Karim")

    // function that handles delete, is then used as a prop for BlogLists
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    // this function will fire at EVERY render
    // you can add a dependancy array
    // if array is empty [] it will only fire once in teh beggining
    // if you put something in the array [ name ] it will fire if name changes state
    useEffect(() => {
        console.log("use effect ran")
    }, [name])

    return ( 
        // blogs={blogs} is a a prop
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home