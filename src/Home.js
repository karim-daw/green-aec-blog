import { useState } from "react"


const Home = () => {
    // using hooks to change state upon events
    const [blogs, setBlogs] = useState([
        // adding dummy blog entries
        { title: "My new website", body: "This is my first blog post", author: "Karim", id: 1},
        { title: "Food Preference", body: "I Like pizza!", author: "Cherine", id: 2},
        { title: "Travel Plans", body: "I am goign to paris tomorrow", author: "Ibrahim", id: 3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Post by { blog.author }</p>
                </div>


            ))}
        </div>
     );
}
 
export default Home