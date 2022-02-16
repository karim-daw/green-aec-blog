import { useState } from "react"


const Home = () => {
    // using hooks to change state upon events
    const [name, setName] = useState("Karim")
    const [age, setAge] = useState(30)

    // using setName to change to new name 
    const handleClick = (name) => {
        setName("Ibrahim")
        setAge(26)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>My name is { name } and I am {age} years old</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
     );
}
 
export default Home