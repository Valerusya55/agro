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
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
export default new AuthService();