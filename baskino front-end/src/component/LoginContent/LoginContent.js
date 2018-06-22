import React, {Component} from 'react';
import Header from '../Header/Header';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";

import Registration from '../RegistrationContent/RegistrationContent';

import './LoginContent.css';


class LoginContent extends Component {
  constructor(props){
    super(props);
      this.state = {
        email: '',
        password: '',
        persons: [],
      }
  }


  componentDidMount() {
      axios.get(`http://localhost:4200/users`)
        .then(res => {
          console.log(res.data)
          this.setState({persons: res.data})})

  }
  EmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }
  PasswordChange= (e) => {
    this.setState({
      password: e.target.value,
    })
  }
  LoginChange = () =>{
      let loginUser = {
        email: this.state.email,
        password: this.state.password,
      }
      if(this.state.email !== "" && this.state.password !== ""){
        const loguser =  JSON.stringify(loginUser);

        axios.post('http://localhost:4200/logpas',{LogUser: loguser})
          .then(res => {
            console.log()
              if(res.data === true){
                console.log(res.data)
                  let user = {
                    email:this.state.email,
                  }
                  let allUser = JSON.stringify(user)
                  localStorage.setItem(`All User`, allUser)
                  alert('Login successful');
              } else {
                alert('Data is not correct')
              }
        })
      } else {
        alert('Data is not correct')
      }
  }
  render(){
    return(
      <div className={"login-container"}>
        <div className="forma-user-login">
        <div>Login:</div>
          <div><input placeholder="Email: " onChange={this.EmailChange} type="text"/></div>
          <div><input placeholder="Password: " type="password" onChange={this.PasswordChange}/></div>
          <div>
            <a className={"button-user"} onClick={this.LoginChange}> Login</a>
            <Link to={"/registration"} className={"button-user"}> REGISTRATION</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginContent;
