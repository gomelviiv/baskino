import React, {Component} from 'react';
import Header from '../Header';
import './AddSerial_Films.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from "axios";


class AddSerial_Films extends Component {
  constructor(props) {
      super(props);
        this.state ={
          data: "",
          email: "",
          name: "",
        };
      }
    emailChange = (e) => {
      this.setState({
        email: e.target.value,
      })
    }
    nameChange= (e) => {
      this.setState({
        name: e.target.value,
      })
    }
    sendChange = () =>{
      let s = 0;
      let p = 0;
      let userFT = {
        email: this.state.email,
        name: this.state.name,
      }
      if(this.state.email.length>6 &&  this.state.name.length >2){
        for(let i=0;i<this.state.email.length; i++){
          if(this.state.email[i] === "@"){
            s++;
          }
          if(this.state.email[i] ==='.'){
            p++
          }
        }
        if(s === 1 && p>=1){
          const newFilmTvShow =  JSON.stringify(userFT);
          console.log(newFilmTvShow)
          axios.post('http://localhost:4200/newfilmstvshow',{NEWFilmTvShows: newFilmTvShow})
            .then(res => {
              if(res.data===true){
                alert("Movie Sent!")
              }
              if(res.data===false){
                alert("The movie was already sent by someone!")
              }
          })
        } else{
          return(alert("Data is not correct!"))
        }
      } else {
        return(alert("Data is not correct!"))
      }
    }
    render() {
        return (
            <div className={"AddSerial_Films"}>
                <div className={"header"}>
                  <Header/>
                </div>
                <div className={"form-of-dispatch"}>
                  <div className={"name-form"}><h1>Form of Dispatch</h1></div>
                  <div className={"name-ft"}><input placeholder="Name Film or TvShows" onChange={this.nameChange} type="text"/></div>
                  <div className={"name-email"}><input placeholder="Your Email: " onChange={this.emailChange}/></div>
                  <div className={"send"}><a href="#" className="but" onClick={this.sendChange}> Отправить</a></div>
                </div>
            </div>
        )
    }
}

export default AddSerial_Films;
