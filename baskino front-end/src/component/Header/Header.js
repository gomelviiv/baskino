import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SearchLittleFilmContent from '../SearchLittleFilmContent/SearchLittleFilmContent';
import Registration from "../RegistrationContent/RegistrationContent";
import Login from "../LoginContent/LoginContent";


import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        fetch(`http://localhost:4200/tvshows`).then(function (response) {
            return response.json();
        }).then(myJson =>  this.setState({data: this.state.data.concat(myJson)}))
    }
    // function qwe(){
    //
    //   console.log(a)
    //       var a= 10;
    // }
    render(){
        return(
                <header className={"header-menu"}>
                  <div>
                    <nav>
                      <ul>
                        <li><Link to={''}>Overview</Link></li>
                        <li><Link to={'/movie/popular/1'}>Films</Link></li>
                        <li><Link to={"/tv/popular/1"}>Tv Shows</Link></li>
                        <li><Link to={'/Actors'}>Actors</Link></li>
                        <li><Link to={"/registration"}>Registration</Link></li>
                        <li><Link to={"/login"}>Login</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="search-in-header">
                    <SearchLittleFilmContent posts={this.state.data}/>
                  </div>
                </header>
        )
    }
}
export default Header
