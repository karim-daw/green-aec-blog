import axios from "axios";
const API_URL = "https://fastapi-karim.herokuapp.com/"

class AuthService {

    // method for loging in and getting back jwt token
    login(username, password) {
        return axios
        .post(API_URL + "login", {
            username,
            password
        })
        .then(response => {
            if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
  }
    // logout method
    logout() {
        localStorage.removeItem("user");
    }

    // register new user
    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    // get current user
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();