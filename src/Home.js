import BlogList from "./BlogList";
import useFetch from "./useFetch";

// starting a jsonserver
// npx json-server --watch data/db.json --port 8000

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

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