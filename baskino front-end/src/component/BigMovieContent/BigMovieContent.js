import React, {Component} from 'react'
import BigMovie from '../BigMovie/BigMovie';
import Header from '../Header/Header';
import './BigMovieContent.css'

class BigMovieContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083`).then(function (response) {
            return response.json();
        }).then(myJson => this.setState({data: myJson}));
    }

    render() {
        return (
          <div className="main-content">

                  {this.state.data ? (
                          <BigMovie post={this.state.data}/>
                    ) : ""
                    }

          </div>
        )
    }


}

export default BigMovieContent;
