import axios from 'axios';
import authHeader from './Auth-header';
const API_URL = "https://fastapi-karim.herokuapp.com/"

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'posts');
  }
   getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  } 
}
export default new UserService();