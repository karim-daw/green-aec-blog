import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    // using hooks to change state upon events
    const [blogs, setBlogs] = useState(null)
    
    const [name, setName] = useState("Karim")

    // function that handles delete, 
    // it is then used as a prop for BlogLists
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    // this function will fire at EVERY render
    // you can add a dependancy array
    // if array is empty [] it will only fire once in teh beggining
    // if you put something in the array [ name ] it will fire if name changes state
    useEffect(() => {

        // fetch request from blog endpoint
        // use then() method to fire a funciton once the promise from fetch is resolved
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json()
            })
            .then(data => {
                //console.log(data)
                setBlogs(data)
            })
    }, [])

    return ( 
        // blogs is being given 3 sets of props
        // each prop is different, blogs is array of data
        // title is just a string, and handleDelete is a function itself 
        <div className="home">
            {blogs &&<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
     );
}
 
export default Home