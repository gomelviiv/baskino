import React, { Component } from 'react'
import MiniMovie from '../MiniMovie/MiniMovie';
import Header from '../Header/Header.js'
import SearchLittleFilmContent from '../SearchLittleFilmContent/SearchLittleFilmContent'

import {BrowserRouter, Route, Link} from 'react-router-dom';


import './MiniMovieContent.css';
import nextPageRight from './images/next-page-right.png';
import nextPageLeft from './images/next-page-left.png';


class MiniMovieContent extends Component {
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

    componentWillReceiveProps(nextProps){
        this.fetchPopular(nextProps.match.params);
    }

    fetchPopular = (params)  => {
        fetch(`http://localhost:4200/movies=${Number(params.page)}`).then(function (response) {
         // fetch(`http://localhost:4200/tvshows`).then(function (response) {
            return response.json();
        }).then(myJson => this.setState({data: myJson}))
    };
    render() {
        return (
          <div className={"allMiniMovie-content"}>

              <div>Popular Movie</div>
              <div>
                {this.state.data ? this.state.data.map((post) =>
                <div>
                  <MiniMovie post={post}/>
                </div>
                  ) : ""
                }
              </div>
              <div className={"next-page"}>
                {Number(this.props.match.params.page) === 1 ? (<Link to={`/movie/popular/${Number(this.props.match.params.page) + 1}`}><img src={nextPageRight}/></Link>)
                  : <div>
                    <Link to={`/movie/popular/${Number(this.props.match.params.page) - 1}`}><img className={"img-direction"} src={nextPageLeft }/></Link>
                    <Link to={`/movie/popular/${Number(this.props.match.params.page) + 1}`}><img className={"img-direction"} src={nextPageRight}/></Link>
                    </div>}
                  </div>
                </div>
        )
    }


}

export default MiniMovieContent;
