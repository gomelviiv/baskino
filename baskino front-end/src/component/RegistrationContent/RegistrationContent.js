import React, {Component} from 'react';
import Header from '../Header/Header';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";


import './RegistrationContent.css';


class RegistrationContent extends Component {
  constructor(props) {
      super(props);
        this.state ={
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          againPassword: "",
          data: "",
          name: "",
        };
      }

  handleInput = (key, value) =>{
    this.setState({
      [key]: value,
    })
  }
  // handleInput = (key, value) =>{
  //   this.setState({
  //     [key]: value,
  //   }, (state)=>{state})
  //
  // }
  RegistrationChange = () => {
    let s = 0;
    let p = 0;
    let chekPassword = false;
    if(this.state.password === this.state.againPassword && this.state.password !== "" &&this.state.againPassword !== ""){
      chekPassword=true;
    } else{
       return(alert("Passwords do not match!"))
    }
    if(this.state.email.length>6 && this.state.firstName !== "" && this.state.lastName !== "" && this.state.password !== "" &&this.state.againPassword !== "" && chekPassword===true){
      for(let i=0;i<this.state.email.length; i++){
        if(this.state.email[i] === "@"){
          s++;
        }
        if(this.state.email[i] ==='.'){
          p++
        }
      }
      if(s === 1 && p>=1){
        let sendingUserData = {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          again_password: this.state.againPassword,
        }
        const regUser =  JSON.stringify(sendingUserData);
        axios.post('http://localhost:4200/reguser',{RegUser: regUser})
            .then(res => {
                alert(res.data);
              })
      } else {
        return(alert("Data is not correct!"))
      }
    } else {
      return(alert("Data is not correct!"))
    }
}

  render(){
    return(
      <div className={"registation-container"}>
        <div className={"header"}><Header/></div>
        <div className="forma-user">
        {/*{this.state.persons ? this.state.persons.map((post) =>
            <div>
          <p>{post.name}</p>
            </div>
        ) : ""
        }*/}
          <div>Registration:</div>
          <div><input placeholder="First Name: " onChange={(e) => {this.handleInput('firstName', e.target.value)}}  type="text"/></div>
          <div><input placeholder="Last Name: " onChange={(e) => {this.handleInput('lastName', e.target.value)}} type="text"/></div>
          <div><input placeholder="Email: " onChange={(e) => {this.handleInput('email', e.target.value)}} type="text"/></div>
          <div><input placeholder="Password: " type="password" onChange={(e) => {this.handleInput('password', e.target.value)}}/></div>
          <div><input placeholder="Again Password: " type="password" onChange={(e) => {this.handleInput('againPassword', e.target.value)}} /></div>
          <div>
            <a className={"button-user"} onClick={this.RegistrationChange}> TO REGISTER</a>
          </div>
        </div>
      </div>
    )
  }
}
export default RegistrationContent;
