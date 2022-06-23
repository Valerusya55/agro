import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AuthService from './services/auth.service';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component{
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard:false,
      currentUser: undefined
    };
  }
  
  componentDidMount(){
    const user = AuthService.getCurrentUser();

    if(user){
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut(){
    AuthService.logout();
  }
  

  render(){
    const {currentUser, showAdminBoard} = this.state;

    return(
      <Router>
        <Header />
      </Router>
    );

  }

}



export default App;
