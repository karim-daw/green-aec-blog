import { useState } from "react"


const Home = () => {
    // using hooks to change values upon events
    const [name, setName] = useState("Karim")

    // using setName to change to new name 
    const handleClick = (name) => {
        setName("Ibrahim")
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
     );
}
 
export default Home