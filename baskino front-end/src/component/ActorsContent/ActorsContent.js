import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Actor from '../Actor/Actor.js'
import SearchLittleFilmContent from '../SearchLittleFilmContent/SearchLittleFilmContent'

import {BrowserRouter, Route, Link} from 'react-router-dom';


import './ActorsContent.css';



class ActorsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            data: "",
        };
    }
    componentDidMount() {
        this.fetchPopular(this.props.match.params);
    }
    fetchPopular = (params)  => {
        fetch(`http://localhost:4200/actors`).then(function (response) {
            return response.json();
        }).then(myJson => this.setState({data: myJson}))
    };
    render() {
      console.log(this.state.data)
        return (
          <div className={"actors-content"}>

            <div>Popular Actors</div>
            <div className="description-actor">
                {this.state.data ? this.state.data.map((post) =>
                <div>
                <Actor post={post}/>
                </div>
                  ) : ""
                }
            </div>

          </div>
        )
    }


}

export default ActorsContent;
