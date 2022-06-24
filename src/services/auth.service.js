import axios from 'axios';

class AuthService {
  register(name, email, phone, password) {
    return axios.post(process.env.REACT_APP_API_URL + 'registration', {
      name,
      email,
      phone,
      password
    });
  }

  login(email, password) {
    return axios.post(process.env.REACT_APP_API_URL + 'login', {
      email,
      password
    })
      .then(response => {
        console.log(response.data.token);
        if (response.data.token) {
          localStorage.setItem('user', response.data);
        }
        return response.data;
      });
  }

  logout(){
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    console.log(localStorage.getItem('user'));
    return localStorage.getItem('user');
  }
}
export default new AuthService();