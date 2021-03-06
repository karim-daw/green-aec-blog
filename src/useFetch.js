import { useState, useEffect } from "react"

/* 
this hook fetch data from an api endpoint
you can add a dependancy array
if array is empty [] it will only fire once in teh beggining
if you put something in the array [ name ] it will fire if name changes state   
*/

const useFetch = (url) => {
    // use state properties
    // using hooks to change state upon events
    // isPending is a hook for handling time for GET request from servers
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        // Abort controller used to abort DOM request
        const abortCont = new AbortController()

        // fetch request from blog endpoint
        // use then() method to fire a funciton once the promise from fetch is resolved
        setTimeout(() => {
            fetch(url,{signal: abortCont.signal})
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
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                // handle network error
                .catch(err => {
                    // if user doesnt wait for fetch data and clicks on 
                    // new link, then the fetch promise is aborted, returns AbortError
                    if (err.name === "AbortError"){
                        console.log("fetch aborted")
                    } else {
                    setError(err.message)
                    setIsPending(false)
                    }
                })
        }, 1000)

        return () => abortCont.abort()

    }, [url])
        

    return {data, isPending, error}
}

export default useFetch