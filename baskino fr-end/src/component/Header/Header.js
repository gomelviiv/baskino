import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SearchLittleFilmContent from '../SearchLittleFilmContent/SearchLittleFilmContent'

import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
        };
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083`).then(function (response) {
            return response.json();
        }).then(myJson => this.setState({data: myJson}))
    }

    render(){
        return(
                <header>
                    <nav>
                        <ul>
                            <li><Link to={''}>Обзор</Link></li>
                            <li><Link to={''}>Фильмы</Link></li>
                            <li><Link to={"/tv/popular/1"}>Сериалы</Link></li>
                            <li><Link to={''}>Актеры</Link></li>
                        </ul>
                    </nav>
                    <div className="search-in-header">
                        <SearchLittleFilmContent posts={this.state.data}/>
                    </div>
                </header>
        )
    }
}
export default Header
