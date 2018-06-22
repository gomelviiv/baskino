import React, { Component } from 'react'
import Header from '../Header/Header.js'
import SearchLittleFilmContent from '../SearchLittleFilmContent/SearchLittleFilmContent'

import {BrowserRouter, Route, Link} from 'react-router-dom';


import './Actor.css';



class Actor extends Component {
    render() {
      const post = this.props.post;

        return (
          <div className={"concrete-actor"}>
              <div className="actor-img"><img src={post._actor_img}/></div>
              <div className="actor-name">{post._actor_name}</div>
              <div className="actor-description">{post._actor_description}</div>
          </div>
        )
    }


}

export default Actor;
