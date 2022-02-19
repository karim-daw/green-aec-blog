import { useState, useEffect } from "react"
import BlogList from "./BlogList";

// starting a jsonserver
// npx json-server --watch data/db.json --port 8000

const Home = () => {
    // using hooks to change state upon events
    // isPending is a hook for handling time for GET request from servers
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    // this function will fire at EVERY render
    // you can add a dependancy array
    // if array is empty [] it will only fire once in teh beggining
    // if you put something in the array [ name ] it will fire if name changes state
    useEffect(() => {

        // fetch request from blog endpoint
        // use then() method to fire a funciton once the promise from fetch is resolved
        fetch("http://localhost:8000/blogs")
            .then(res => {
                // check if response is OK, if yes return res has json
                if(!res.ok) {
                    throw Error("could not fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                // useState setBlogs to set retrieved data and setIsPending to false
                // for that it doesnt show Loading... div when data is received
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            // handle network error
            .catch(err => {
                setError(err.message)
                setIsPending(false)

            })
    }, [])

    return ( 
        // blogs is being given 3 sets of props
        // each prop is different, blogs is array of data
        // title is just a string, and handleDelete is a function itself 
        // && is conditional templateing in javascript
        // if left of && is false, doesnt output what is to the right of it
        // isPending is useing to conditionally output template for Loading...
        <div className="home">
            {error && <div> { error } </div> }
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home