// blogs and title are props that have data
// handleDelete is a prop that is a function that handles delete
const BlogList = ({ blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // use map() function to itereate over array and manipute data rendered to DOM
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <button onClick={() => handleDelete(blog.id)}> delete blog</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;