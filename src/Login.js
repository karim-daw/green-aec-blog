import axios from "axios"

  const fetchRandomData = () => {
    return axios.get('https://fastapi-karim.herokuapp.com/')
      .then((res) => {
        // handle success
        console.log(res);
        return res
      })
      .catch(err =>  {
        // handle error
        console.log(err);
      })   
    }

  const Login = () => {
      return (
          <div className="Login">
              <h1>Hello fastapi</h1>
            <button onClick = {() => {fetchRandomData()}}>Fetch data</button>
          </div>
       )
  }

  export default Login
   



 



